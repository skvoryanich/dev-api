import express, {Application, Request, Response} from "express";
import {BotsRoutes} from "./routes/botsRoutes";

export class Server {
    private botsRoutes: BotsRoutes;
    private app: Application;

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
        this.app.get("/", (req: Request, res:Response) => {
            res.json({
                type: 'message',
                message: 'restfull api for telegram reminds'
            });
        });
    }

    public start(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`http://localhost:${this.app.get('port')} server start`);
        })
    }
}