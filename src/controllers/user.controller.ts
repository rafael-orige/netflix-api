import { Request } from "express"
import { HTTP_STATUS } from "../enums"
import logger from "../infrastructure/logger/logger"
import { CustomResponse } from "../interfaces"
import { UserService } from "../services"

const userService = new UserService()
const winstonLogger = logger({ controller: "UserController" })

class UserController {
  public static async create(req: Request, res: CustomResponse) {
    const { body } = req

    try {
      const user = await userService.create(body)

      res.status(HTTP_STATUS.CREATED).json({
        id: user.id,
        email: user.email
      })
    } catch (error) {
      console.log(`Erro ao criar usuario! Dados: ${JSON.stringify(body)}`)
      winstonLogger.error(`Erro ao criar usuario! Dados: ${JSON.stringify(body)}`)

      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default UserController
