import { Repository } from "typeorm"
import { AppDataSource } from "../../configs/database/data-source"
import { Show } from "../entities"

interface CreateShowDTO {
  title: string;
  cover: string,
  director: string,
  actors: string,
  description: string,
  category: string
}

class ShowService {
  private showRepository: Repository<Show>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
  }

  /**
   *
   * @returns Retorna todos os filmes
   */
  list() {
    return this.showRepository.find()
  }

  /**
   *
   * @returns O filme criado
   */
  create(show: CreateShowDTO) {
    const showEntity = this.showRepository.create(show)

    return this.showRepository.save(showEntity)
  }
}

export default ShowService
