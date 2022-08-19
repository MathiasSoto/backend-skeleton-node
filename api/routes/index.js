import authRouter from "./authRoutes";
import accountRoutes from "./accountRoutes";

const api = [
    authRouter,
    accountRoutes
];

const web = [

];

export {
    api,
    web
}