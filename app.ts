import { engine } from "express-handlebars";
import express, { Express } from "express";
import router from "@routes";
import path from "path";

const setupServer = ((app: Express) => {
    app.use(router);
    app.use(express.json());
    app.use(express.static(path.resolve('src', 'views', 'layouts')))

    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', path.resolve('src', 'views'));
});

(() => {
    const PORT = parseInt(process.env.PORT as string);
    const app = express();
    setupServer(app);

    app.listen(PORT, () => { console.log(`Server running: http://localhost:${PORT}`) });
})();