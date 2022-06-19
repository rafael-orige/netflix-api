import "dotenv/config"
import { NextFunction } from "express"
import jsonwebtoken from "jsonwebtoken"
import { AppDataSource } from "../infrastructure/database/data-source"
import { User } from "../entities"
import { UnauthorizedException } from "../exceptions"
import { CustomRequest, CustomResponse } from "../interfaces"

const injectUser = async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
  const token = req.headers.authorization?.replace("Bearer ", "")

  if (!token) {
    throw new UnauthorizedException()
  }

  const userRepository = AppDataSource.getRepository(User)
  const payload = await jsonwebtoken.verify(token, process.env.JWT_KEY as string)

  if (!payload.sub) {
    throw new UnauthorizedException()
  }

  const loggedUser = await userRepository.findOne({ where: { id: +payload.sub } })

  if (!loggedUser) {
    throw new UnauthorizedException()
  }

  req.loggedUser = loggedUser

  next()
}

export default injectUser
