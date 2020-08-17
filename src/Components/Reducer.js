const transReducer=(state,action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                transactions:[action.payload , ...state.transactions]};
        case "DELETE_TRANSACTION":
            return {
                transactions:state.transactions.filter((transaction,key)=>key!==action.payload)};
        default:
            return state;
    }
}
export default transReducer;