import React from 'react'

const Cart = ({transList, deleteTransaction}) => {
    const list =  transList.length ?
    (transList.map(transaction => {
        return(
            <div key={transaction.customer}>
                <p>Mr. {transaction.customer}</p>
                <p>
                    {transaction.drink}
                </p>
                <p>
                {transaction.quantity} drinks
                </p>
                <button onClick={() => deleteTransaction(transaction.customer)}>Delete</button>
            </div>
            )
            })) 
            : (
                <p> There is nothing left to say now</p>
            ) 
     
    return (
        <div>{list}</div>
    )
}

export default Cart;