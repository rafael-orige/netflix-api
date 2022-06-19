import { Router } from "express"

import { AuthController } from "../controllers"
import { validationMiddleware } from "../middlewares"
import { LoginSchema } from "../schemas"

const AuthRouter = Router()

AuthRouter.post("/auth", validationMiddleware(LoginSchema), AuthController.login)

export default AuthRouter
