import express from 'express'
import {admin} from './../Controller/index'
import passport from 'passport'
import initPassportLocal from './../Controller/passportLocal'
import {ticketValid} from './../Validation/index'
let router = express.Router()
initPassportLocal()
let adminRouter = (app) => {
    router.post("/add-new-ticket",admin.checkLogin, admin.addNewTicket)
 
    router.post('/login',admin.checkLogout, (req, res, next) =>{
        passport.authenticate('local', function(err, user, info) {
          if (err) { return res.send({
              result : false,
              message: "loi" + err
          }) }
          if (!user) { 
            return res.send({
                result : false,
                message: "Sai Tên Đăng Nhập Hoặc Mật Khẩu"
            })
           }
          req.login(user, (err) =>{
            if (err) { 
                return res.send({
                    result : false,
                    message:"Loi" + err
                })
            }
            return res.send({
                result : true,
                message:"Đăng Nhập Thành Công"
            })
          });
        })(req, res, next);
      });
   router.post("/logout",admin.logoutAdmin)
    router.get("/",admin.checkLogin, admin.getLoginAdmin)
    router.get("/add-ticket",admin.checkLogin,admin.getAddTicket)
    router.get("/list-ticket",admin.checkLogin,admin.checkLogin, admin.getListTicket)
    router.get("/list-order",admin.checkLogin, admin.getListOrder)

    

    return app.use("/admin",router)
}
module.exports = adminRouter