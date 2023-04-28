import { getConfigFile } from "medusa-core-utils"
import {asyncLoadConfig} from "@medusajs/medusa/dist/utils/async-load-config"
import { ConfigModule, PluginOptions } from "../types"

export const loadConfig =  async () => {
  
  const configModule = await asyncLoadConfig( process.cwd(),
  "medusa-config")
  /*const { configModule } = getConfigFile<ConfigModule>(
    process.cwd(),
    "medusa-config"
  )*/

  const plugin = configModule.plugins?.find(
    (p) =>
      (typeof p === "string" && p === "@sgftech/admin") ||
      (typeof p === "object" && p.resolve === "@sgftech/admin")
  )

  let defaultConfig: PluginOptions = {
    serve: true,
    autoRebuild: true,
    path: "app",
    outDir:"build",
    strapiUrl:"http://localhost:1337",
    loginUrl: "http://localhost:7001"
  }

  if (plugin && typeof plugin !== "string") {
    const { options } = plugin as { options: PluginOptions }
    if(options)
    defaultConfig = {
      serve: options.serve ?? defaultConfig.serve,
      autoRebuild: options.autoRebuild ?? defaultConfig.autoRebuild,
      path: options.path ?? defaultConfig.path,
      outDir: options.outDir ?? defaultConfig.outDir,
      strapiUrl: options.strapiUrl?? defaultConfig.strapiUrl,
      loginUrl: options.loginUrl?? defaultConfig.loginUrl,
    }
  }

  return defaultConfig
}
