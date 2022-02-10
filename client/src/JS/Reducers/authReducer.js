import {
    LOGIN_USER,
    LOGOUT,
    GET_AUTH_USER,
    REGISTER_USER,
    AUTH_ERROR,
    SET_LOADING,
    EDIT_USER_FAIL,
    TOGGLE_FALSE,
    GET_USER_LOAD ,
    GET_USER_SUCESS,
    GET_USER_FAIL,
  TOGGLE_TRUE,
  } from "../ActionTypes/AuthTypes";
  
  const initState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuth: false,
    isLoading: true,
    msg: null,
    errors: null,
    edit: false,
    userToFind: {},
  };
  
  export default function (state = initState, { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
      case LOGOUT:
      case AUTH_ERROR:
        localStorage.removeItem("token");
        return {
          ...state,
          user: null,
          token: null,
          isAuth: false,
          isLoading: false,
          
        };
      case LOGIN_USER:
      case REGISTER_USER:
        localStorage.setItem("token", payload.token);
        return { ...state, isLoading: false, isAuth: true, ...payload };
      case GET_AUTH_USER:
        return { ...state, isLoading: false, isAuth: true, ...payload };
        case TOGGLE_TRUE:
          return { ...state, edit: true };
        case TOGGLE_FALSE:
          return { ...state, edit: false };
        case EDIT_USER_FAIL:
      return { ...state, errors: payload };
      case GET_USER_LOAD:
        return { ...state, isLoading: true };
      case GET_USER_SUCESS:
        return { ...state, isLoading: false, userToFind: payload };
      case GET_USER_FAIL:
        return { ...state, isLoading: false, errors: payload };
      default:
        return state;
    }
  }