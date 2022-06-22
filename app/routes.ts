export function routesBots(app: any) {
    app.get('/', (req: any, res: any) => {
        res.json({
            type: 'message',
            body: 'RESTfull api for telegram reminds'
        });
    })

    app.get('/bots', (req: any, res: any) => {
        res.send('lalala');
    })
}