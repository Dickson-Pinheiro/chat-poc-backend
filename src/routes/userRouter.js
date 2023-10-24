import { userController } from "../controllers/userController.js";
import { Router } from "express";
import { authRouteMiddleware } from "../middlewares/authRouteMiddlware.js";
const userRouter = Router()

userRouter.get('/users', authRouteMiddleware, userController.getUsers);
userRouter.get('users/me', authRouteMiddleware, userController.me);

export {userRouter}