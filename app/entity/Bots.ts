import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Bots {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    idTg: number

}
