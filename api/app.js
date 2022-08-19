import express from "express";
import dotenv from "dotenv";
import { init } from "../config/database";
import { router } from "./router";
import { errorMiddleware } from "./middleware/errorMiddleware";
import { authenticationMiddleware } from "./middleware/authMiddleware";
import { corsMiddleware, jsonMiddleware, morganMiddleware } from "./middleware/appMiddleware";

(async () => {

    dotenv.config({ path: "api/env/dev.env", debug: true });

    const app = express();

    // Middlewares
    jsonMiddleware(app);
    corsMiddleware(app);
    morganMiddleware(app);

    // Token authentication middleware
    app.use(authenticationMiddleware);

    // Routers init
    router(app);

    // Error response middleware
    app.use(errorMiddleware);

    // Database init connection
    await init();

    // Run server
    app.listen(process.env.PORT, () => console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`));
})();