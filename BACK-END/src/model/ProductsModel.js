import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true)
let Schema = mongoose.Schema

let productSchema = new Schema({
   productCode: {type: String, required: true, unique: true},
   productType: {type: String, required: true},
   productPrice : {type:Number,default: 0},
   productCount :{type: Number, default: 0},
   productImagePath :{type:String, required: true},
   productCountAvailable: {type: Number, default: 0},
   createAt: {type: Number, default: Date.now()},
   updateAt: {type: String, default: null},
   deleteAt: {type: Number, default: null}
})
productSchema.statics = {
   addNewTicket(item){
      return this.create(item)
   },
   findByproductCode(productCode){
      return this.findOne({"productCode": productCode}).exec()
   }
}
module.exports = mongoose.model("product",productSchema)