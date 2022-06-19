import { NextFunction, Request } from "express"
import { CustomResponse } from "../interfaces"
import { HttpException } from "../exceptions"
import { HTTP_STATUS } from "../enums"

const errorHandlerMiddleware = (req: Request, res: CustomResponse, next: NextFunction) => {
  res.errorHandler = (error: any) => {
    if (error instanceof HttpException) {
      res.status(error.status).json({
        error: true,
        message: error.message
      })
    } else {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: true })
    }
  }

  next()
}

export default errorHandlerMiddleware
