import { Response } from "express"

const errorHandler = (error: any, res: Response) => {
  console.log(error.status)
  res.status(error.status)
    .json({
      error: true,
      message: error.message
    })
}

export default errorHandler
