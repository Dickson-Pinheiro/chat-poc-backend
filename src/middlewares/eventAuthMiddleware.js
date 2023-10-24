import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export function eventAuthMiddleware(socket, next) {
    const bearerToken = socket.handshake.auth.token
    if(!bearerToken){
        const err = new Error('not authorized')
        return next(err)
    }
    const [, token] = bearerToken.split(' ');

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err){
            const err2 = new Error('not authorized')
            next(err2)
        }
        else {
            socket.data.id = decoded.id
            next()
        }
    })
}