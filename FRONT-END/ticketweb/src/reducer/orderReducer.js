let ALL_INFO = {
    GetListOrder : [],
    GetCountOrder : 0
}
    

export default (state = ALL_INFO,action)=>{
   switch(action.type){
       case "GET_LIST_ORDER":
           return {...state, GetListOrder: action.playload}
       case "GET_COUNT_ORDER":
           return {...state, GetCountOrder: action.playload}
        default :
           return state
   }
}