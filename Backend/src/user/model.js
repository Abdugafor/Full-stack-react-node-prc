import mongoose from "mongoose";
import {postShema} from "../posts/model.js";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    posts: [postShema]
})

const User = mongoose.model('User', UserSchema)

export default User