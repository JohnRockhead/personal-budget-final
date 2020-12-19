import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    items: [
        {id: 1, text: 'Car', amount: -274},
        {id: 2, text: 'Gas', amount: -30},
        {id: 3, text: 'Insurance', amount: -177},
        {id: 4, text: 'Allowance', amount: +250},
    ] 
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    
    function deleteItem(id) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }

    function addItem(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }

    return (<GlobalContext.Provider value={{
        items: state.items,
        deleteItem,
        addItem
    }}>
        {children}
    </GlobalContext.Provider>);
}