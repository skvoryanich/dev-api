import express, {Application, Request, Response} from "express";
import {AuthRoutes} from "./routes/authRoutes";

export class Server {
    private authRoutes: AuthRoutes;
    private app: Application;

    constructor() {
        this.app = express();
        this.configuration();
        this.authRoutes = new AuthRoutes();
        this.routes();
    }

    public configuration(){
        this.app.set('port', 8080);
    }

    public routes(){
        this.app.get("/", (req: Request, res:Response) => {
            res.json({
                type: 'message',
                message: 'Главная страница. Тут должен быть редирект на авторизацию, как и на всех страницах - если нет куки с именем JTOKEN или он равняется empty'
            });
        });
        this.app.use(`/auth/`, this.authRoutes.router);
    }

    public start(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`http://localhost:${this.app.get('port')} server start`);
        })
    }
}