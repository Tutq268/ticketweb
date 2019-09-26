import mongoose from 'mongoose'
let Schema = mongoose.Schema

let orderSchema = new Schema({
    codeorder : {type: String, unique: true, default: Date.now()},
    status : {type: String, default : "Đã Tạo Đơn"},
    user: {type: Schema.Types.ObjectId, ref: "user"},
    createAt: {type: Number, default: Date.now()},
    updateAt: {type: String, default: null},
    deleteAt: {type: Number, default: null}
})
orderSchema.statics = {
    createNew(item){
        return this.create(item)
    },
    getListOder(){
        return this.find({}).limit(10).exec()
    },
    getCountOrder(){
        return this.countDocuments({}).exec()
    },
    findMoreListOrder(page){
        return this.find({}).skip(page).limit(10).sort({"createdAt": -1}).exec()
    },
    findByCodeOrder(codeOrder){
        return this.findOne({"codeorder" :codeOrder})
                   .populate({path: "user",
                            select: ["username","address","email","productType","phone","productQuantity"]}).exec()
    }
}
module.exports = mongoose.model("order",orderSchema)