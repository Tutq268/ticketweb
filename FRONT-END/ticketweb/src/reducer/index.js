import {combineReducers} from 'redux'
import getLoginReducer from './getLoginReducer'
import getAllTicket from './getAllTicket'
import orderReducer from './orderReducer'
export default combineReducers({
     getLoginReducer,
     getAllTicket,
     orderReducer
})