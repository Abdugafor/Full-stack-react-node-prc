import mongoose from "mongoose";

const postShema = mongoose.Schema({
    authorName: String,
    title: String,
    content: String,
    date: {type: Date, default: Date.now}
})

const Post = mongoose.model('Post', postShema)

export {Post, postShema}