import mongoose, {Schema} from 'mongoose'
import Router from 'express'

const additionalServicesRoutes = Router()

const additionalServicesSchema = new Schema({

    title: String,

})

mongoose.model('additional-services', additionalServicesSchema)

additionalServicesRoutes.post('/', async (req,res) => {
    const additional_services = new mongoose.models.additional_services()
    additional_services.title = req.body.title


    await additional_services.save()
    res.status(201)
    res.json(additional_services)
})

additionalServicesRoutes.get('/', async(req,res) => {
    const additional_services = await mongoose.models.additional_services.find().populate("friend").exec()
    res.json(additional_services)
})

additionalServicesRoutes.get('/:id', async(req,res) => {
    const additional_services = await mongoose.models.additional_services.findById(req.params.id)
    res.json(additional_services)
})

additionalServicesRoutes.delete('/:id', async(req,res) => {
    const additional_services = await mongoose.models.additional_services.findByIdAndDelete(req.params.id)
    res.json(additional_services)
})

additionalServicesRoutes.put('/:id', async (req, res) => {
    const additional_services = await mongoose.models.users.findByIdAndUpdate(req.params.id, req.body)
    await additional_services.save()
    res.json(additional_services)
})

export default additionalServicesRoutes;