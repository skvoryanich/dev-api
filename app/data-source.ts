import "reflect-metadata"
import { DataSource } from "typeorm"
import { Bots } from "./entity/Bots"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "skvoryanich",
    password: "Hk2x9c8FGhJ",
    database: "devapi",
    synchronize: true,
    logging: false,
    entities: [Bots],
    migrations: [],
    subscribers: [],
})
