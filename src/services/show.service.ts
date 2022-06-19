import { Repository } from "typeorm"
import { AppDataSource } from "../infrastructure/database/data-source"
import { Show } from "../entities"
import ShowCategory from "../enums/show-category.enum"
import NotFoundException from "../exceptions/not-found.exception"

interface CreateShowDTO {
  title: string;
  cover: string,
  director: string,
  actors: string,
  description: string,
  category: ShowCategory
}

class ShowService {
  private showRepository: Repository<Show>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
  }

  /**
   *
   * @returns Retorna todos os shows
   */
  list() {
    return this.showRepository.find()
  }

  listOne(id: number) {
    const show = this.showRepository.findOne({ where: { id } })

    if (show) {
      return show
    }

    throw new NotFoundException(`O show id: ${id} não foi encontrado`)
  }

  /**
   *
   * @returns O show foi criado
   */
  create(show: CreateShowDTO) {
    const showEntity = this.showRepository.create(show)

    return this.showRepository.save(showEntity)
  }

  async delete(id: number) {
    const showEntity = await this.showRepository.delete(id)

    if (showEntity.affected) {
      return showEntity
    }

    throw new NotFoundException(`Show com o id ${id} não foi encontrado`)
  }

  async update(id: number) {
    console.log(id)
  }
}

export default ShowService
