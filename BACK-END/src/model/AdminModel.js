import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
let Schema = mongoose.Schema

let adminSchema = new Schema({
   username : {type: String, required: true},
   email : {type: String, trim: true, required: true},
   password : {type: String,required: true},
   createAt: {type: Number, default: Date.now()},
  updateAt: {type: String, default: null},
  deleteAt: {type: Number, default: null}
})
adminSchema.statics = {
  createAdmin(item) {
    return this.create(item)
  },
  findByUsername(username){
    return this.findOne({"username": username}).exec()
  },
  findAdminById(id){
    return this.findById(id).exec()
  }
}
adminSchema.methods = {
  comparePassword(password){
    return bcrypt.compare(password,this.password)
  }
}
module.exports = mongoose.model("admin",adminSchema)