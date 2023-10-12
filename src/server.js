import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    console.log("socket  ", socket.id)

    socket.on('set_message', text => {
        console.log(text)
        io.emit('receive_message', {
            text,
            authorId: socket.id
        })
    })
});

httpServer.listen(3000);