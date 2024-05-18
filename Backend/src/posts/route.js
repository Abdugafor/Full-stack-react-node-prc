import Routing from "express";
import PostController from './controller.js'

const routing = Routing()

routing.get('/posts', PostController.getAll)
routing.post('/posts', PostController.post)
routing.put('/posts', PostController.update)
routing.delete('/posts/:id', PostController.delete)

export default routing