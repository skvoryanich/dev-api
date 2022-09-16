import {Response, Request, Router} from "express";
import {JWT} from "../modules/JWTClass";
/**
 * Namespace /
 */

export function mainRoutes(): Router {
    const router = Router();
    const jwt = new JWT;

    router.get('/', (req: Request, res: Response) => {
        let token = jwt.checkToken(req.cookies.JTOKEN);
        if (token) {
            res.render('main', {
                title: 'Главная - REPORTS',
                text: 'Главная страница. Тут должен быть редирект на авторизацию, как и на всех страницах - если нет куки с именем JTOKEN или он равняется empty',
                test: JSON.stringify(token)
            });
        } else {
            res.redirect("/auth");
        }
    });

    return router;
}