import { getConfigFile } from "medusa-core-utils"
import { ConfigModule } from "../types/global"
import logger from "./logger"
import registerModuleDefinitions from "./module-definitions"

const isProduction = ["production", "prod"].includes(process.env.NODE_ENV || "")

const errorHandler = isProduction
  ? (msg: string): never => {
      throw new Error(msg)
    }
  : console.log
export const handleConfigError = (error: Error): void => {
  logger.error(`Error in loading config: ${error.message}`)
  if (error.stack) {
    logger.error(error.stack)
  }
  process.exit(1)
}

export const handleConfigError = (error: Error): void => {
  logger.error(`Error in loading config: ${error.message}`)
  if (error.stack) {
    logger.error(error.stack)
  }
  process.exit(1)
}



export default async (rootDirectory: string): Promise<ConfigModule> => {
  const configuration = getConfigFile(rootDirectory, `medusa-config`) as ConfigurationType
  

  
  
  if (configuration.error) {
    handleConfigError(configuration.error)
  }
  const error = undefined
  if (error) {
    handleConfigError(error)
  }

  const resolveConfigProperties = async (obj): Promise<ConfigModule> => {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        await resolveConfigProperties(obj[key])
      }
      if (typeof obj[key] === "function") {
        obj[key] = await obj[key]()
      }
    }
    return obj
  }
  const configModule = await resolveConfigProperties(configuration.configModule)

  if (!configModule?.projectConfig?.redis_url) {
    console.log(
      `[medusa-config] ⚠️ redis_url not found. A fake redis instance will be used.`
    )
  }

  const jwt_secret =
    configModule?.projectConfig?.jwt_secret ?? process.env.JWT_SECRET

  // Must be kept for invite verification / reset password system
  if (!jwt_secret) {
    errorHandler(
      `[medusa-config] ⚠️ jwt_secret not found.${
        isProduction
          ? ""
          : " fallback to either cookie_secret or default 'supersecret'."
      }`
    )
  }

  const cookie_secret =
    configModule?.projectConfig?.cookie_secret ?? process.env.COOKIE_SECRET
  if (!cookie_secret) {
    errorHandler(
      `[medusa-config] ⚠️ cookie_secret not found.${
        isProduction
          ? ""
          : " fallback to either cookie_secret or default 'supersecret'."
      }`
    )
  }

  if (!configModule?.projectConfig?.database_type) {
    console.log(
      `[medusa-config] ⚠️ database_type not found. fallback to default sqlite.`
    )
  }

  const moduleResolutions = registerModuleDefinitions(configModule)

  return {
    projectConfig: {
      jwt_secret: jwt_secret ?? "supersecret",
      cookie_secret: cookie_secret ?? "supersecret",
      ...configModule?.projectConfig,
    },
    modules: configModule.modules ?? {},
    moduleResolutions,
    featureFlags: configModule?.featureFlags ?? {},
    plugins: configModule?.plugins ?? [],
  }
}
