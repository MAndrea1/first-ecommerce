export default function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TO_BASKET':
                return {
                    ...state,
                    basket: [
                        ...state.basket, {...action.payload, ticket: Date.now()}
                    ]
                };
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                basket: state.basket.filter(order => order.ticket !== action.payload)
            }
        default:
            break;
    }
}