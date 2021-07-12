import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
  SET_REGISTERED,
  REMOVE_LOADING,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        registered: false,
        loading: false,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('accessToken', action.payload.user_access_token);
      localStorage.setItem('userType', action.payload.user_data.user_type);
      return {
        ...state,
        ...action.payload,
        loading: false,
        registered: true,
        userType: action.payload.user_data.user_type,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('accessToken', action.payload.user_access_token);
      localStorage.setItem('userType', action.payload.user_data.user_type);
      return {
        ...state,
        userType: action.payload.user_data.user_type,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userType');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
        userType: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case SET_REGISTERED:
      return {
        ...state,
        isAuthenticated: false,
        registered: action.payload,
      };
    default:
      return state;
  }
};
