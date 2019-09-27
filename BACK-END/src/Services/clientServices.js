import OrderModel from './../model/OrderModel'
import UserModel from './../model/UserModel'
import ProductModel from './../model/ProductsModel'
import uuid from 'uuid/v4'
let createNewOrder = (orderData) =>{
   return new Promise( async (resolve,reject) => {
    let productType = orderData.productType
      let createUser = await UserModel.createNew(orderData)
      if(!createUser){
          return reject("Tạo Thông Tin Đơn Hàng Thất Bại")
      }
      let findProduct = await ProductModel.findByproductType(productType)
    if(!findProduct){
        return reject("Không Tìm Thấy Sản Phẩm")
    }
    let availableProduct = findProduct.productCountAvailable - orderData.productQuantity
    let updateProductAvailable = await ProductModel.findByCodeAndUpdate(productType,availableProduct)
    if(updateProductAvailable.nModified === 0){
        return reject("Update Số Lượng Hàng Còn Lại Thất Bại")
    }
    let codeorder = uuid()
    let orderUser = {
        user: createUser,
        codeorder : codeorder
    }
    let createOrder = await OrderModel.createNew(orderUser)
    if(!createOrder){
        return reject("Tạo Đơn Hàng Thất Bại")
    }
    resolve(createOrder)
   })
}
let getOrderInfo = (codeOrder) => {
    return new Promise(async (resolve,reject) => {
        let findOrder = await OrderModel.findByCodeOrder(codeOrder)
        if(!findOrder){
            return reject("Không Tìm Thấy Đơn Hàng")
        }
        resolve(findOrder)
    })
}

const removeOrderTicket =(orderId) => {
    return new Promise(async (resolve,reject) => {
       let findOrder = await OrderModel.findOrderById(orderId)
       if(!findOrder){
           return reject("Không Tìm Thấy Đơn Hàng")
       }
       let userId = findOrder.user

       let findUser = await UserModel.findUserById(userId)
       if(!findUser){
           return reject("Không Tìm Thấy User")
       }

       let productType = findUser.productType
       let productQuantity = findUser.productQuantity
       let findProduct = await ProductModel.findByproductType(productType)
       if(!findProduct){
           return reject("Không Tìm Thấy Sản Phẩm")
       }
       let totalProductAvailable = findProduct.productCountAvailable
       let productCountUpdate =  totalProductAvailable + productQuantity
       let updateCountProduct = await ProductModel.findByCodeAndUpdate(findProduct.productType,productCountUpdate)
       if(updateCountProduct.nModified === 0){
           return reject("Update số lượng sản phẩm còn lại thất bại")
       }
       let removeUserInfo = await findUser.remove()
       if(removeUserInfo.n === 0){
           return reject("Xoá Thông Tin Đơn Hàng Thất Bại")
       }
       let removeOrder = await findOrder.remove()
       if(removeOrder.n === 0){
           return reject("Xoá Đơn Hàng Thất Bại")
       }
       resolve("Huỷ Đơn Hàng Thành Công")
       
    })
}
module.exports = {
    createNewOrder:createNewOrder,
    getOrderInfo:getOrderInfo,
    removeOrderTicket:removeOrderTicket
}