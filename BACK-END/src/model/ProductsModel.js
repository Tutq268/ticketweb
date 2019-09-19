import mongoose from 'mongoose'

let Schema = mongoose.Schema

let productSchema = new Schema({
   productCode: String,
   productType: String,
   productPrice : {type:Number,default: 0},
   productCount :{type: Number, default: 0},
   productCountAvailable: {type: Number, default: 0},
   createAt: {type: Number, default: Date.now()},
   updateAt: {type: String, default: null},
   deleteAt: {type: Number, default: null}
})
module.exports = mongoose.model("product",productSchema)