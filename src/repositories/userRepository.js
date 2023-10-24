import { db } from "../config/connection.js";
import crypto from 'crypto'

async function updateUserSocketId(id, socketId){
    return db.collection('users').updateOne({id}, {$set: {socketId}})
}

async function getUserById(id){
    return db.collection('users').findOne({id})
}

async function getUserByEmail(email){
    return db.collection('users').findOne({email})
}

async function createUser(name, email, password){
    return db.collection('users').insertOne(
        {
        id: crypto.randomUUID(),
        name,
        email,
        password,
        socketId: ""
    })
}

async function findAllUsers(id){
    const friends = await db.collection('friends').find({userId: id}).toArray();
    const ids = friends.map(f => {
        return f.friendId
    })

    return (await db.collection('users').find({}).toArray()).filter((i) => ids.includes(i.id))
}

const userRepository = {
    updateUserSocketId,
    getUserById,
    getUserByEmail,
    createUser,
    findAllUsers,
}

export {userRepository};