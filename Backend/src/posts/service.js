import { Post } from "./model.js";

class PostService {

    async getAll() {
        const posts = await Post.find()
        return posts
    }

    async post(post) {
        if (!post.authorName) {
            post.authorName = 'Anonimus'
        }

        const newPost = await Post.create(post)
        return newPost
    }

    async update(post) {
        const newPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return newPost
    }

    async delete(id) {
        const deletedPost = await Post.findByIdAndDelete(id)
        return "Success"
    }
}

export default new PostService