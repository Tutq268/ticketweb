import ProductModel from './../model/ProductsModel'
import fsExtra from 'fs-extra'

let createNewTicket =  async (item) => {
    return new Promise(async (resolve,reject) => {

        let findTicketCode = await ProductModel.findByproductCode(item.productCode)
        if(findTicketCode){
           await fsExtra.remove(item.productImagePath)
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
        let updateTicket = await ProductModel.updateTicket(infoUpdate._id,infoUpdate)
        if(updateTicket.nModified === 0){
            return reject("Chỉnh Sửa Thất Bại")
        }
        resolve("Chỉnh Sửa Thành Công")
    })

}
module.exports = {
    createNewTicket: createNewTicket,
    getAllTicket: getAllTicket,
    updateTicketInfo:updateTicketInfo
}