import {Response, Request, Router} from "express";

/**
 * Namespace /
 */

export function mainRoutes(): Router {
    const router = Router();

    router.get('/', (req: Request, res: Response) => {
        res.render('home', {
            text: 'Главная страница. Тут должен быть редирект на авторизацию, как и на всех страницах - если нет куки с именем JTOKEN или он равняется empty'
        });
    });

    return router;
}