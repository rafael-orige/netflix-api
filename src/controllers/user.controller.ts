import { Request } from "express"
import { HTTP_STATUS } from "../enums"
import { CustomResponse } from "../interfaces"
import { UserService } from "../services"

const userService = new UserService()

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

      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default UserController
