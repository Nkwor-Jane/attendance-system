import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken.js';
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

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('accessToken'),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null,
    userType: localStorage.getItem('userType'),
    registered: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // Api Token
  const defaultToken = process.env.REACT_APP_API_TOKEN;

  // Backend Api Url
  const url = process.env.REACT_APP_URL;

  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.accessToken);

    try {
      const userType = localStorage.userType;
      const user = await axios.get(`${url}/${userType}`);

      dispatch({
        type: USER_LOADED,
        payload: user.data.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const registerUser = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + defaultToken,
      },
    };
    try {
      const res = await axios.post(`${url}/register`, formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data,
      });
    }
  };

  // Registered but no profile filled ... set registered
  const setRegistered = (data) => {
    dispatch({
      type: SET_REGISTERED,
      payload: data,
    });
  };

  // Login User
  const loginUser = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + defaultToken,
      },
    };
    try {
      const res = await axios.post(`${url}/login`, formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data,
      });
    }
  };

  // remove loading
  const removeLoading = () => {
    dispatch({
      type: REMOVE_LOADING,
    });
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        userType: state.userType,
        registered: state.registered,
        registerUser,
        loadUser,
        loginUser,
        logout,
        clearErrors,
        setLoading,
        setRegistered,
        removeLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
