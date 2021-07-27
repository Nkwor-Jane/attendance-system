import React, { useReducer } from 'react';
import StudentReducer from './studentReducer';
import StudentContext from './studentContext';
import axios from 'axios';
import {
  STUDENT_DATA,
  STUDENT_SETUP_FAIL,
  LIST_ATTTENDANCE_CLASS,
  SET_LOADING,
  REMOVE_LOADING,
  LIST_STUDENT_CLASS,
} from '../types';

const StudentState = (props) => {
  const initialState = {
    student: null,
    error: null,
    attendanceList: [],
    loading: false,
    studentClass: [],
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
  const updateProfile = async (userDetails) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const student_id = localStorage.student_id;
      const res = await axios.put(`${url}/student/${student_id}`, userDetails, config);

      dispatch({
        type: STUDENT_DATA,
        payload: res.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  // Get list of attendance class
  const getAttendanceClass = async () => {
    dispatch({
      type: LIST_ATTTENDANCE_CLASS,
      payload: 'loading',
    });
    try {
      const res = await axios.get(`${url}/attendance_class`);
      dispatch({
        type: LIST_ATTTENDANCE_CLASS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: LIST_ATTTENDANCE_CLASS,
        payload: 'error',
      });
    }
  };

  // save Student class
  const createStudentClass = async (data) => {
    dispatch({
      type: SET_LOADING,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      data.attendance_class_id = data.id;
      await axios.post(`${url}/student_class`, data, config);
    } catch (err) {
      dispatch({
        type: REMOVE_LOADING,
      });
      // dispatch({
      //   type: LIST_ATTTENDANCE_CLASS,
      //   payload: 'error',
      // });
    }
  };

  // remove loading
  const removeLoading = () => {
    dispatch({
      type: REMOVE_LOADING,
    });
  };

  //get student class
  const getStudentClass = async () => {
    try {
      const res = await axios.get(`${url}/student_class`);
      dispatch({
        type: LIST_STUDENT_CLASS,
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        student: state.student,
        error: state.error,
        attendanceList: state.attendanceList,
        loading: state.loading,
        studentClass: state.studentClass,
        createProfile,
        updateProfile,
        getAttendanceClass,
        createStudentClass,
        removeLoading,
        getStudentClass,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
