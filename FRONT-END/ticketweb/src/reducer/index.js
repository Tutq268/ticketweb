import {combineReducers} from 'redux'
import getLoginReducer from './getLoginReducer'
import getAllTicket from './getAllTicket'
export default combineReducers({
     getLoginReducer,
     getAllTicket
})