import { getConfigFile } from "medusa-core-utils"

import { ConfigModule } from "@medusajs/types"
import { resolveConfigModule } from "./async-load-helper"

/**
 * @deprecated
 *
 * **/
export async function asyncLoadConfig(
  rootDir?: string,
  filename?: string
): Promise<ConfigModule> {
  let rootDirectory = rootDir
  if (process.env.NODE_ENV == "test" && !rootDir && !filename) {
    rootDirectory = `${__dirname}/__fixtures__/`
    filename = "default-case-non-async-data-postgres"
  }

  const configuration = getConfigFile(
    rootDirectory ?? process.cwd(),
    filename ?? `medusa-config`
  ) as {
    configModule: ConfigModule | Promise<ConfigModule>
    configFilePath: string
    error?: Error
  }
  if (configuration.error) {
    throw new Error(
      "config module load error " + JSON.stringify(configuration.error)
    )
  }

  const configModule = await resolveConfigModule(configuration)

  return configuration.configModule
}
