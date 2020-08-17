import React, { useContext } from 'react'
import transContext from './Context'

export const Balance = () => {
    const {transaction}=useContext(transContext)
    const amount=transaction.map((trans)=>trans.amount)
    const total=amount.length>0?amount.reduce((acc,item)=>(acc+=item),0).toFixed(2):0
    return (
        <div>
            <h3>Your Balance</h3>
            <h2 style={{marginTop:-10}}>${total}</h2>
        </div>
    )
}

