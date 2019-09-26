import mongoose from 'mongoose'

let Schema = mongoose.Schema

let userSchema = new Schema({
    username : {type: String, required: true},
    address: {type: String, required: true},
    email : {type: String, required: true},
    phone: {type: Number, required: true},
    productType: {type:String,required: true},
    productQuantity: {type:Number,required: true},
    productPrice: {type: Number,required: true},
    createAt: {type: Number, default: Date.now()},
    updateAt: {type: String, default: null},
    deleteAt: {type: Number, default: null}
})

userSchema.statics = {
    createNew(item){
        return this.create(item)
    }
}

module.exports = mongoose.model("user",userSchema)