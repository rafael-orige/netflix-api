import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { UnauthorizedException } from "../exceptions"
import UserService from "./user.service"
import dotenv from "dotenv"

dotenv.config()

class AuthService {
  /**
   * Realiza autenticação do usuário
   *
   * @param email email do usuário
   * @param password email do usuário
   * @returns LoginResponse
   *
   */
  async login(email: string, password: string) {
    const userService = new UserService()

    const user = await userService.getUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException()
    }

    const passwordMathces = await bcrypt.compare(password, user.password)

    if (!passwordMathces) {
      throw new UnauthorizedException()
    }

    const token = jwt.sign({
      sub: user.id,
      iat: Date.now(),
      email: user.email
    }, process.env.JWT_KEY as string)

    return token
  }
}

export default AuthService
