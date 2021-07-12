import React, { useReducer } from 'react';
import AppReducer from './appReducer';
import axios from 'axios';
import {
  SET_DATA_LOADING,
  LIST_FACULTIES,
  LIST_DEPARTMENTS,
  SET_DATA_ERROR,
  SET_UPLOADING,
  SET_UPLOAD_URL,
} from '../types';
import AppContext from './appContext';
import setAuthToken from '../../utils/setAuthToken';

const AppState = (props) => {
  // Environment data
  const url = process.env.REACT_APP_URL;
  const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL;
  const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME;
  const cloudinaryPreset = process.env.REACT_APP_CLOUDINARY_PRESET;
  const defaultImage = process.env.REACT_APP_DEFAULT_PROFILE_IMAGE;

  const initialState = {
    faculties: [],
    departments: [],
    dataLoading: false,
    dataError: null,
    loading: false,
    uploading: false,
    uploadUrl: defaultImage,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setDataLoading = () => {
    dispatch({
      types: SET_DATA_LOADING,
    });
  };

  // Get list of faculties
  const getFaculties = async () => {
    setAuthToken(localStorage.accessToken);
    try {
      const res = await axios.get(`${url}/faculty`);
      dispatch({
        type: LIST_FACULTIES,
        payload: res.data.data,
      });
    } catch (e) {
      setDataError('Failed to Fetch Data, please reload page', 'faculty');
    }
  };

  // Get list of departments
  const getDepartments = async () => {
    setAuthToken(localStorage.accessToken);
    try {
      const res = await axios.get(`${url}/department`);
      dispatch({
        type: LIST_DEPARTMENTS,
        payload: res.data.data,
      });
    } catch (e) {
      setDataError('Failed to Fetch Data, please reload page', 'department');
    }
  };

  // Set data fetch error incase of any
  const setDataError = (msg, type) => {
    dispatch({
      type: SET_DATA_ERROR,
      payload: { msg, type },
    });
  };

  // Set Data is Uploading
  const setUploading = () => {
    dispatch({
      type: SET_UPLOADING,
    });
  };

  // Upload Image
  const uploadImage = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', cloudinaryPreset);
    data.append('cloud_name', cloudinaryName);
    try {
      fetch(cloudinaryUrl, {
        method: 'post',
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          dispatch({
            type: SET_UPLOAD_URL,
            payload: data.url,
          });
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        faculties: state.faculties,
        departments: state.departments,
        dataLoading: state.dataLoading,
        dataError: state.dataError,
        loading: state.laoding,
        uploading: state.uploading,
        uploadUrl: state.uploadUrl,
        setDataLoading,
        getFaculties,
        getDepartments,
        uploadImage,
        setUploading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
