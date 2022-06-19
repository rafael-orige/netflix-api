import { Router } from "express"
import passport from "passport"

import { EpisodeController } from "../controllers"
import { validationMiddleware } from "../middlewares"
import { CreateEpisodeSchema } from "../schemas"

const EpisodesRouter = Router()

const passportAuthenticate = passport.authenticate('jwt', { session: false })

EpisodesRouter.post("/episodes", passportAuthenticate, validationMiddleware(CreateEpisodeSchema), EpisodeController.create)

export default EpisodesRouter
