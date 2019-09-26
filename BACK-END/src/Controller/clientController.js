let checkPathSelectTicket = (req,res) => {
    let ticketId = req.params.ticketId
    res.send({
        result : "ok",
        message: null,
        data: ticketId
    })
}

let createNewOrder = (req,res) =>{
    console.log(req.body)
    console.log(req.body.infoClient)

    res.send("gui len thanh cong")
}
module.exports = {
    checkPathSelectTicket: checkPathSelectTicket,
    createNewOrder:createNewOrder
}