import { Router } from "express"
import * as cors from "cors"
import * as bodyParser from "body-parser"
import configLoader from "@medusajs/medusa/dist/loaders/config"
import { parseCorsOrigins } from "medusa-core-utils"
import { wrapHandler } from "@medusajs/medusa"
import {
  update as subscribeNewsletterUpdate,
  add as subscribeNewsletterAdd,
} from "./subscribe-newsletter"

const router = Router()

export default async (app: Router, rootDirectory) => {
  const config = await configLoader(rootDirectory)

  const corsOptions = {
    origin: parseCorsOrigins(
      config.configModule.projectConfig.store_cors || ""
    ),
    credentials: true,
  }

  app.use("/mailchimp", router)

  router.use(cors(corsOptions))

  router.post(
    "/subscribe",
    bodyParser.json(),
    wrapHandler(subscribeNewsletterAdd)
  )

  router.put(
    "/subscribe",
    bodyParser.json(),
    wrapHandler(subscribeNewsletterUpdate)
  )

  return app
}
