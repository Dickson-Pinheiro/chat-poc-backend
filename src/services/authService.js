import jwt from 'jsonwebtoken'
import { userRepository } from "../repositories/userRepository.js"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

async function login(email, password){
    const user = await userRepository.getUserByEmail(email)
        if(!user){
            throw {message: "unauthorized"}
        }

        const validatePassword = bcrypt.compareSync(password, user.password)

        if(!validatePassword){
            throw {message: "unauthorized"}
        }
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '3h'})
        return {
            token,
            name: user.name,
            id: user.id  
        }
}

async function signup(name, email, password){
    const userWithEmail = await userRepository.getUserByEmail(email)
    if(userWithEmail){
        throw {name: "conflict error", message: ""}
    }
    const hashPassword = bcrypt.hashSync(password, 12)
    await userRepository.createUser(name, email, hashPassword)
}

export const authService = {
    login,
    signup
}