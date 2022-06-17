import { Request, Response } from "express"
import { ShowService } from "../services"
import HTTP_STATUS from "../enums/http-status.enums"
import { CustomResponse } from "../interfaces"

const showService = new ShowService()

class ShowController {
  public static async list(req: Request, res: Response) {
    const shows = await showService.list()

    res.send(shows)
  }

  public static async listOne(req: Request, res: CustomResponse) {
    try {
      const { params: { id } } = req
      const show = await showService.listOne(+id)

      res.json(show)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
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

  public static async delete(req: Request, res: CustomResponse) {
    try {
      const { id } = req.params

      const result = await showService.delete(+id)

      res.status(200).json(result)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default ShowController
