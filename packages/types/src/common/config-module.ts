import { RedisOptions } from "ioredis"
import { LoggerOptions } from "typeorm"
import {
  ExternalModuleDeclaration,
  InternalModuleDeclaration,
} from "../modules-sdk"

type SessionOptions = {
  name?: string
  resave?: boolean
  rolling?: boolean
  saveUninitialized?: boolean
  secret?: string
  ttl?: number
}

export type DatabaseTlsOptions = {
  ca: string | undefined
  rejectUnauthorized: boolean | undefined
}

export type DatabaseHostConfig =
  | {
      database?: string
      schema?: string
      logging?: LoggerOptions
      password?: string | (() => string) | (() => Promise<string>)
      port?: number
      host?: string
      ssl?: boolean | DatabaseTlsOptions
      username?: string
    }
  | {
      database?: string
      schema?: string
      logging?: LoggerOptions
      url?: string
    }

export type externalAuthentication = {
  authMethod: string
  externaAuthServerUrl: string
  signUpUrl: string
  redirectionUrl: string
}

export type ConfigurationType = {
  configModule: ConfigModule
  configFilePath: string
} & { error: Error | null }


export type HttpCompressionOptions = {
  enabled?: boolean
  level?: number
  memLevel?: number
  threshold?: number | string
}

export type ProjectConfigOptions = {
  redis_url?: string
  redis_options?: RedisOptions

  session_options?: SessionOptions

  jwt_secret?: string
  cookie_secret?: string

  database_url?: string
  database_type: string
  database_database?: string
  database_schema?: string
  database_logging: LoggerOptions

    database_host?: string
    database_port?: number
    database_ssl?: DatabaseTlsOptions
    database_username?: string
    database_password?: string | (() => string) | (() => Promise<string>)


    database_poolSize?:number;
    database_maxQueryExecutionTime ?: number;
    database_logNotifications?:boolean;
    database_connectTimeoutMS?:number;

    externalAuth?: externalAuthentication
    secureKeys?: { [key: string]: string }
  http_compression?: HttpCompressionOptions

  database_extra?: Record<string, unknown> & {
    ssl: { rejectUnauthorized: false }
  }
  store_cors?: string
  admin_cors?: string
}

export type ConfigModule = {
  projectConfig: ProjectConfigOptions
  featureFlags: Record<string, boolean | string>
  modules?: Record<
    string,
    | false
    | string
    | Partial<InternalModuleDeclaration | ExternalModuleDeclaration>
  >
  plugins: (
    | {
        resolve: string
        options: Record<string, unknown>
      }
    | string
  )[]
}
