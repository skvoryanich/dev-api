import express from 'express';
import bodyParser from 'body-parser';
import {routesBots} from "./routes";

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

routesBots(app);

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
