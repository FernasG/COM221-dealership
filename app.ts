import { engine } from "express-handlebars";
import express, { Express } from "express";
import Application from "@application";
import router from "@routes";
import path from "path";

const setupServer = ((app: Express) => {
    app.use(router);
    app.use(express.json());
    app.use(express.static(path.resolve('src', 'views', 'layouts')));

    app.set('view engine', 'hbs');
    app.set('views', path.resolve('src', 'views'));
    app.engine('hbs', engine({ defaultLayout: 'index.hbs' }));
});

(() => {
    const PORT = parseInt(process.env.PORT as string);
    const app = express();
    setupServer(app);

    app.listen(PORT, () => { console.log(`Server running: http://localhost:${PORT}`) });
})();