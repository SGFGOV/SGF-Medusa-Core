import {
  Connection,
  createConnection,
  getConnectionManager,
  getConnection,
} from "typeorm"
import { ShortenedNamingStrategy } from "../utils/naming-strategy"
import { AwilixContainer } from "awilix"
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions"
import { ConfigModule, DatabaseHostConfig } from "../types/global"

type Options = {
  configModule: ConfigModule
  container: AwilixContainer
}

export default async (options: Options): Promise<Connection> => {

  const { container, configModule } = options;
  const entities = container.resolve("db_entities")

  const isSqlite = configModule.projectConfig.database_type === "sqlite"

  const cnnManager = getConnectionManager()
  if (cnnManager.has("default") && getConnection().isConnected) {
    await getConnection().close()
  }
  let hostConfig: DatabaseHostConfig = {
    database: configModule.projectConfig.database_database,
    url: configModule.projectConfig.database_url,
    schema: configModule.projectConfig.database_schema,
    logging: configModule.projectConfig.database_logging

  }

  if (configModule.projectConfig.database_host) {
    hostConfig = {
      host: configModule.projectConfig.database_host,
      port: configModule.projectConfig.database_port,
      database: configModule.projectConfig.database_database,
      schema: configModule.projectConfig.database_schema,
      logging: configModule.projectConfig.database_logging,
      ssl: configModule.projectConfig.database_ssl,
      username: configModule.projectConfig.database_username,
      password: configModule.projectConfig.database_password,
    }
  }

  const connection = await createConnection({
    type: configModule.projectConfig.database_type,
    ...hostConfig,
    extra: configModule.projectConfig.database_extra || {},
    schema: configModule.projectConfig.database_schema,
    entities,
    namingStrategy: new ShortenedNamingStrategy(),
    logging: configModule?.projectConfig.database_logging,
  } as ConnectionOptions)

  if (isSqlite) {
    await connection.query(`PRAGMA foreign_keys = OFF`)
    await connection.synchronize()
    await connection.query(`PRAGMA foreign_keys = ON`)
  }

  return connection
}
