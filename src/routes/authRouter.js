import { Router } from "express";
import { authController } from "../controllers/authController.js";
const authRouter = Router()

authRouter.post('/login', authController.login)
authRouter.post('/signup', authController.signup)

export {authRouter}