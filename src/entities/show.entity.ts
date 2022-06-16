import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import ShowCategory from "../enums/show-category.enum"

@Entity('shows')
class Show {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  cover: string

  @Column({ length: 100 })
  director: string

  @Column({ length: 200 })
  actors: string

  @Column({ type: 'longtext' })
  description: string

  @Column()
  category: ShowCategory
}

export default Show
