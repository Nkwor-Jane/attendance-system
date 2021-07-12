import React, { useReducer } from 'react';
import StudentReducer from './studentReducer';
import StudentContext from './studentContext';
import axios from 'axios';
import { STUDENT_DATA } from '../types';

const StudentState = (props) => {
  const initialState = {
    student: null,
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
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        student: state.student,
        createProfile,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
