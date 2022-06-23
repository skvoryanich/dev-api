import express from 'express';
import bodyParser from 'body-parser';
import {routesBots} from "./routes_bots";
import { AppDataSource } from "./data-source"
import { Bots } from "./entity/Bots"

const app = express()

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
    const bots = new Bots()
    bots.name = "testfirstbot"
    bots.idTg = 25124125
    await AppDataSource.manager.save(bots)
}).catch(error => console.log(error))


app.use(bodyParser.urlencoded({ extended: true }));

routesBots(app);

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
