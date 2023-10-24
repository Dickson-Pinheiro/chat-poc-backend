import { userService } from "../services/userService.js"

export const userController = {
    async getUsers(req, res) {
        const { id } = req.app.locals
        const result = await userService.getUsers(id)
        return res.send(result)
    },

    async me(req, res){
        const {id} = req.app.locals
        const result = await userService.me(id)
        return res.send({
            id: result.id,
        })
    }
}