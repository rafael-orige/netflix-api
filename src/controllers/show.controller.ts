import { Request, Response } from "express"
import { ShowService } from "../services"
import HTTP_STATUS from "../constants/http-status.constants"
const showService = new ShowService()

class ShowController {
  public static async list(req: Request, res: Response) {
    const shows = await showService.list()

    res.send(shows)
  }

  public static async create(req: Request, res: Response) {
    try {
      const show = req.body

      const result = await showService.create(show)

      res.status(HTTP_STATUS.CREATED).send(result)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default ShowController
