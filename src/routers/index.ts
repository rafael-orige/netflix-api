import express, { Application } from "express"
import morgan from "morgan"
import { errorHandlerMiddleware } from "../middlewares"

import ShowsRouter from "./shows.router"
import UserRouter from "./user.router"
import AuthRouter from "./auth.router"
import EpisodesRouter from "./episodes.router"
import ListRouter from "./list.router"

const routes = [
  ShowsRouter,
  UserRouter,
  AuthRouter,
  EpisodesRouter,
  ListRouter
]

const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))
  app.use(errorHandlerMiddleware)

  app.use(routes)
}

export default startRoutes
