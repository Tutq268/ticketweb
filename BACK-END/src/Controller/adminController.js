import multer from 'multer'
import uuid from 'uuid/v4'
import AdminModel from './../model/AdminModel'
import bcrypt from 'bcrypt'
let saltRound = 7
import {validationResult} from 'express-validator'
import {ticket} from './../Services/index'


let storageImageTicket = multer.diskStorage({
    destination: (req,file,callback) =>{
        callback(null,"src/public/images")
    },
    filename: (req,file,callback) => {
        let math = ["image/png","image/jpg","image/jpeg"]
        if(math.indexOf(file.mimetype) === -1 ){
            return callback("Định dạng ảnh không phù hợp",null)
        }
        let imageTicket = `${Date.now()}-${uuid()}-${file.originalname}`
        callback(null,imageTicket)
    }
})

let imageTicketUpload = multer({
    storage: storageImageTicket,
    limits: {fileSize: 1048576 * 2}
}).single("ticket")

let addNewTicket = (req,res)=>{
   imageTicketUpload(req,res, async (error) =>{
   
       if(error){
           console.log(error)
           if(error.message){
               console.log(error.message)
               return res.status(500).send("Dung Luong Vuot Qua Gioi Han Cho Phep")
           }
           return res.status(500).send("da xay ra loi " +error)
       }
       try {

       let ticketInfo = {
        productCode: req.body.productCode,
        productType: req.body.productType,
        productPrice: +req.body.productPrice,
        productCount: +req.body.productCount,
        productCountAvailable: +req.body.productCount,
        productImagePath: req.file.path
       }
       let resultAddTicket = await ticket.createNewTicket(ticketInfo)
      return res.send({
          result: "ok",
          message: resultAddTicket
      })
       } catch (error) {
        return res.send({
            result: "failed",
            message: error
        })
       }
         
   })
}


let checkLogin = (req,res,next) => {
    if(!req.isAuthenticated()){
      return res.send(false)
    }
    next()
  }
  let checkLogout = (req,res,next) => {
    if(req.isAuthenticated()){
      return res.send(true)
    }
    next()
  }
  let getLoginAdmin = (req,res) => {
     res.send("Login Admin Acount")
    
  }
  let getAddTicket = (req,res) => {
      res.send("Day la trang add ticket")
  }

  let getListTicket = (req,res) =>{
      res.send("day la trang danh sach ve")
  }
  let getListOrder = (req,res) =>{
      res.send("day la trang lay danh sach order")
  }

  let logoutAdmin = (req,res) => {
    req.logout()
    res.send({
      result: true,
      message: "Đăng Xuất Thành Công"
    })
  }
  


module.exports = {
    addNewTicket: addNewTicket,
    checkLogin: checkLogin,
    checkLogout : checkLogout,
    getLoginAdmin:getLoginAdmin,
    getAddTicket:getAddTicket,
    getListTicket:getListTicket,
    getListOrder:getListOrder,
    logoutAdmin: logoutAdmin
}

