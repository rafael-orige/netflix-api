import { Router } from "express"
import { UserController } from "../controllers"

import { validationMiddleware } from "../middlewares"
import { CreateUserSchema } from "../schemas"

const UserRouter = Router()

UserRouter.post("/user", validationMiddleware(CreateUserSchema), UserController.create)

export default UserRouter
