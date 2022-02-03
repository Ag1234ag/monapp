import { GET_CART_LOAD  ,GET_CART_SUCESS, GET_CART_FAIL } from '../ActionTypes/CartTypes';
const initState = {
    cart: null,
    loading: false,
    cartToFind: [],
    load: false,
    errors: null,
}

const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CART_LOAD:
            return { ...state, load: true };
          case GET_CART_SUCESS:
            return { ...state, load: false, cart: payload };
          case GET_CART_FAIL:
            return { ...state, load: false, errors: payload };

       

        default:
            return state;
    }
};
export default cartReducer;