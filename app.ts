import express from "express";
import router from "@routes";

(() => {
    const PORT = parseInt(process.env.PORT as string);
    const app = express();

    app.use(router);
    app.use(express.json());
    app.listen(PORT, () => { console.log(`Server running: http://localhost:${PORT}`) });
})();