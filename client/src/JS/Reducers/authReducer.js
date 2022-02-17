import {
  LOGIN_USER,
  LOGOUT,
  GET_AUTH_USER,
  REGISTER_USER,
  AUTH_ERROR,
  SET_LOADING,
  EDIT_USER_FAIL,
  TOGGLE_FALSE,
  // GET_USER_LOAD,
  // GET_USER_SUCESS,
  // GET_USER_FAIL,
  TOGGLE_TRUE,
} from "../ActionTypes/AuthTypes";

const initState = {
  token: localStorage.getItem("token"),
  user: {},
  isAuth: false,
  isLoading: false,
  msg: null,
  errors: null,
  edit: false,
  userToFind: {},
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuth: false,
        isLoading: false,
      };

    case AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        errors: payload
      };

    case LOGIN_USER:
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, isLoading: false, isAuth: true, ...payload };

    case GET_AUTH_USER:
      console.log(payload.user)
      return { ...state, isLoading: false, isAuth: true, user: payload.user };

    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };
    case EDIT_USER_FAIL:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default authReducer