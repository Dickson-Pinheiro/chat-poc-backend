import { userRepository } from "../repositories/userRepository.js";
import { messageEvents } from "./messageEvents.js";

export async function connecionEvent(socket) {
    await userRepository.updateUserSocketId(socket.data.id, socket.id);
    socket.on('request_messages', messageEvents.requestMessages(socket))
    socket.on('set_message', messageEvents.setMessages(socket))
}