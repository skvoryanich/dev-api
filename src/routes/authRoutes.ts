import {Response, Request, Router} from "express";

/**
 * Namespace /auth
 */

export function authRoutes(): Router {
    const router = Router();

    router.get('/', (req: Request, res: Response) => {
        res.send('Страница ввода логина и пароля');
    });

    router.post('/', (req: Request, res: Response) => {
        res.send('Обработчик пост данных авторизации по логину и паролю');
    });

    return router;
}