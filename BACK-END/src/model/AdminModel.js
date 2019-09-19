import mongoose from 'mongoose'

let Schema = mongoose.Schema

let adminSchema = new Schema({
   username : String,
   email : {type: String, trim: true},
   password : String,
   createAt: {type: Number, default: Date.now()},
  updateAt: {type: String, default: null},
  deleteAt: {type: Number, default: null}
})

module.exports = mongoose.model("admin",adminSchema)