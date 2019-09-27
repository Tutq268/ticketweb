import {client} from './../Services/index'
let checkPathSelectTicket = (req,res) => {
    let ticketId = req.params.ticketId
    
    res.send({
        result : "ok",
        message: null,
        data: ticketId
    })
}

let createNewOrder =async (req,res) =>{
   try {
       const dataOrder = req.body
       let createNewOrder = await client.createNewOrder(dataOrder)
       res.send({
        result: "ok",
        message: "Đặt Hàng Thành Công",
        data: createNewOrder
    })
   } catch (error) {
       res.send({
           result: "failed",
           message: error,
           data: null
       })
   }
    
}
let getDataOrder = async (req,res) => {
  try {
      let {codeOrder} = req.body
      let getOrderInfo = await client.getOrderInfo(codeOrder)
      res.send({
          result: "ok",
          message :" Lấy Dữ Liệu Thành Công",
          data: getOrderInfo
      })
  } catch (error) {
      res.send({
          result: "failed",
          message: error,
          data: null
      })
  }
}

let removeOrderTicket = async (req,res) => {
  let orderId = req.params.orderId
  try {
      let removeOrder = await client.removeOrderTicket(orderId)
      res.send({
          result : "ok",
          message: removeOrder,
          data: null
      })
  } catch (error) {
      res.send({
          result: "failed",
          message: error,
          data: null
      })
  }
}
module.exports = {
    checkPathSelectTicket: checkPathSelectTicket,
    createNewOrder:createNewOrder,
    getDataOrder:getDataOrder,
    removeOrderTicket:removeOrderTicket
}