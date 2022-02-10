import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./Product";
import errorReducer from './errorReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import filiterReducer from './filiterReducer';
import countReducer from './countReducer';
export default combineReducers({
    authReducer,
    productReducer,
    errorReducer,
    cartReducer,
    orderReducer,
    filiterReducer,
    countReducer,
  });
