import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { Show } from "../../src/entities"

dotenv.config()

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST_DB,
  port: parseInt(process.env.PORT_DB as string),
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB,
  entities: [Show],
  synchronize: true
})

async function databaseInitialize() {
  try {
    await AppDataSource.initialize()

    console.log("Banco de dados conectado")
  } catch (error) {
    console.log(error)
  }
}

export default databaseInitialize
