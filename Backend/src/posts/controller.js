import { Post } from "./model.js"
import PostService from "./service.js"

class PostController {

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.json(posts)
        }catch(e) {
            res.status(500).json(e.message)
        }
    }

    async post(req, res) {
        try {
            const post = req.body
            const newPost = await PostService.post(post)
            res.json(newPost)
        }catch(e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            const newPost = await PostService.update(post)
            res.json(newPost)
        }catch(e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            await PostService.delete(id)
            res.json("Success")
        }catch(e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController