import { createStore } from 'redux';


const initialState = {
    cart: []
};
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            const itemExists = state.cart.find(item => item.id === action.payload.id);
            if (itemExists) {
                return {
                    ...state,
                    cart: state.cart.map((ele) => ele.id === action.payload.id

                        ? { ...ele, quantity: ele.quantity + 1 }
                        : ele
                    )
                }
            } else {
                return {

                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
        case 'del':
            return {

                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'clear':
            return {

                ...state,
                cart: []
            }
        default:
            return state;
    }
}

export const store = createStore(cartReducer);