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

friendsRoutes.get('/:id', async (req, res) => {
    const friend = await mongoose.models.friends.findById(req.params.id)
    res.json(friend)
})
friendsRoutes.get('/', async (req,res) =>{
    const friend = await mongoose.models.friends.find()
    console.log(friend)
    res.status(200)
    res.json(friend)
})

friendsRoutes.patch('/:id', async(req, res) => {
    const friend = await mongoose.models.friends.findByIdAndUpdate(req.params.id, req.body)
    if(!friend) {
        return res.status(404).json({message: "Friend not found"})
    }
    res.json({"updated": true})
})

friendsRoutes.delete('/:id', async (req,res)=>{
  await mongoose.models.friends.findByIdAndDelete(req.params.id)
    res.json({"deleted": true})
})
export default friendsRoutes