import { Router } from "express";
import { post } from "../controller/accountController";

const router = Router();
const BASE_PATH = "/account";

router.post(BASE_PATH, post);

export default router;