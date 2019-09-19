import mongoose from 'mongoose'

let Schema = mongoose.Schema

let userSchema = new Schema({
    username : {type: String, required: true},
    address: {type: String, required: true},
    email : {type: String, required: true},
    product: {type: Schema.Types.ObjectId, ref: "order"},
    createAt: {type: Number, default: Date.now()},
    updateAt: {type: String, default: null},
    deleteAt: {type: Number, default: null}
})

module.exports = mongoose.model("user",userSchema)