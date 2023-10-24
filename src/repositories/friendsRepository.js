import { db } from "../config/connection.js";

export const friendsRepository = {
    async addFriend(id, friendId){
        return db.collection('friends').insertOne({userId: id, friendId: friendId})
    },

    async removeFriend(id, friendId){
        return db.collection('friends').deleteOne({userId: id, friendId: friendId})
    }
}