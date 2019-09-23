import multer from 'multer'
import uuid from 'uuid/v4'
import AdminModel from './../model/AdminModel'
import bcrypt from 'bcrypt'
let saltRound = 7


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
        console.log(req.body)
        console.log(req.file)
           return res.send("123")
       } catch (error) {
           return res.status(500).send("loi : "+ error)
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

