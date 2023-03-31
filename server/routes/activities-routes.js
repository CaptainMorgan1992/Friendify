import mongoose, {Schema} from 'mongoose'
import Router from 'express'

const activitiesRoutes = Router()

const activitySchema = new Schema({

    title: String,
    description: String,
    location: String,
    duration: String,

    friend:{type: mongoose.Schema.Types.ObjectId, ref:"friends"},
    user:{type: mongoose.Schema.Types.ObjectId, ref:"users"}
    //Fråga under handledning - Hur ska vi referera?
})

mongoose.model('activities', activitySchema)

activitiesRoutes.post('/', async (req,res) => {
    const activity = new mongoose.models.activities()
    activity.title = req.body.title
    activity.description = req.body.description
    activity.location= req.body.location
    activity.duration =  req.body.duration
    activity.friend =  req.body.friend
    activity.user =  req.body.user

    await activity.save()
    res.status(201)
    res.json(activity)
})

activitiesRoutes.get('/', async(req,res) => {
const activity = await mongoose.models.activities.find().populate("friend").exec()
    res.json(activity)
})

activitiesRoutes.get('/:id', async(req,res) => {
    const activity = await mongoose.models.activities.findById(req.params.id)
    res.json(activity)
})

activitiesRoutes.delete('/:id', async(req,res) => {
    const activity = await mongoose.models.activities.findByIdAndDelete(req.params.id)
    res.json(activity)
})

activitiesRoutes.put('/:id', async (req, res) => {
    const activity = await mongoose.models.users.findByIdAndUpdate(req.params.id, req.body)
    await activity.save()
    res.json(activity)
})

export default activitiesRoutes;