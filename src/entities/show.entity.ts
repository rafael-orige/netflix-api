import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import ShowCategory from "../enums/show-category.enum"
import Episode from "./episode.entity"

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

  @OneToMany(() => Episode, episode => episode.show, { eager: true })
  episodes: Episode[]
}

export default Show
