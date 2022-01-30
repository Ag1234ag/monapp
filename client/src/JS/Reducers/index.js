import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./Product";
import errorReducer from './errorReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
export default combineReducers({
    authReducer,
    productReducer,
    errorReducer,
    cartReducer,
    orderReducer,
  });
