import express from 'express'
import {admin} from './../Controller/index'
let router = express.Router()

let adminRouter = (app) => {
    router.post("/add-new-ticket", admin.addNewTicket)
    return app.use("/admin",router)
}
module.exports = adminRouter