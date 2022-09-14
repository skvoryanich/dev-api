import express, {Application, Request, Response} from "express";
import {AuthRoutes} from "./routes/authRoutes";
import { engine } from "express-handlebars";
import path from "path";

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
        this.app.use(express.static('public'));
        this.app.engine('handlebars', engine());
        this.app.set('view engine', 'handlebars');
        this.app.set("views", path.join(__dirname, "views"));
    }

    public routes(){
        this.app.get("/", (req: Request, res:Response) => {
            res.render('home', {
                text: 'Главная страница. Тут должен быть редирект на авторизацию, как и на всех страницах - если нет куки с именем JTOKEN или он равняется empty'
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