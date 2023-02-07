import { createConnection } from "typeorm"
import featureFlagLoader from "../loaders/feature-flags"
import configLoader from "../loaders/config"
import { handleConfigError } from "../loaders/config"
import configModuleLoader from "../loaders/config"
import Logger from "../loaders/logger"

import getMigrations, { getModuleSharedResources } from "./utils/get-migrations"

const getDataSource = async (directory) => {
  const { configModule, error } = configModuleLoader(directory)

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

  const { coreMigrations } = getMigrations(directory, featureFlagRouter)

  const { migrations: moduleMigrations } = getModuleSharedResources(
    configModule,
    featureFlagRouter
  )

  return await createConnection({
    type: configModule.projectConfig.database_type,
    ...hostConfig,
    migrations: coreMigrations.concat(moduleMigrations),
    logging: configModule?.projectConfig.database_logging,
  })
}

const main = async function ({ directory }) {
  const args = process.argv
  args.shift()
  args.shift()
  args.shift()

  if (args[0] === "run") {
    const dataSource = await getDataSource(directory)

    await dataSource.runMigrations()
    await dataSource.close()
    Logger.info("Migrations completed.")
    process.exit()
  } else if (args[0] === "revert") {
    const dataSource = await getDataSource(directory)

    await dataSource.undoLastMigration({ transaction: "all" })
    await dataSource.close()
    Logger.info("Migrations reverted.")

    process.exit()
  } else if (args[0] === "show") {
    const configModule = configModuleLoader(directory)

    const featureFlagRouter = featureFlagLoader(configModule)

    const { coreMigrations } = getMigrations(directory, featureFlagRouter)

    const connection = await createConnection({
      type: configModule.projectConfig.database_type,
      url: configModule.projectConfig.database_url,
      extra: configModule.projectConfig.database_extra || {},
      schema: configModule.projectConfig.database_schema,
      migrations: coreMigrations,
      logging: true,
    })

    const unapplied = await connection.showMigrations()
    await connection.close()
    process.exit(unapplied ? 1 : 0)
  }
}

export default main
