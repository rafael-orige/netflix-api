import { Request, NextFunction } from "express"
import { Schema } from "joi"
import { ValidationException } from "../exceptions"
import { CustomResponse } from "../interfaces"

const validationMiddleware = (schema: Schema) => async (req: Request, res: CustomResponse, next: NextFunction) => {
  try {
    const validated = await schema.validate(req.body, { abortEarly: false })

    if (validated.error) {
      throw new ValidationException("Campos inválidos", validated.error?.details)
    }

    next()
  } catch (error: any) {
    res.errorHandler && res.errorHandler(error)
  }
}

export default validationMiddleware
