import crypto from 'crypto'
import { messagesRepository } from "../repositories/messagesRepository.js";
import { userRepository } from "../repositories/userRepository.js";

export const messageEvents = {
    requestMessages(socket) {
        return async (data) => {
            const messages = await messagesRepository.getAllMessages()
        const chatMessages = messages.filter(m => {
            if((m.to === data && m.from === socket.data.id) || (m.to === socket.data.id && m.from === data)){
                return true
            }
        })
        socket.emit('load_messages', chatMessages)
        }
    },
    
    setMessages(socket){
        return async (data) => {
            const messageDetail = {
                text: data.text,
                to: data.to,
                from: socket.data.id,
                id: crypto.randomUUID()
            }
            await messagesRepository.createMessage(messageDetail);
            const userSendMessage = await userRepository.getUserById(messageDetail.to)
            socket.to(userSendMessage.socketId).emit('receive_message', messageDetail)
        }
    }
}