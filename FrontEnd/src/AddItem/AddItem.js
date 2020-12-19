import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState.js';;

function AddItem () {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addItem } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addItem(newItem);
    }

    return (
        <>
            <h3>Add to total amount or new expense</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                     placeholder="Enter title" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br/>
                        (Using a negative (-) will add an expense. Using a positive (+) will add to total)</label
                    >
                    <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)}
                     placeholder="Enter amount" />
                </div>
                <button className="btn">Add Budget Item</button>
            </form>
        </>
    )
}

export default AddItem;