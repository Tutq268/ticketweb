import {combineReducers} from 'redux'
import getLoginReducer from './getLoginReducer'
import getAllTicket from './getAllTicket'
import orderReducer from './orderReducer'
import clientBookReducer from './clientBookTicketReducer'
export default combineReducers({
     getLoginReducer,
     getAllTicket,
     orderReducer,
     clientBookReducer
})