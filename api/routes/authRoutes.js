import { Router } from "express";
import { post } from "../controller/authController";
import { health } from "../controller/healthController";

const router = Router();
const BASE_PATH = "/auth";

router.get("/", health);
router.post(BASE_PATH, post);

export default router;