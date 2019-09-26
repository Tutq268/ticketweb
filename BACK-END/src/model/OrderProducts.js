import mongoose from 'mongoose'

let Schema = mongoose.Schema

let orderProductSchema = new Schema({
    productCode: String,
    productQuantity: Number,
    productPrice: Number,
    createAt: {type: Number, default: Date.now()},
    updateAt: {type: String, default: null},
    deleteAt: {type: Number, default: null}
})
module.exports = mongoose.model("orderproduct",orderProductSchema)