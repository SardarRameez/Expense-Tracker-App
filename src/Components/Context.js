import React , {createContext, useReducer} from 'react'
import transReducer from './Reducer';

let initialState={
    transactions:[
{amount:100,description:"Pay"},
{amount:-70,description:"Bill"},
    ]
}

let transContext=createContext(initialState)

export default transContext;

export const ContextProvider=({children})=>{
    let [state,dispatch]=useReducer(transReducer,initialState)
    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction

        })
    }
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    return (<transContext.Provider value={{transaction:state.transactions,addTransaction,deleteTransaction}}>
        {children}
    </transContext.Provider>)
}