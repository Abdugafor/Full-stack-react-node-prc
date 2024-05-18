import User from "./model.js";
import UserService from "./service.js"

class UserController {

    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            res.json(users)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const user = await UserService.getOne(id)
            res.json(user)
        }catch (e) {
            res.status(404).json(e.message)
        }
    }

    async post(req, res) {
        try {
            const user = req.body
            const newUser = await UserService.post(user)
            res.json(newUser)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const user = req.body
            const updatedUser = await UserService.update(user)
            res.json(updatedUser)
        }catch (e) {
            res.status(400).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            await UserService.delete(id)
            res.json('Successfuly')
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

}

export default new UserController

