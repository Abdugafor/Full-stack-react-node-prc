import express from "express";
import mongoose from "mongoose";
import userRoute from "./src/user/route.js"
import postsRoute from "./src/posts/route.js"

const PORT = 5000
const DB_URL = 'mongodb+srv://gafarovabdugafur:1234@nodepractice.9si0sfu.mongodb.net/'
const app =  express()

app.use(express.json())
app.use('/api', userRoute)
app.use('/api', postsRoute)


try {
    mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('Listening to port 5000....'))
}catch(e) {
    console.log(e)
}