import Routing from 'express'
import UserController from './controller.js'

const routing = Routing()

routing.get('/users', UserController.getAll)
routing.get('/users/:id', UserController.getOne)
routing.post('/users', UserController.post)
routing.put('/users', UserController.update)
routing.delete('/users/:id', UserController.delete)

export default routing