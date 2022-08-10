import { Connection, createConnection } from "typeorm"
import { ShortenedNamingStrategy } from "../utils/naming-strategy"
import { AwilixContainer } from "awilix"
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions"
import { ConfigModule, HostConfig } from "../types/global"

type Options = {
  configModule: ConfigModule
  container: AwilixContainer
}

export default async ({
  container,
  configModule,
}: Options): Promise<Connection> => {
  const entities = container.resolve("db_entities")

  const isSqlite = configModule.projectConfig.database_type === "sqlite"

  let hostConfig: HostConfig = {
    database: configModule.projectConfig.database_database,
    url: configModule.projectConfig.database_url,
  }

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
    url: configModule.projectConfig.database_url
      ? configModule.projectConfig.database_url
      : undefined,
    ...{
      host: configModule.projectConfig.database_host ?? "",
      port: configModule.projectConfig.database_port ?? "",
      database: configModule.projectConfig.database_database ?? "",
      ssl: configModule.projectConfig.database_ssl ?? {},
      username: configModule.projectConfig.database_username ?? "",
      password: configModule.projectConfig.database_password ?? "",
    },
    database: configModule.projectConfig.database_database,
    extra: configModule.projectConfig.database_extra || {},
    entities,
    namingStrategy: new ShortenedNamingStrategy(),
    logging: configModule.projectConfig.database_logging || false,
  } as ConnectionOptions)

  if (isSqlite) {
    await connection.query(`PRAGMA foreign_keys = OFF`)
    await connection.synchronize()
    await connection.query(`PRAGMA foreign_keys = ON`)
  }

  return connection
}
