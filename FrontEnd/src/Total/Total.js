import React, { useContext }  from 'react';
import { GlobalContext } from '../Context/GlobalState.js';

function Total () {
    const { items } = useContext(GlobalContext);
    const amounts = items.map(item => item.amount);
    const total = amounts.reduce((acc, insert) => (acc += insert), 0).toFixed(2);

    return (
        <div>
            <h2>Your total amount</h2>
            <h1 id="total">${total}</h1>
        </div>
    )
}

export default Total;