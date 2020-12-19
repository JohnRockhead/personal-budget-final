import React, { useContext }  from 'react';
import { GlobalContext } from '../Context/GlobalState.js';

function AmountSpent () {
    const { items } = useContext(GlobalContext);

    const amounts = items.map(item => item.amount);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <div className="amnt-container">
        <h3>Money spent</h3>
        <p>${expense}</p>
    </div>
    )

}

export default AmountSpent;