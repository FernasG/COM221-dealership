import express, { Express } from "express";
import { engine } from "express-handlebars";
import { RequestMiddleware } from "@middleware"
import { Helpers } from "@handlebars-helpers";
import router from "@routes";
import path from "path";

const setupServer = ((app: Express) => {
    app.use(express.json());
    app.use(RequestMiddleware.request);
    app.use(express.static(path.resolve('public', 'views', 'layouts')));
    app.use(router);

    app.set('view engine', 'hbs');
    app.set('views', path.resolve('public', 'views'));
    app.engine('hbs', engine({ defaultLayout: 'index.hbs', helpers: Helpers }));
});

(() => {
    const PORT = parseInt(process.env.PORT as string);
    const app = express();
    setupServer(app);

    app.listen(PORT, () => { console.log(`Server running: http://dealership or http://localhost:${PORT}`) });
})();