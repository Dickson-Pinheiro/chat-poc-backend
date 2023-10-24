import { db } from "../config/connection.js";

async function getAllMessages(){
    return db.collection('messages').find({}).toArray();
}

async function createMessage(message){
    return db.collection('messages').insertOne(message)
}

const messagesRepository = {
    getAllMessages,
    createMessage,
}

export {messagesRepository}