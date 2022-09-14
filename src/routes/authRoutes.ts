import {Response, Request, Router} from "express";

/**
 * Namespace /auth
 */

export function authRoutes(): Router {
    const router = Router();

    router.get('/', (req: Request, res: Response) => {
        let cookie = req.cookies.JTOKEN;
        if (cookie && cookie != 'empty'){
            res.redirect("/");
        } else {
            res.render('auth', {
                title: 'Авторизация - REPORTS',
                text: 'Авторизация'
            });
        }
    });

    router.post('/', (req: Request, res: Response) => {
        if (!req.body.login_name || !req.body.login_password){
            res.json({auth_state: 'fail', message: 'Заполните все поля для ввода'});
            return;
        }
        let state = checkAuth(req.body.login_name, req.body.login_password);

        if (state){
            res.json({auth_state: 'ok', message: req.body.login_name+req.body.login_password});
        } else {
            res.json({auth_state: 'fail', message: 'Не правильный логин или пароль'});
        }
    });

    return router;
}

const users = [
    {login:"oskvortsov",password:"123"},
    {login:"test",password:"test"}
];


function checkAuth(login: string, password: string){
    let user = users.find(u => (u.login == login && u.password == password));
    return !!user;
}