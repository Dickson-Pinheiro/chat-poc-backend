import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export function authRouteMiddleware(req, res, next){
    const auth = req.headers.authorization
    if(!auth){
        return res.status(401).send({name: "unauthorized", message: "unauthorizer"})
    }
    const [, token] = auth.split(' ');
    if(!token){
        return res.status(401).send({name: "unauthorized", message: "unauthorizer"})
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err){
            return res.status(401).send({name: "unauthorized", message: "unauthorizer"})
        }
        else {
            req.app.locals.id = decoded.id
            next()
        }
    })
}