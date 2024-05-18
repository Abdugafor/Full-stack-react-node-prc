import User from "./model.js"

class UserService {
    async getAll() {
        const users = await User.find()
        return users
    }

    async getOne(id) {
        const user = await User.findById(id)
        return user   
    }

    async post(user) {
        const newUser = await User.create(user)
        return newUser
    }

    async update(user) {
        if (!user._id) {
            throw new Error('Id is not defined')
        }
        const updatedUser = await User.findByIdAndUpdate(user._id, user)
        return updatedUser
    }

    async delete(id) {
        await User.findByIdAndDelete(id)
    }
}

export default new UserService