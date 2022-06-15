import { Router } from "express"
import { ShowController } from "../controllers"
import validationMiddleware from "../middlewares/validation.middleware"
import createShow from "../schemas/create-show.schema"

const ShowsRouter = Router()

ShowsRouter.get("/show", ShowController.list)
ShowsRouter.post("/show", validationMiddleware(createShow), ShowController.create)

export default ShowsRouter
