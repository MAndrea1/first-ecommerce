export default function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            const exists = state.basket.findIndex((item) => item.id === action.payload.id);
            console.log('exists:',exists)
            if (exists !== -1) {
                const newState = state.basket.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
                // const newState = [
                //     ...state.basket.slice(0, exists),
                //     {...state.basket[exists], quantity: state.basket[exists].quantity + 1},
                //     ...state.basket.slice(exists + 1)
                // ];
                console.log('newState:',newState)
                return {
                    ...state,
                    basket: newState,
                    totalItems: state.totalItems + 1
                };
            }
            const newitem = {...action.payload, quantity: 1, ticket: Date.now()}
                return {
                    ...state,
                    basket: [
                        ...state.basket, newitem
                    ],
                    totalItems: state.totalItems + 1
                };
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                basket: state.basket.filter(order => order.ticket !== action.payload),
                totalItems: state.totalItems - 1
            }
        case 'EDIT_PRODUCT':
            return{
                ...state,
                basket: [...state.basket]
            }
        default: return state;
    }
}