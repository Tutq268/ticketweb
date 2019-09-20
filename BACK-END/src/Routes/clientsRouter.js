import express from 'express'

let router = express.Router()

let clientRouter = (app) => {
    router.get("/",(req,res)=>{
        res.send("123")
    })
    return app.use("/",router)
}
module.exports = clientRouter