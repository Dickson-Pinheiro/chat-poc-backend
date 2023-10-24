import { authService } from "../services/authService.js"

export const authController = {
    async login(req, res) {
        try {
            const {email, password} = req.body
            const result = await authService.login(email, password)
            res.send(result);   
        } catch (error) {   
            console.log(error)
            res.status(500).send()
        }
    },

    async signup(req, res) {
        try {
            const {name, email, password} = req.body
            await authService.signup(name, email, password)
            res.send();   
        } catch (error) {
            console.log(error)
            res.status(500).send()   
        }
    }


}