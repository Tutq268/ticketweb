import express from 'express'

let router = express.Router()

let adminRouter = (app) => {
    
    

    return app.use("/",router)
}
module.exports = adminRouter