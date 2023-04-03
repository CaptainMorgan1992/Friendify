import Router, { response } from "express";
import getHash from "../utils/hash.js";
import mongoose from "mongoose";

const loginRoutes = Router()

loginRoutes.post('/', async (req, res) => {
    let user = await mongoose.models.users.findOne({
        email: req.body.email,
        password: getHash(req.body.password)
    })
    if(user){
        req.session.user = user
        res.status(201)
        res.json({"loggedIn": true})
    } else {
        res.status(401)
        res.json({"loggedIn": false})
    }
})

loginRoutes.get('/', async (req,res)=>{
    if(req.session?.user){
        let user = await mongoose.models.users.findOne({
            email: req.session.user.email,
            password: req.session.user.password
        })

        if (user){
            res.json({
                name: req.session.user.name,
                email: req.session.user.email,
                loggedIn: true
            })
            return
        }


    }
        res.status(404)
        res.json({"loggedIn":false})
})

loginRoutes.delete('/', async (req,res) =>{
    delete (req.session.user)
    res.json({"LoggedIn": false})
})
export default loginRoutes