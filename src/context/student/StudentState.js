import React, { useReducer } from 'react';
import StudentReducer from './studentReducer';
import StudentContext from './studentContext';
import axios from 'axios';
import { STUDENT_DATA, STUDENT_SETUP_FAIL } from '../types';

const StudentState = (props) => {
  const initialState = {
    student: null,
    error: null,
  };

  const [state, dispatch] = useReducer(StudentReducer, initialState);

  // Backend Api Url
  const url = process.env.REACT_APP_URL;

  // save Student profile
  const createProfile = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${url}/student`, formData, config);
      dispatch({
        type: STUDENT_DATA,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: STUDENT_SETUP_FAIL,
        payload: err.response.data,
      });
    }
  };

  // Update Student Profile
  const updateProfile = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + defaultToken,
      },
    };
    try {
      const student_id = localStorage.student_id;
      const res = await axios.put(`${url}/student/${student_id}`, formData, config);

      dispatch({
        type: STUDENT_DATA,
        payload: res.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        student: state.student,
        error: state.error,
        createProfile,
        updateProfile,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
