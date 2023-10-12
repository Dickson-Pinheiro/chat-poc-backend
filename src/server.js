import express from 'express'
import { createServer } from "http";
import { Server } from "socket.io";
import crypto from 'crypto'
const app = express()

const httpServer = createServer(app);
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

app.get("/", (req, res) => {
    res.send("Giphy Chat Server is running successfully");
});
  
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
})


httpServer.listen(8080, () => {
    console.log('Server is running')
});