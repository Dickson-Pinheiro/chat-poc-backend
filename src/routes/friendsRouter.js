import {Router} from 'express'
import { friendsController } from '../controllers/friendsController.js'
import { authRouteMiddleware } from '../middlewares/authRouteMiddlware.js'
const friendsRouter = Router()

friendsRouter.post('/friends/add/:id', authRouteMiddleware, friendsController.addFriend)
friendsRouter.delete('/friends/remove/:id', authRouteMiddleware, friendsController.removeFriend)

export {friendsRouter}