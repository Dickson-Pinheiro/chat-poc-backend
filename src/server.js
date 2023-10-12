import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv';
dotenv.config()

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    socket.on('set_message', text => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            id: crypto.randomUUID()
        })
    })
});

httpServer.listen(8080, () => {
    console.log('Server is running')
});