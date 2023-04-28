import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { InlineConfig } from "vite"
import { AdminDevConfig } from "../types/dev"

export const getCustomViteDevConfig = ({
  backend = "http://localhost:9000",
  strapi = "http://localhost:1337",
  login = "http://localhost:7001",
  port = 7001,
}: AdminDevConfig): InlineConfig => {
  const uiPath = resolve(__dirname, "..", "..", "ui")

  return {
    define: {
      __BASE__: JSON.stringify("/"),
      __MEDUSA_BACKEND_URL__: JSON.stringify(backend),
      __STRAPI_URL__: JSON.stringify(strapi),
      __LOGIN_URL__:JSON.stringify(login)
    },
    plugins: [react()],
    root: uiPath,
    mode: "development",
    server: {
      port,
    },
  }
}
