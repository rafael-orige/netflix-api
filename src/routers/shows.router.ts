import { Router } from "express"
import { ShowController } from "../controllers"
import validationMiddleware from "../middlewares/validation.middleware"
import createShow from "../schemas/create-show.schema"

const ShowsRouter = Router()

ShowsRouter.get("/show", ShowController.list)

ShowsRouter.get("/show/:id", ShowController.listOne)

ShowsRouter.post("/show", validationMiddleware(createShow), ShowController.create)

ShowsRouter.delete("/show/:id", ShowController.delete)

export default ShowsRouter
