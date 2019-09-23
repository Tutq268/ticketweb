const Get_Status_Login = "abcccccc"

export default (state = {Get_Status_Login},action) => {
    switch(action.type){
        case 'GET_LOGIN' :
            return {
                ...state,
                Get_Status_Login: action.playload
            }
        default:
            return state 
    } 
}