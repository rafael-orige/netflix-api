import { UnauthorizedException } from "../exceptions"
import { CustomRequest, CustomResponse } from "../interfaces"
import { ListService } from "../services"

const listService = new ListService()

class ListController {
  public static async list(req: CustomRequest, res: CustomResponse) {
    try {
      const myList = req.loggedUser?.list

      res.json(myList)
    } catch (error) {
      console.log(`Erro ao trazer a lista! Dados: ${JSON.stringify(req.loggedUser)}`)

      res.errorHandler && res.errorHandler(error)
    }
  }

  public static async add(req: CustomRequest, res: CustomResponse) {
    const { body: { showId }, loggedUser } = req

    try {
      if (!loggedUser) {
        throw new UnauthorizedException()
      }

      const added = await listService.add(showId, loggedUser)

      res.json(added)
    } catch (error) {
      console.log(`Erro ao salvar na lista! Dados: ${JSON.stringify(req.loggedUser)}`)

      res.errorHandler && res.errorHandler(error)
    }
  }

  public static async remove(req: CustomRequest, res: CustomResponse) {
    const { params: { showId }, loggedUser } = req

    try {
      if (!loggedUser) {
        throw new UnauthorizedException()
      }

      const removed = await listService.remove(+showId, loggedUser)

      res.json(removed)
    } catch (error) {
      console.log(`Erro ao remover da lista! Dados: ${JSON.stringify(req.loggedUser)}`)

      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default ListController
