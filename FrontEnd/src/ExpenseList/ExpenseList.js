import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState.js';
import Item from '../Item/Item';

function ExpenseList () {

    const { items } = useContext(GlobalContext);

    return (
        <>
            <h3>History List</h3>
            <ul className="list">
                {items.map(item => (<Item key={item.id} item={item} />))}
                
            </ul>
        </>
    )
}

export default ExpenseList;
