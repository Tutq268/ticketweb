import express from 'express'
import {admin} from './../Controller/index'
let router = express.Router()

let adminRouter = (app) => {
    
    return app.use("/",router)
}
module.exports = adminRouter