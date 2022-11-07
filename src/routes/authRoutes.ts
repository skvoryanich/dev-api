import {Response, Request, Router} from "express";
import {JWT} from "../modules/JWTClass";
import ldap from "ldapjs";
import {PSSQL} from "../modules/PSSQLClass";

/**
 * Namespace /auth
 */

export function authRoutes(): Router {
    const router = Router();
    const jwt: JWT = new JWT;
    const db = new PSSQL();

    router.get('/', (req: Request, res: Response) => {
        let token = req.cookies.JTOKEN;

        try {
            jwt.checkToken(token)
            res.redirect("/");
        } catch (err) {
            res.render('auth', {
                title: 'Авторизация - REPORTS',
                text: 'Авторизация'
            });
        }
    });

    router.post('/', async (req: Request, res: Response) => {
        if (!req.body.login_name || !req.body.login_password){
            res.json({auth_state: 'fail', message: 'Заполните все поля для ввода'});
            return;
        }
        const checkAccess = await db.checkExistAccess(req.body.login_name);
        if (checkAccess == 1) {
            const result = await checkAuth(req.body.login_name, req.body.login_password);

            if (result) {
                res.json({auth_state: 'ok', message: jwt.generateToken({username: req.body.login_name})});
            } else {
                res.json({auth_state: 'fail', message: 'Не правильный логин или пароль'});
            }
        } else {
            res.json({auth_state: 'fail', message: 'У вас нет доступа к системе. Запросите доступ через администратора'});
        }

    });

    router.get('/logout', (req: Request, res: Response) => {
        res.cookie('JTOKEN', 'empty');
        res.redirect("/auth");
    });

    return router;
}

let client = ldap.createClient({
    url: "ldap://corp.oblakowifi.ru:389"
});

function checkAuth(login: string, password: string): Promise<boolean>{
    return new Promise((resolve) => {
        client.bind('corp\\'+login,password, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}