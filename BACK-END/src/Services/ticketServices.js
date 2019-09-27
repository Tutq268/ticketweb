import ProductModel from './../model/ProductsModel'
import OrderModel from './../model/OrderModel'
import fsExtra from 'fs-extra'

let createNewTicket =  async (item) => {
    return new Promise(async (resolve,reject) => {

        let findTicketCode = await ProductModel.findByproductCode(item.productCode)
        let findTicketType = await ProductModel.findByproductType(item.productType)
        if(findTicketCode || findTicketType){
            let pathImageInServer = item.productImagePath.split("/images/")
           await fsExtra.remove(`src/public/images/${pathImageInServer}`)
            return reject('Mã Vé Đã Tồn Tại')
        }
        let addNewTicket = await ProductModel.addNewTicket(item)
        if(!addNewTicket){
            return reject('Thêm Vé Mới Thất Bại')
        }
        return resolve("Thêm Vé Mới Thành Công")
    })
}

let getAllTicket = () => {
  return new Promise(async(resolve,reject) =>{
    let getAllTicket = await ProductModel.getAllTicket()
    if(!getAllTicket){
        return resolve("Lấy thất bại")
    }
    resolve(getAllTicket)
  })
}


let updateTicketInfo = (infoUpdate) =>{
    return new Promise(async (resolve,reject) => {
        let findTicketItem = await ProductModel.findTicketById(infoUpdate._id)
        if(!findTicketItem){
            return reject("Lỗi! không tìm thấy Vé Đang Update trên server")
        }
        if(infoUpdate.productCode !== undefined){
            let checkNewTicketItem = await ProductModel.findByproductCode(infoUpdate.productCode)
            if(checkNewTicketItem){
               return reject("Mã Vé Đã Tồn Tại. Vui Lòng Sửa Lại")
            }
        }
        if(infoUpdate.productType !== undefined){
            let checkNewTicketItem = await ProductModel.findByproductType(infoUpdate.productType)
            if(checkNewTicketItem){
               return reject("Loại Đã Tồn Tại. Vui Lòng Sửa Lại")
            }
        }
        infoUpdate.updateAt = Date.now()
        let updateTicket = await ProductModel.updateTicket(infoUpdate._id,infoUpdate)
        if(updateTicket.nModified === 0){
            return reject("Chỉnh Sửa Thất Bại")
        }
        resolve("Chỉnh Sửa Thành Công")
    })

}

let updateImageTicket = (ticketId,newImagePath) => {
    return new Promise( async (resolve,reject) =>{
      let findTicket = await ProductModel.findTicketById(ticketId)
      if(!findTicket){
          return reject("Không tìm thấy vé để update")
      }
      let oldImagePath = findTicket.productImagePath
      let pathImage = oldImagePath.split("/images/")
      let newImage = {
        productImagePath: newImagePath,
        updateAt: Date.now()
      }
      let updateImage = await ProductModel.updateTicket(ticketId,newImage)
      if(updateImage.nModified === 0){
          return reject("Chỉnh Sửa Ảnh Thất Bại")
      }
      let pathImageInServer = `src/public/images/${pathImage[1]}`
      await fsExtra.remove(pathImageInServer)

      resolve("Chỉnh Sửa Ảnh Thành Công")
    })
}

let removeTicketItem = (ticketId) => {
    return new Promise(async (resolve,reject) => {
     let findTicket = await ProductModel.findTicketById(ticketId)
     let imagePath = findTicket.productImagePath.split("/images/")[1]
     fsExtra.remove(`src/public/images/${imagePath}`)
     
     if(!findTicket){
         return reject("Không tìm thấy ticket để xoá")
     }
     let removeTicket = await ProductModel.removeTicketById(ticketId)
     if(removeTicket.n === 0){
         return reject("Xoá Vé Thất Bại")
     }
     resolve("Xoá Vé Thành Công")
    })
}

let getListOrder = () => {
    return new Promise( async (resolve,reject) => {
       let getListOrder = await OrderModel.getListOder()
       if(!getListOrder){
           return reject("Khong Tim Thay Order Nao")
       }
       let getCountOrder = await OrderModel.getCountOrder()
       if(!getCountOrder){
           return reject("Lỗi Không Lấy Được Số Lượng Danh Sách")
       }
       let dataResult = {
           ListOrder : getListOrder,
           count : getCountOrder
       }
       resolve(dataResult)
    })
}
const skipListOrder = 10
let getMoreListOrder = (page) => {
  return new Promise(async (resolve,reject) => {
      let findMoreListOrder = await OrderModel.findMoreListOrder(page*skipListOrder)
      if(!findMoreListOrder){
          return reject("Lấy Danh Sách Thất Bại")
      }
      resolve(findMoreListOrder)
  })
}

module.exports = {
    createNewTicket: createNewTicket,
    getAllTicket: getAllTicket,
    updateTicketInfo:updateTicketInfo,
    updateImageTicket:updateImageTicket,
    removeTicketItem:removeTicketItem,
    getListOrder:getListOrder,
    getMoreListOrder: getMoreListOrder
}