import {Router, Response, Request} from "express";

export class BotsRoutes{
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public main(req: Request, res: Response){
        res.send('get req to bots');
    }

    public one(req: Request, res: Response){
        const id = req['params']['id'];
        res.send(`get req to bot with id: ${id}`);
    }

    public add(req: Request, res: Response){
        res.send('post req to bots');
    }

    public edit(req: Request, res: Response){
        const id = req['params']['id'];
        res.send(`put req to bots with id: ${id}`);
    }

    public delete(req: Request, res: Response){
        const id = req['params']['id'];
        res.send(`delete req to bots with id: ${id}`);
    }

    public routes(){
        this.router.get('/', this.main);
        this.router.get('/:id', this.one);
        this.router.post('/', this.add);
        this.router.put('/:id', this.edit);
        this.router.delete('/:id', this.delete);
    }
}