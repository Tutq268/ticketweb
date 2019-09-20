import mongoose from 'mongoose'

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
  }
}
module.exports = mongoose.model("admin",adminSchema)