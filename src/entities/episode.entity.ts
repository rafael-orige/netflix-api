import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import Show from "./show.entity"

@Entity('episodes')
class Episode {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  cover: string

  @Column()
  duration: number

  @ManyToMany(() => Show, show => show.episodes)
  show: Show
}

export default Episode
