import { CommonTypes } from "@medusajs/types"
import { Request } from "express"
import { MedusaContainer as coreMedusaContainer } from "medusa-core-utils"
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
      allowedProperties: string[]
      includes?: Record<string, boolean>
      errors: string[]
      session: any
    }
  }
}

export type ExtendedRequest<TEntity> = Request & { resource: TEntity }

export type ClassConstructor<T> = {
  new (...args: unknown[]): T
}

export type MedusaContainer = coreMedusaContainer

export type Logger = _Logger & {
  progress: (activityId: string, msg: string) => void
  info: (msg: string) => void
  warn: (msg: string) => void
}

export enum MODULE_SCOPE {
  INTERNAL = "internal",
  EXTERNAL = "external",
}

export enum MODULE_RESOURCE_TYPE {
  SHARED = "shared",
  ISOLATED = "isolated",
}

/* export type ConfigurableModuleDeclaration = {
  scope: MODULE_SCOPE.INTERNAL
  resources: MODULE_RESOURCE_TYPE
  resolve?: string
  options?: Record<string, unknown>
}*/
/*
| {
    scope: MODULE_SCOPE.external
    server: {
      type: "built-in" | "rest" | "tsrpc" | "grpc" | "gql"
      url: string
      options?: Record<string, unknown>
    }
  }
*/

/* export type ModuleResolution = {
  resolutionPath: string | false
  definition: ModuleDefinition
  options?: Record<string, unknown>
  moduleDeclaration?: ConfigurableModuleDeclaration
}*/

export type LoaderOptions = {
  container: MedusaContainer
  configModule: ConfigModule
  options?: Record<string, unknown>
  logger?: Logger
}

export type Constructor<T> = new (...args: any[]) => T

export type ConfigModule = CommonTypes.ConfigModule
