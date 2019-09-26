import express from 'express'
import {client} from './../Controller/index'
// import AdminModel from './../model/AdminModel'
// import bcrypt from 'bcrypt'
// let saltRounds = 7
let router = express.Router()

let clientRouter = (app) => {
    // router.get("/",async (req,res)=>{
    //     let newAdmin = {
    //         username : "admin",
    //         email : "tutran00831@gmail.com",
    //         password : bcrypt.hashSync("admin123",bcrypt.genSaltSync(saltRounds))
    //     }
    //     try {
    //         await AdminModel.createAdmin(newAdmin)
    //         res.send("tao admin acount thanh cong")
    //     } catch (error) {
    //         res.send("err: "+ error)
    //     }
    // })
    router.get("/:ticketId/step-select-tickets",client.checkPathSelectTicket)
    router.get("/:ticketId/step-question-form",client.checkPathSelectTicket)
    router.post("/create-order",client.createNewOrder)
    router.get("/:ticketId/step-complete-order",client.checkPathSelectTicket)
    router.post("/all-data-order",client.getDataOrder)
    return app.use("/",router)
}
module.exports = clientRouter