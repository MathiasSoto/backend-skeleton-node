import express from "express";
import morgan from "morgan";
import cors from "cors";

import { corsOptions } from "../../config/cors";

export const corsMiddleware = (app) => {
    app.use(cors(corsOptions));
}

export const jsonMiddleware = (app) => {
    app.use(express.json());
}

export const morganMiddleware = (app) => {
    app.use(morgan("combined"));
}