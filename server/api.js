import express from "express"
import mongoose from "mongoose";
import session from "express-session"

const api = express()
api.use(express.json())

api.use(session({
    secret: 'frends_iidsajk282nd',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

const username = 'friendify'
const password = '9gZCRe8Zi6OF6nY0'
const port = 3000
const uri = `mongodb+srv://${username}:${password}@friendify.rl6av2x.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(uri, ({dbName:"friendify"})).then((result, error)=>{
    if(result){
        console.info('connected to database')
    } else if(error){
        console.error(error)
    }
})
api.listen(port,  () =>{
    console.log('server started at: http://localhost:3000')
})


import friendsRoutes from "./routes/friends-routes.js";
api.use('/api/friends', friendsRoutes)

import userRoutes from "./routes/user-routes.js";
api.use('/api/users', userRoutes)