let data = {
    ticketCurrent : {},
    countTicket: 1
}

export default (state = data, action) => {
    switch(action.type){
        case "GET_CURRENT_TICKET":
            return {...state,
                ticketCurrent: action.playload
            }
        case "COUNT_TICKET":
            return {...state,countTicket: action.playload}
        default:
            return state
    }
}