import express from 'express';
import bodyParser from 'body-parser';
import {routesBots} from "./routes_bots";
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

routesBots(app);

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
