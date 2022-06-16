import express, { Application } from "express"
import ShowsRouter from "./shows.router"
import morgan from "morgan"
import databaseInitialize from "../../configs/database/data-source"

const routes = [
  ShowsRouter
]

const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))

  app.use(routes)

  databaseInitialize()
}

export default startRoutes
