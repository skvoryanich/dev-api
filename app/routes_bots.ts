import {AppDataSource} from "./data-source";
import {Bots} from "./entity/Bots";

export function routesBots(app: any) {
    app.get('/', (req: any, res: any) => {
        res.json({
            type: 'message',
            body: 'RESTfull api for telegram reminds'
        });
    })

    app.get('/bots', async (req: any, res: any) => {
        const users = await AppDataSource.manager.find(Bots)
        res.json(users);
    })
}