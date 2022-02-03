import axios from 'axios';
import {GET_CART_LOAD  ,GET_CART_SUCESS, GET_CART_FAIL} from '../ActionTypes/CartTypes';

export const getCart = (id) => async (dispatch) => {
  dispatch({ type: GET_CART_LOAD });
  try {
    let result = await axios.get(`/api/cart/61eff6eb27c8731b1796a27b`);
    dispatch({
      type: GET_CART_SUCESS,
      payload: result.data.listCart,
    });
  } catch (error) {
    dispatch({ type: GET_CART_FAIL, payload: error.response.data });

  }
};

