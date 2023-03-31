import mongoose, {Schema} from "mongoose";
import Router from "express";

const friendsRoutes = Router()

const friendSchema = new Schema({
    name: String,
    age: Number,
    traits: [],
    price: Number,
    picture: String,
    city: String
})

mongoose.model('friends', friendSchema)

friendsRoutes.post('/', async (req,res) => {
    const friend = new mongoose.models.friends()
    friend.name = req.body.name
    friend.age = req.body.age
    friend.traits = req.body.traits
    friend.price = req.body.price
    friend.picture = req.body.picture
    friend.city = req.body.city

    console.log(friend)
    await friend.save();

    res.status(201)
    res.json(friend)

})

friendsRoutes.get('/', async (req,res) =>{
    const friend = await mongoose.models.friends.find()
    let result = req.db.prepare(friend).all(req.params)
    res.status(200)
    res.json(friend)
})
export default friendsRoutes