export function routes(app: any) {
    app.get('/bots', (req: any, res: any) => {
        res.send('lalala');
    })
}