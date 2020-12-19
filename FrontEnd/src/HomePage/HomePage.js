import React from 'react';
import AddItem from '../AddItem/AddItem';
import AmountSpent from '../AmountSpent/AmountSpent';
import { GlobalProvider } from '../Context/GlobalState';
import ExpenseList from '../ExpenseList/ExpenseList';
import Total from '../Total/Total';

function HomePage () {
    return (
        <GlobalProvider>
            <div className="main">
                <Total/>
                <AmountSpent/>
                <ExpenseList/>
                <AddItem/>
            </div>
        </GlobalProvider>
        
    );
}

export default HomePage;