import {Router, Response, Request} from "express";

export class AuthRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public main(req: Request, res: Response){
        res.send('Страница ввода логина и пароля');
    }

    public add(req: Request, res: Response){
        res.send('Обработчик пост данных авторизации по логину и паролю');
    }

    public routes(){
        this.router.get('/', this.main);
        this.router.post('/', this.add);
    }
}