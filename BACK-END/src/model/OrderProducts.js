import mongoose from 'mongoose'

let Schema = mongoose.Schema

let orderProductSchema = new Schema({
    orderId : {type: Schema.Types.ObjectId, ref: "order"},
    productId: {type: Schema.Types.ObjectId, ref: "product"},
    productQuantity: Number,
    productPrice: Number,
    createAt: {type: Number, default: Date.now()},
    updateAt: {type: String, default: null},
    deleteAt: {type: Number, default: null}
})
module.exports = mongoose.model("orderproduct",orderProductSchema)