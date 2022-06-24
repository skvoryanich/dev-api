import express from "express";
import {BotsRoutes} from "./routes/botsRoutes";

export class Server {
    private app: express.Application;
    private botsRoutes: BotsRoutes;

    constructor() {
        this.app = express();
        this.configuration();
        this.botsRoutes = new BotsRoutes();
        this.routes();
    }

    public configuration(){
        this.app.set('port', process.env.PORT || 3000);
    }

    public routes(){
        this.app.use(`/bots/`, this.botsRoutes.router);
        this.app.get("/", (req, res) => {
            res.send('test');
        });
    }

    public start(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`http://localhost:${this.app.get('port')} server start`);
        })
    }
}