import { Request, response } from "express"
import { HTTP_STATUS } from "../enums"
import { CustomResponse } from "../interfaces"
import { EpisodeService } from "../services"

const episodeService = new EpisodeService()

class EpisodeController {
  public static async create(req: Request, res: CustomResponse) {
    try {
      const { body } = req

      const createdEpisode = await episodeService.create(body)

      response.status(HTTP_STATUS.CREATED).json(createdEpisode)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default EpisodeController
