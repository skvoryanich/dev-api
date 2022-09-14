import express, {Request, Response} from "express";
import {engine} from "express-handlebars";
import path from "path";
import {mainRoutes} from "./routes/mainRoutes";
import {authRoutes} from "./routes/authRoutes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

function initExpress(){
    const app = express()

    app.set('port', 8080);
    app.engine('.hbs', engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.set("views", path.join(__dirname, "views"));
    app.use(express.static(path.join(__dirname, "public")));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());


    app.use('/', mainRoutes());
    app.use('/auth', authRoutes());

    app.listen(app.get('port'), () => {
        console.log(`http://localhost:${app.get('port')} server start`);
    });
}

initExpress();