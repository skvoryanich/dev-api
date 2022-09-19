import {Response, Request, Router} from "express";
import {JWT} from "../modules/JWTClass";
/**
 * Namespace /
 */

export function mainRoutes(): Router {
    const router = Router();
    const jwt = new JWT;

    router.get('/', (req: Request, res: Response) => {
        try {
            jwt.checkToken(req.cookies.JTOKEN);
            res.render('index', {
                title: 'Главная - REPORTS',
                text: 'Главная страница. Тут должен быть редирект на авторизацию, как и на всех страницах - если нет куки с именем JTOKEN или он равняется empty'
            });
        } catch (err){
            res.redirect("/auth");
        }
    });

    return router;
}