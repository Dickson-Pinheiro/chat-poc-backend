import { userRepository } from "../repositories/userRepository.js"

async function getUsers(id){
    const users = await userRepository.findAllUsers(id)
        const mappedUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
            }
        })
    return mappedUsers
}

async function me(id){
    return await userRepository.getUserById(id)
}

export const userService = {
    getUsers,
    me
}