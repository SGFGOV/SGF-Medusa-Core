import { ConfigModule } from "@medusajs/types"

export const isPromise = (obj: unknown): boolean =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof (obj as any).then === "function"

export async function resolveConfigProperties<T>(obj): Promise<T> {
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      await resolveConfigProperties(obj[key])
    }
    if (isPromise(obj[key])) {
      obj[key] = await obj[key]
    }
  }
  return obj
}

export async function resolveConfigModule(
  configuration
): Promise<ConfigModule> {
  const configModule = isPromise(configuration.configModule)
    ? await configuration.configModule
    : configuration.configModule
  ;(configModule as ConfigModule).projectConfig = await resolveConfigProperties<
    ConfigModule["projectConfig"]
  >((configModule as ConfigModule).projectConfig)
  return configModule
}
