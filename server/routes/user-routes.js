import Router from 'express'
import mongoose, {Schema} from "mongoose";
import getHash from "../utils/hash.js";
import session from "express-session"

const usersRoutes = Router()

const userSchema = new Schema ({
    name: String,
    email: String,
    phonenumber: String,
    password: String,
    city: String,
    admin: {type:Boolean, default: false }
})

mongoose.model('users', userSchema)

usersRoutes.get('/', async (req, res) => {
    const user = await mongoose.models.users.find()
    res.json(user)
})

usersRoutes.get('/current', async (req, res) => {
    if(req.session.user) {
        const user = await mongoose.models.users.findById(req.session.user._id)
        res.json(user)
    } else {
        res.status(401)
        res.json({loggedIn: false})
    }
})

usersRoutes.get('/:id', async (req, res) => {
    const user = await mongoose.models.users.findById(req.params.id)
    res.json(user)
})

usersRoutes.post('/', async (req, res) => {
    const user = new mongoose.models.users()
    user.name = req.body.name
    user.email = req.body.email
    user.phonenumber = req.body.phonenumber
    user.city = req.body.city
    user.password = getHash(req.body.password)

    await user.save()
    res.status(201)
    res.json({"result": "created"})
})

usersRoutes.delete('/:id', async (req, res) => {
    const user = await mongoose.models.users.findByIdAndDelete(req.params.id)
    res.json(user)
})

usersRoutes.put('/:_id', async (req, res) => {
    const user = await mongoose.models.users.findByIdAndUpdate(req.params._id, req.body)
    if(!user) {
        return res.status(404).json({message: "User not found"})
    }

    await user.save()
    res.json(user)
})


export default usersRoutes
