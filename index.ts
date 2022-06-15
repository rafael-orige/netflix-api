import "reflect-metadata"
import express from "express"
import startRoutes from "./src/routers"

const app: express.Application = express()

const PORT = 8080

startRoutes(app)

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
