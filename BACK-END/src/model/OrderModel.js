import mongoose from 'mongoose'
let Schema = mongoose.Schema

let orderSchema = new Schema({
    codeorder : {type: String, required: true, unique: true},
    status : {type: String, default : "Đã Tạo Đơn"},
    productId: {type: Schema.Types.ObjectId, ref: "product"},
    userId: {type: Schema.Types.ObjectId, ref: "user"},
    createAt: {type: Number, default: Date.now()},
    updateAt: {type: String, default: null},
    deleteAt: {type: Number, default: null}
})
orderSchema.statics = {
    getListOder(){
        return this.find({}).limit(10).exec()
    },
    getCountOrder(){
        return this.countDocuments({}).exec()
    },
    findMoreListOrder(page){
        return this.find({}).skip(page).limit(10).sort({"createdAt": -1}).exec()
    }
}
module.exports = mongoose.model("order",orderSchema)