import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState.js';

function Item ({ item }) {
    const { deleteItem } = useContext(GlobalContext);

    const sign = item.amount < 0 ? '-' : '+';

    return (
        <li className={item.amount < 0 ? 'history1' : 'history2'}>
                {item.text} <span>{sign}${Math.abs(item.amount)}</span><button onClick={() => deleteItem(item.id)}
                 className="delete-btn">x</button>
        </li>
    )
}

export default Item;