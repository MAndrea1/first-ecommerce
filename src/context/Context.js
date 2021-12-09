import { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
    basket: [],
    user: 'Guest'
}

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addproduct = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    const removefrombasket = (ticket) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: ticket})
    }

    return <Context.Provider value={{...state, addproduct, removefrombasket}}>
        {children}
    </Context.Provider>
}