import { GET_ORDERS, CHECKOUT, ORDERS_LOADING ,GET_ORDERS_SUCESS , GET_ORDERS_FAIL , GET_ORDERS_LOAD } from '../ActionTypes/OrderTypes';

const initialState = {
    orders: [],
    loading: false,
    errors: null,
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_ORDERS_LOAD:
            return { ...state, loading: true };
          case GET_ORDERS_SUCESS:
            return { ...state, loading: false, orders: action.payload };
          case GET_ORDERS_FAIL:
            return { ...state, loading: false, errors: action.payload };
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload,
                loading: false
            }

        case CHECKOUT:
            return{
                ...state,
                orders: [action.payload, ...state.orders]
            }

        case ORDERS_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}