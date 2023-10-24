import express from 'express'
import { createServer } from "http";
import dotenv from 'dotenv';
import { routes } from './routes/routes.js';
import { Server } from "socket.io";
import cors from 'cors'
import { eventAuthMiddleware } from './middlewares/eventAuthMiddleware.js';
import { connecionEvent } from './events/connectionEvent.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.use(eventAuthMiddleware)
io.on("connection", connecionEvent);

httpServer.listen(8080, () => {
    console.log('Server is running')
    console.log(process.env.VERIFY);
});