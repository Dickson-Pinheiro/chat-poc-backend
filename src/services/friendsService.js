import { friendsRepository } from "../repositories/friendsRepository.js"

export const friendsService = {
    async addFriend(id, friendId){
        await friendsRepository.addFriend(id, friendId);
        await friendsRepository.addFriend(friendId, id);
    },
    
    async removeFriend(id, friendId){
        await friendsRepository.removeFriend(id, friendId);
        await friendsRepository.removeFriend(friendId, id);
    }
}
