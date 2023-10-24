import {Router} from 'express'
import { authRouter } from './authRouter.js'
import { userRouter } from './userRouter.js'
import { friendsRouter } from './friendsRouter.js'
const routes = Router()

routes.use(authRouter)
routes.use(userRouter)
routes.use(friendsRouter)

export {routes}