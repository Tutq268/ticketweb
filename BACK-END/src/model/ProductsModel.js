import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);

let Schema = mongoose.Schema

let productSchema = new Schema({
   productCode: {type: String, required: true, unique: true},
   productType: {type: String, required: true, unique: true},
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
   findTicketById(id){
      return this.findById(id).exec()
   },
   findByproductCode(productCode){
      return this.findOne({"productCode": productCode}).exec()
   },
   findByproductType(productType){
      return this.findOne({"productType": productType}).exec()
   },
   getAllTicket(){
      return this.find({}).sort({"productPrice": -1}).exec()
   },
   updateTicket(id,item){
      return this.findByIdAndUpdate(id,item).exec()
   },
   removeTicketById(uid){
      return this.findByIdAndRemove(uid).exec()
   }
}
module.exports = mongoose.model("product",productSchema)