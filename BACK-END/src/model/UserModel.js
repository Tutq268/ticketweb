import mongoose from 'mongoose'

let Schema = mongoose.Schema

let userSchema = new Schema({
    username : String,
    address: String,
    email : String,
    product: {type: Schema.Types.ObjectId, ref: "order"},
    createAt: {type: Number, default: Date.now()},
    updateAt: {type: String, default: null},
    deleteAt: {type: Number, default: null}
})

module.exports = mongoose.model("user",userSchema)