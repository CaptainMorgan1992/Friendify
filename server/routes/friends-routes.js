import mongoose, {Schema} from "mongoose";
import Router from "express";

const friendsRoutes = Router()

const friendSchema = new Schema({
    name: String,
    age: Number,
    traits: {},
    price: Number,
    picture: String,
    city: String
})

mongoose.model('friends', friendSchema)

friendsRoutes.get('/', async (req,res) =>{
    const friend = await mongoose.models.friends.find()
    res.status(200)
    res.json(friend)
})
export default friendsRoutes