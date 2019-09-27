let data = {
    ticketCurrent : {},
    countTicket: 1,
    orderInfo: {},
    allOrderInfo : {},
    statusCheck: false
}

export default (state = data, action) => {
    switch(action.type){
        case "GET_CURRENT_TICKET":
            return {...state,
                ticketCurrent: action.playload
            }
        case "COUNT_TICKET":
            return {...state,countTicket: action.playload}
        case "ORDER_INFO" :
            return {...state,orderInfo: action.playload}
        case "ALL_ORDER_INFO" :
            return {...state,allOrderInfo: action.playload}
        case "STATUS_CHECK" :
            return {...state,statusCheck:action.playload}
        default:
            return state
    }
}