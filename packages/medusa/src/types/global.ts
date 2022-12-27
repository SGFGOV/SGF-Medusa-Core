import { AwilixContainer } from "awilix"
import { Request } from "express"
import { MedusaError } from "medusa-core-utils"
import { LoggerOptions } from "typeorm"
import { Logger as _Logger } from "winston"
import { Customer, User } from "../models"
import { FindConfig, RequestQueryFields } from "./common"

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: (User | Customer) & { customer_id?: string; userId?: string }
      scope: MedusaContainer
      validatedQuery: RequestQueryFields & Record<string, unknown>
      validatedBody: unknown
      listConfig: FindConfig<unknown>
      retrieveConfig: FindConfig<unknown>
      filterableFields: Record<string, unknown>
      errors: string[]
      session: any
    }
  }
}

export type ExtendedRequest<TEntity> = Request & { resource: TEntity }

export type ClassConstructor<T> = {
  new(...args: unknown[]): T
}

export type MedusaContainer = AwilixContainer & {
  registerAdd: <T>(name: string, registration: T) => MedusaContainer
}

export type Logger = _Logger & {
  progress: (activityId: string, msg: string) => void
  info: (msg: string) => void
  warn: (msg: string) => void
}

export type ModuleResolution = {
  resolutionPath: string | false
  definition: ModuleDefinition
  options?: Record<string, unknown>
}

export type ModuleDefinition = {
  key: string
  registrationName: string
  defaultPackage: string | false
  label: string
  canOverride?: boolean
  isRequired?: boolean
}
export type DatabaseTlsOptions = {
  ca: string | undefined
  rejectUnauthorized: boolean | undefined
}

export type DatabaseHostConfig =
  | {
    database?: string
    schema?: string
    password?: string | (() => string) | (() => Promise<string>)
    port?: number
    host?: string
    ssl?: boolean | DatabaseTlsOptions
    username?: string
  }
  | {
    database?: string
    schema?: string
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

export type ConfigurableModuleDeclaration = {
  resolve?: string
  options?: Record<string, unknown>
}

export type ConfigModule = {
  projectConfig: {
    redis_url?: string

    jwt_secret?: string
    cookie_secret?: string
    database_host?: string
    database_port?: number
    database_ssl?: DatabaseTlsOptions
    database_username?: string
    database_password?: string | (() => string) | (() => Promise<string>)
    database_database?: string

    database_url?: string
    database_type: string
    database_schema?: string
    database_logging?: LoggerOptions

    database_extra?: Record<string, unknown> & {
      ssl: { rejectUnauthorized: false }
    }
    store_cors?: string
    admin_cors?: string
    externalAuth?: externalAuthentication
    secureKeys?: { [key: string]: string }
  }
  featureFlags: Record<string, boolean | string>
  modules?: Record<string, false | string | ConfigurableModuleDeclaration>
  moduleResolutions?: Record<string, ModuleResolution>
  plugins: (
    | {
      resolve: string
      options: Record<string, unknown>
    }
    | string
  )[]
}
