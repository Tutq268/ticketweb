const ALL_TICKET = []
const isEditTicket = false
const TICKET_EDIT = {}
export default (state= {ALL_TICKET,isEditTicket,TICKET_EDIT} , action) =>{
    switch(action.type){
        case "GET_ALL_TICKET":
            return {...state,ALL_TICKET: action.playload}
        case "EDIT_TICKET_ITEM":
            return {...state,isEditTicket: action.playload}
        case "GET_TICKET_EDIT_ITEM":
            return {...state,TICKET_EDIT: action.playload}
        default:
            return state
    }
}