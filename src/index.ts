import express, {Request, Response} from "express";
import {engine} from "express-handlebars";
import path from "path";
import {mainRoutes} from "./routes/mainRoutes";
import {authRoutes} from "./routes/authRoutes";

function initExpress(){
    const app = express()

    app.set('port', 8080);
    app.use(express.static('public'));
    app.engine('.hbs', engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.set("views", path.join(__dirname, "views"));

    app.use('/', mainRoutes());
    app.use('/auth', authRoutes());

    app.listen(app.get('port'), () => {
        console.log(`http://localhost:${app.get('port')} server start`);
    });
}

initExpress();