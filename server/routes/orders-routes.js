import mongoose, {Schema} from "mongoose";
import Router from "express"

const ordersRoutes = Router()

const orderSchema = new Schema({
    friend: [],
    user: [],
    activity: [],
    time: String,  //Logs out the date 2 hours earlier (eg, 2022-12-12:12.00 = logs out: 2022-12-12:10.00)
    additionalService: [],
    confirmed: {type:Boolean, default:false}

})

mongoose.model('orders', orderSchema)

ordersRoutes.post('/', async (req, res) => {
    const order = new mongoose.models.orders()
    order.friend = req.body.friend
    order.user = req.body.user
    order.activity = req.body.activity
    order.time = req.body.time
    order.additionalService = req.body.additionalService

    await order.save()
    res.status(201)
    res.json(order)
})

ordersRoutes.get('/', async (req, res) => {
    const order = await mongoose.models.orders.find().populate('friend').populate('user').exec()
    res.json(order)
})

ordersRoutes.get('/', async (req, res) => {
    const order = await mongoose.models.orders.find({confirmed:false})
    res.json(order)
})
ordersRoutes.get('/', async (req, res) => {
    const order = await mongoose.models.orders.find()
    res.json(order)
})


ordersRoutes.get('/:id', async (req, res) => {
    const order = await mongoose.models.orders.findById(req.params.id)
    res.json(order)
})

ordersRoutes.put('/:_id', async (req, res) => {
    const order = await mongoose.models.orders.findByIdAndUpdate(req.params._id, req.body)
    await order.save()
    res.json(order)
})

ordersRoutes.delete('/:id', async (req, res) => {
    await mongoose.models.orders.findByIdAndDelete(req.params.id)
    res.json({"deleted": "order"})
})


export default ordersRoutes