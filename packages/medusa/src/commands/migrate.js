import { asValue, createContainer } from "awilix"
import featureFlagLoader from "../loaders/feature-flags"
import { handleConfigError } from "../loaders/config"
import configModuleLoader from "../loaders/config"
import Logger from "../loaders/logger"
import databaseLoader from "../loaders/database"
import getMigrations, { getModuleSharedResources } from "./utils/get-migrations"

const getDataSource = async (directory) => {
  const { configModule, error } = await configModuleLoader(directory)

  if (error) {
    handleConfigError(error)
  }
  //  const migrationDirs = await getMigrations(directory)
  let hostConfig = {
    database: configModule.projectConfig.database_database,
    schema: configModule.projectConfig.database_schema,
    logging: configModule.projectConfig.database_logging,
    url: configModule.projectConfig.database_url,
    extra: configModule?.projectConfig.database_extra || {},
  }

  if (configModule.projectConfig.database_host) {
    hostConfig = {
      host: configModule.projectConfig.database_host,
      port: configModule.projectConfig.database_port,
      database: configModule.projectConfig.database_database,
      schema: configModule.projectConfig.database_schema,
      extra: configModule?.projectConfig.database_extra || {},
      logging: configModule.projectConfig.database_logging,
      ssl: configModule.projectConfig.database_ssl,
      username: configModule.projectConfig.database_username,
      password: configModule.projectConfig.database_password,
    }
  }

  const featureFlagRouter = featureFlagLoader(configModule)

  const { coreMigrations } = await getMigrations(directory, featureFlagRouter)

  const { migrations: moduleMigrations } = getModuleSharedResources(
    configModule,
    featureFlagRouter
  )

  const container = createContainer()
  container.register("db_entities", asValue([]))

  return await databaseLoader({
    container,
    configModule,
    customOptions: {
      migrations: coreMigrations.concat(moduleMigrations),
      logging: "all",
    },
  })
}

const main = async function ({ directory }) {
  const args = process.argv

  args.shift()
  args.shift()
  args.shift()

  const dataSource = await getDataSource(directory)

  if (args[0] === "run") {
    await dataSource.runMigrations()
    await dataSource.destroy()
    Logger.info("Migrations completed.")
    process.exit()
  } else if (args[0] === "revert") {
    await dataSource.undoLastMigration({ transaction: "all" })
    await dataSource.destroy()
    Logger.info("Migrations reverted.")
    process.exit()
  } else if (args[0] === "show") {
    const unapplied = await dataSource.showMigrations()
    Logger.info(unapplied)
    await dataSource.destroy()
    process.exit(unapplied ? 1 : 0)
  }
}

export default main
