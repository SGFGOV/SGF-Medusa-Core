import passport from "passport"
import { Strategy as BearerStrategy } from "passport-http-bearer"
import { Strategy as JWTStrategy } from "passport-jwt"
import { Strategy as SaasformStrategy } from "passport-saasform"
import { Strategy as SaasformOidcStrategy } from "passport-saasform"

import { Strategy as LocalStrategy } from "passport-local"
import { Express, NextFunction, Request, Response } from "express"
import { EntityManager } from "typeorm"
import { MedusaError } from "medusa-core-utils"
import jwt from "jsonwebtoken"
import _ from "lodash"

import AbstractAuthStrategy from "../../interfaces/authentication-strategy"
import { AuthService } from "../../services"
import { ConfigModule, MedusaContainer } from "../../types/global"
import { validator } from "../../utils/validator"
import auth, { AdminPostAuthReq } from "../../api/routes/admin/auth"

type InjectedDependencies = {
  manager: EntityManager
}

// eslint-disable-next-line max-len
export default class AdminDefaultAuthenticationStrategy extends AbstractAuthStrategy {
  static identifier = "core-admin-default-auth"

  protected manager_: EntityManager
  protected transactionManager_: EntityManager | undefined

  protected readonly configModule_: ConfigModule
  static authStrategy: any

  constructor({ manager }: InjectedDependencies, configModule: ConfigModule) {
    super({ manager }, configModule)
    this.configModule_ = configModule
    this.manager_ = manager
  }

  static async beforeInit(
    app: Express,
    container: MedusaContainer,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options?: Record<string, unknown>
  ): Promise<void> {
    const authService = container.resolve("authService") as AuthService
    const configModule = container.resolve("configModule") as ConfigModule

    // For good old email password authentication
    passport.use(
      new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        },
        async (email, password, done) => {
          try {
            const { success, user } = await authService.authenticate(
              email,
              password
            )
            if (success) {
              return done(null, user)
            } else {
              return done("Incorrect Username / Password")
            }
          } catch (error) {
            return done(error)
          }
        }
      )
    )

    // After a user has authenticated a JWT will be placed on a cookie, all
    // calls will be authenticated based on the JWT
    const { jwt_secret } = configModule.projectConfig
    passport.use(
      new JWTStrategy(
        {
          jwtFromRequest: (req): string => req.session.jwt,
          secretOrKey: jwt_secret,
        },
        async (jwtPayload, done) => {
          return done(null, jwtPayload)
        }
      )
    )

    // Alternatively use bearer token to authenticate to the admin api
    passport.use(
      new BearerStrategy(async (token, done) => {
        const auth = await authService.authenticateAPIToken(token)
        if (auth.success) {
          done(null, auth.user)
        } else {
          done(auth.error)
        }
      })
    )

    if (configModule.projectConfig.externalAuth) {
      this.authStrategy = new SaasformStrategy(
        {
          // this is overridden by docker to connect to Saasform API
          saasformServerUrl:
            configModule.projectConfig.externalAuth.externaAuthServerUrl,
          saasformUrl: configModule.projectConfig.externalAuth.signUpUrl,
          appBaseUrl: configModule.projectConfig.externalAuth.redirectionUrl,
        },
        async (token, done) => {
          {
            const name = token?.name as string
            if (token.id && token.email) {
              const first_name = ""
              const last_name = ""
              return done(
                null,
                { ...token, first_name, last_name },
                { scope: "read" }
              )
            }
          }
          return done(null, false)
        }
        /* async (token: string, done): Promise<any> => {
          const auth = await passport.authenticate("  ", {
            // failureRedirect: "/login",
            failureMessage: true,
            session: true,
            keepSessionInfo: true,
          })
          if (auth.success) {
            done(null, auth.user)
          } else {
            done(auth.error)
          }
          return auth.user
        }*/
      )
      passport.use(this.authStrategy)
    }
    app.use(passport.initialize())
    app.use(passport.session())
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async shouldUseStrategy(
    req: Request,
    scope: "admin" | "store"
  ): Promise<boolean> {
    return scope === "admin"
  }

  async authenticate(req: Request, res: Response): Promise<void> {
    const { jwt_secret } = this.configModule_.projectConfig
    if (!jwt_secret) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        "Please configure jwt_secret in your environment"
      )
    }
    const validated = await validator(AdminPostAuthReq, req.body)

    const authService: AuthService = req.scope.resolve("authService")
    const result = await authService.authenticate(
      validated.email,
      validated.password
    )

    if (result.success && result.user) {
      // Add JWT to cookie
      req.session.jwt = jwt.sign({ userId: result.user.id }, jwt_secret, {
        expiresIn: "24h",
      })

      const cleanRes = _.omit(result.user, ["password_hash"])

      res.json({ user: cleanRes })
    } else {
      res.sendStatus(401)
    }
  }

  async unAuthenticate(req: Request, res: Response): Promise<void> {
    req.session.destroy()
    res.status(200).end()
  }

  async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const standardAuthMethods = ["jwt", "bearer"]
    const externalAuthMethods =
      this.configModule_.projectConfig.externalAuth?.authMethod
    const authMethods = externalAuthMethods
      ? standardAuthMethods.concat(externalAuthMethods)
      : standardAuthMethods
    passport.authenticate(authMethods, {
      session: false,
    })(req, res, next)
  }
}
