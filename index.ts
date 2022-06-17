import "reflect-metadata"
import dotenv from "dotenv"
import express, { Application } from "express"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import passport from "passport"

import databaseInitialize from "./configs/database/data-source"
import startRoutes from "./src/routers"

dotenv.config()

const app: Application = express()

const PORT = 8080

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY as string
}

const strategy = new JwtStrategy(opts, function (payload, done) {
  console.log(payload)
  return done(null, {})
})

passport.use(strategy)

databaseInitialize()
startRoutes(app)

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
