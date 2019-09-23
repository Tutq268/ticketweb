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
module.exports = {
    createNewTicket: createNewTicket
}