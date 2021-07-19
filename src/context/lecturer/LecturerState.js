import React, { useReducer } from 'react';
import LecturerReducer from './lecturerReducer';
import LecturerContext from './lecturerContext';
import axios from 'axios';
import { LECTURER_DATA } from '../types';

const LecturerState = (props) => {
  const initialState = {
    lecturer: null,
  };

  const [state, dispatch] = useReducer(LecturerReducer, initialState);

  // Backend Api Url
  const url = process.env.REACT_APP_URL;

  // save Lecturer profile
  const createProfile = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${url}/lecturer`, formData, config);
      dispatch({
        type: LECTURER_DATA,
        payload: res.data.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

// Update Lecturer Profile
const updateProfile = async (formData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + defaultToken,
    },
  };
  try {
    const lecturer_id = localStorage.lecturer_id;
    const res = await axios.put(`${url}/lecturer/${lecturer_id}`, formData, config);

    dispatch({
      type: LECTURER_DATA,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
  }
};
  return (
    <LecturerContext.Provider
      value={{
        lecturer: state.lecturer,
        createProfile,
        updateProfile,
      }}
    >
      {props.children}
    </LecturerContext.Provider>
  );
};

export default LecturerState;
