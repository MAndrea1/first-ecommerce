import { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
    basket: [],
    user: 'Guest',
    totalItems: 0
}

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addproduct = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    const removefrombasket = (item) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: item})
    }

    const editproduct = (id) => {
        dispatch({type: 'EDIT_PRODUCT', payload: id})

    }
    const setusername = (username) => {
        dispatch({type: 'SET_USER_NAME', payload: username})
    }

    const emptybasket = () => {
        dispatch({type: 'EMPTY_BASKET'})
    }

    return <Context.Provider value={{...state, addproduct, removefrombasket, editproduct, setusername, emptybasket}}>
        {children}
    </Context.Provider>
}