import { Strategy as GoogleStrategy } from "passport-google-oidc"
import { Customer } from "../../.."
import { CustomerService, UserService } from "../../../services"
import { ConfigModule } from "../../../types/global"

export class MedusaGooleStrategy {
  constructor(
    private readonly configModule: ConfigModule,
    private readonly customerService: CustomerService
  ) {}

  getStrategy() {
    const customerService = this.customerService
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
      async function (issuer, profile, cb) {
        /** fetch user from user service */
        let customer: Customer
        try {
          customer = await customerService.retrieveByEmail(profile.email[0])
        } catch (e) {
          console.info("custiner not found, attempting to create customer user")
          try {
            customer = await customerService.create({
              email: profile.email,
            })
          } catch (error) {
            return cb(error)
          }
        }

        return cb(null, customer)
      }
    )
    return strategy
  }
}
export default MedusaGooleStrategy
