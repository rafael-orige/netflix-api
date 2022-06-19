import { Router } from "express"
import passport from "passport"
import { ListController } from "../controllers"
import injectUser from "../middlewares/inject-user.middleware"

const ListRouter = Router()

const passportAuthenticate = passport.authenticate('jwt', { session: false })

ListRouter.get("/list", passportAuthenticate, injectUser, ListController.list)

ListRouter.post("/list", passportAuthenticate, injectUser, ListController.add)

ListRouter.delete("/list/:showId", passportAuthenticate, injectUser, ListController.remove)

export default ListRouter
