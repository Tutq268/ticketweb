import express from 'express'

let router = express.Router()

let clientRouter = (app) => {
    
    

    return app.use("/",router)
}
module.exports = clientRouter