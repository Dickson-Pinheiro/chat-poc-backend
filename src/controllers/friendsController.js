import { friendsService } from "../services/friendsService.js"

export const friendsController = {
    async addFriend(req, res){
        const {id} = req.app.locals
        const {id: friendId} = req.params

        try {
            await friendsService.addFriend(id, friendId)
            return res.status(201).send()   
        } catch (error) {
            console.log(error)
            return res.status(500).send()
        }
        
    },
    async removeFriend(req, res){
        const {id} = req.app.locals
        const {id: friendId} = req.params
        try {
            await friendsService.removeFriend(id, friendId)
            return res.status(204).send()   
        } catch (error) {
            console.log(error)
            return res.status(500).send()
        }
        
    }
}