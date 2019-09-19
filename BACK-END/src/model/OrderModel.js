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
module.exports = mongoose.model("order",orderSchema)