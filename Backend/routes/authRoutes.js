import { Router } from "express";
import { Login, SignUp } from "../controllers/authContollers.js";

const router= Router()

router.post("/signin", SignUp)
router.post("/login", Login)

export default router