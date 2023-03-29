import { join } from "path"
import { isPromise, resolveConfigModule } from "./async-load-helper"

/**
 * Attempts to resolve the config file in a given root directory.
 * @param {string} rootDir - the directory to find the config file in.
 * @param {string} configName - the name of the config file.
 * @return {object} an object containing the config module and its path as well as an error property if the config couldn't be loaded.
 */
function getConfigFile<TConfig = unknown>(
  rootDir: string,
  configName: string
): { configModule: TConfig; configFilePath: string; error?: any } {
  const configPath = join(rootDir, configName)
  let configFilePath = ``
  let configModule
  let err

  try {
    configFilePath = require.resolve(configPath)
    configModule = require(configFilePath)
    if (isPromise(configModule)) {
      resolveConfigModule({ configModule }).then((config) => {
        Object.assign(configModule, config)
        return config
      })
    }
  } catch (e) {
    err = e
  }

  if (configModule && typeof configModule.default === "object") {
    configModule = configModule.default
  }

  return { configModule, configFilePath, error: err }
}

export default getConfigFile
