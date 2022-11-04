import { Strategy as GoogleStrategy } from "passport-google-oidc"
import { Customer } from "../../.."
import { CustomerService, UserService } from "../../../services"
import { ConfigModule } from "../../../types/global"
import { to } from "await-to-js"
import { Express } from "express"
import passport from "passport"
import jwt from "jsonwebtoken"

export class MedusaGooleStrategy {
  constructor(
    private readonly configModule: ConfigModule,
    private readonly customerService: CustomerService,
    private readonly app: Express
  ) {}

  verifyCallback = async (accessToken, refreshToken, profile, done) => {
    const customerService = this.customerService
    /** fetch user from user service */
    const [err, user] = await to(
      customerService.retrieveByEmail(profile.email[0])
    )
    if (err || user) {
      return done(err, user)
    }
    const [createdError, createdUser] = await to(
      customerService.create({
        email: profile.email,
      })
    )
    return done(createdError, createdUser)
  }

  getStrategy() {
    const strategy = new GoogleStrategy(
      {
        clientID:
          this.configModule.projectConfig.secureKeys?.GOOGLE_CLIENT_ID ??
          "dummy",
        clientSecret:
          this.configModule.projectConfig.secureKeys?.GOOGLE_CLIENT_SECRET ??
          "dummy",
        callbackURL:
          this.configModule.projectConfig.secureKeys?.GOOGLE_CLIENT_CALLBACK ??
          "dummy",
      },
      this.verifyCallback
    )
    return strategy
  }
}
export default MedusaGooleStrategy
