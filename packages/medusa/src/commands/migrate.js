import { createConnection } from "typeorm"
import { getConfigFile } from "medusa-core-utils"
import featureFlagLoader from "../loaders/feature-flags"
import configLoader from "../loaders/config"
import Logger from "../loaders/logger"

import getMigrations from "./utils/get-migrations"

const t = async function ({ directory }) {
  const args = process.argv
  args.shift()
  args.shift()
  args.shift()
  const configModule = await configLoader(directory)
  //  const migrationDirs = await getMigrations(directory)
  let hostConfig = {
    database: configModule.projectConfig.database_database,
    url: configModule.projectConfig.database_url,
  }

  //  const { configModule } = getConfigFile(directory, `medusa-config`)

  const featureFlagRouter = featureFlagLoader(configModule)
  const enabledMigrations = await getMigrations(directory, featureFlagRouter)
  if (configModule.projectConfig.database_host) {
    hostConfig = {
      host: configModule.projectConfig.database_host,
      port: configModule.projectConfig.database_port,
      database: configModule.projectConfig.database_database,
      ssl: configModule.projectConfig.database_ssl,
      username: configModule.projectConfig.database_username,
      password: configModule.projectConfig.database_password,
    }
  }

  const connection = await createConnection({
    type: configModule.projectConfig.database_type,
    ...hostConfig,
    extra: configModule?.projectConfig.database_extra || {},
    migrations: enabledMigrations,
    logging: true,
  })

  if (args[0] === "run") {
    await connection.runMigrations()
    await connection.close()
    Logger.info("Migrations completed.")
    process.exit()
  } else if (args[0] === "revert") {
    await connection.undoLastMigration({ transaction: "all" })
    await connection.close()
    Logger.info("Migrations reverted.")
    process.exit()
  } else if (args[0] === "show") {
    const unapplied = await connection.showMigrations()
    await connection.close()
    process.exit(unapplied ? 1 : 0)
  }
}

export default t
