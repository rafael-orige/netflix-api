import { Request, Response } from "express"
import { ShowService } from "../services"
import HTTP_STATUS from "../enums/http-status.enums"
import errorHandler from "../middlewares/error-handler.middleware"

const showService = new ShowService()

class ShowController {
  public static async list(req: Request, res: Response) {
    const shows = await showService.list()

    res.send(shows)
  }

  public static async listOne(req: Request, res: Response) {
    try {
      const { params: { id } } = req
      const show = await showService.listOne(+id)

      res.json(show)
    } catch (error) {
      errorHandler(error, res)
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const show = req.body

      const result = await showService.create(show)

      res.status(HTTP_STATUS.CREATED).send(result)
    } catch (error) {
      res.status(400)
    }
  }

  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const result = await showService.delete(+id)

      res.status(200).json(result)
    } catch (error) {
      console.log(error)
      errorHandler(error, res)
    }
  }
}

export default ShowController
