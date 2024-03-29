import multer from 'multer'
import uuid from 'uuid/v4'
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


let imageTicketUpdate = multer({
    storage: storageImageTicket,
    limits: {fileSize: 1048576 * 2}
}).single("ticketUpdate")
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
        productImagePath: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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

  let getListTicket =async (req,res) =>{
      try {
          let getAllTicket = await ticket.getAllTicket()
          res.send({
              result: "ok",
              message: "Get All Ticket Success",
              data: getAllTicket
          })
      } catch (error) {
          res.send({
              result: "failed",
              message: error
          })
      }
  }
  let getListOrder =async (req,res) =>{
      try {
          let getListOrder = await ticket.getListOrder()
          res.send({
              result: "ok",
              message: "Success",
              data: getListOrder
          })
      } catch (error) {
          res.send({
              result: "failed",
              message: error,
              data: null
          })
      }
  }

  let logoutAdmin = (req,res) => {
    req.logout();
    res.send({
      result: true,
      message: "Đăng Xuất Thành Công"
    })
  }


  let updateTicketInfo = async(req,res) =>{
    try {
        let updateTicketInfo = await ticket.updateTicketInfo(req.body.updateValue)
        res.send({
            result: "ok",
            message: updateTicketInfo,
            data: null
        })
    } catch (error) {
        res.send({
            result: "failed",
            message: error,
            data: null
        })
    }
  }


  let updateImageTicket = (req,res) => {
    imageTicketUpdate(req,res, async (error) =>{
     if(error){
        if(error.message){
            console.log(error.message)
            return res.status(500).send("Dung Luong Vuot Qua Gioi Han Cho Phep")
        }
        return res.status(500).send("da xay ra loi " +error)
     }
     try {
        let newImagePath = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
       let ticketId = req.body.ticketId

        let updateImageTicket = await ticket.updateImageTicket(ticketId,newImagePath)
        res.send({
            result: "ok",
            message: updateImageTicket,
            data: null
        })
     } catch (error) {
         res.send({
             result: "failed",
             message: error,
             data: null
         })
     }
    })
  }
  
let deleteTicketItem =async (req,res)=>{
   try {
    let ticketId = req.params.ticketId
    let removeTicket = await ticket.removeTicketItem(ticketId)
   res.send({
       result: "ok",
       message : removeTicket,
       data: null
   })
   } catch (error) {
       res.send({
           result: "failed",
           message: error,
           data: null
       })
   }
}

let getMoreListOrder = async (req,res) =>{
   let page = +(req.query.page)
   try {
       let getMoreListOrder = await ticket.getMoreListOrder(page-1)
       res.send({
           result: "ok",
           message: `Lấy Danh Sách trang ${page} thành công`,
           data: getMoreListOrder 
       })
   } catch (error) {
       res.send({
           result: "failed",
           message: error,
           data: null
       })
   }
  
}

module.exports = {
    addNewTicket: addNewTicket,
    checkLogin: checkLogin,
    checkLogout : checkLogout,
    getLoginAdmin:getLoginAdmin,
    getAddTicket:getAddTicket,
    getListTicket:getListTicket,
    getListOrder:getListOrder,
    logoutAdmin: logoutAdmin,
    updateTicketInfo:updateTicketInfo,
    updateImageTicket:updateImageTicket,
    deleteTicketItem:deleteTicketItem,
    getMoreListOrder:getMoreListOrder
}

