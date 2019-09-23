import passport from 'passport'
import passportLocal from 'passport-local'
import AdminModel from './../model/AdminModel'
let localStracy = passportLocal.Strategy
let initPassportLocal =() => {
    passport.use(new localStracy({
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    },
    async (req,username,password,done) =>{
     try {
         
         let admin = await AdminModel.findByUsername(username)
         if(!admin){
           return done(null,false,{message: "0"})
         }
         let checkPassword = await admin.comparePassword(password)
         if(!checkPassword){
            return done(null,false,{message: "0"})
         }
         return done(null,admin,{message: "1"})
     } catch (error) {
         done(null,false)
     }
    }))
    passport.serializeUser((user,done) => {
        done(null, user._id)  
      })  
  
    passport.deserializeUser((id, done) => {
      AdminModel.findAdminById(id)
      .then(user => {
          return done(null,user)
      })
      .catch(error => {
          return done(null,error) 
      })
    })
}
module.exports = initPassportLocal