import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Show {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  cover: string

  @Column()
  director: string

  @Column()
  actors: string

  @Column()
  description: string

  @Column()
  category: string
}

export default Show
