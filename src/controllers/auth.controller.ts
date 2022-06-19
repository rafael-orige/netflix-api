import { Request } from "express"
import { CustomResponse } from "../interfaces"
import { AuthService } from "../services"

const authService = new AuthService()

class AuthController {
  public static async login(req: Request, res: CustomResponse) {
    const { body: { email, password } } = req

    try {
      const authenticated = await authService.login(email, password)

      res.send(authenticated)
    } catch (error) {
      console.log(`Erro ao logar usuário! Dados: ${JSON.stringify(email)}`)

      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default AuthController
