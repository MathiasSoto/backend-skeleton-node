import { api, web } from "./routes";

export const router = (app) => {

    app.use("/api/v1/", api);
}