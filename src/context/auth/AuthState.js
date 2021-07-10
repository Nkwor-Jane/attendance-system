import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken.js';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
  LIST_DEPARTMENTS,
  LIST_FACULTIES,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('accessToken'),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null,
    faculties: [],
    departments: [],
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  setAuthToken(localStorage.token);

  // loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // Backend Api Url
  const url = process.env.REACT_APP_URL;

  // Load User and App Data
  const loadData = async () => {
    setAuthToken(localStorage.token);

    try {
      const faculties = await axios.get(`${url}/faculty`);
      const departments = await axios.get(`${url}/department`);

      dispatch({
        type: LIST_FACULTIES,
        payload: faculties.data,
      });
      dispatch({
        type: LIST_DEPARTMENTS,
        payload: departments.data,
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
        payload: err.response.data.error.message,
      });
    }
  };

  // Login User
  const loginUser = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${url}/login`, formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error.message,
      });
    }
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
        faculties: state.faculties,
        departments: state.departments,
        registerUser,
        loadData,
        loginUser,
        logout,
        clearErrors,
        setLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
