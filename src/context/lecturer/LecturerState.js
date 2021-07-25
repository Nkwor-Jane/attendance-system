import React, { useReducer } from 'react';
import LecturerReducer from './lecturerReducer';
import LecturerContext from './lecturerContext';
import axios from 'axios';
import {
  LECTURER_DATA,
  LECTURER_SETUP_FAIL,
  LIST_ATTTENDANCE,
  LIST_ATTTENDANCE_CLASS,
  LIST_ATTTENDANCE_CLASS_ONE,
  ATTTENDANCE_STUDENT,
} from '../types';

const LecturerState = (props) => {
  const initialState = {
    lecturer: null,
    error: null,
    attendance: [],
    attendanceClass: [],
    attendanceClassOne: null,
    attendanceStudents: [],
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
    } catch (err) {
      dispatch({
        type: LECTURER_SETUP_FAIL,
        payload: err.response.data,
      });
    }
  };

  // Update Lecturer Profile
  const updateProfile = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
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

  // Get list of attendance
  const getAttendance = async () => {
    try {
      const res = await axios.get(`${url}/attendance`);
      dispatch({
        type: LIST_ATTTENDANCE,
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Get list of attendance class
  const getAttendanceClass = async (id) => {
    dispatch({
      type: LIST_ATTTENDANCE_CLASS,
      payload: 'loading',
    });
    try {
      const res = await axios.get(`${url}/attendance_class/${id}`);
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

  // Get list of attendance class
  const getAttendanceClassOne = async (id) => {
    dispatch({
      type: LIST_ATTTENDANCE_CLASS_ONE,
      payload: 'loading',
    });
    try {
      const res = await axios.get(`${url}/attendance_class/${id}`);
      dispatch({
        type: LIST_ATTTENDANCE_CLASS_ONE,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: LIST_ATTTENDANCE_CLASS_ONE,
        payload: 'error',
      });
    }
  };

  // create attendance
  const createAttendance = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(`${url}/attendance`, formData, config);
      dispatch({
        type: LECTURER_SETUP_FAIL,
        payload: null,
      });
    } catch (err) {
      dispatch({
        type: LECTURER_SETUP_FAIL,
        payload: err.response.data,
      });
    }
  };

  // create attendance class
  const createAttendanceClass = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(`${url}/attendance_class`, formData, config);
      dispatch({
        type: LECTURER_SETUP_FAIL,
        payload: null,
      });
    } catch (err) {
      dispatch({
        type: LECTURER_SETUP_FAIL,
        payload: err.response.data,
      });
    }
  };

  // update attendance class
  const updateAttendanceClass = async (id, data) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.put(`${url}/attendance_class/${id}`, data, config);
    } catch (err) {
      dispatch({
        type: LECTURER_SETUP_FAIL,
        payload: err.response.data,
      });
    }
  };

  // get student attendance class
  const getStudentAttendanceClass = async (id) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(`${url}/student_class/${id}`, config);
      dispatch({
        type: ATTTENDANCE_STUDENT,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: LECTURER_SETUP_FAIL,
        payload: err.response.data,
      });
    }
  };

  return (
    <LecturerContext.Provider
      value={{
        lecturer: state.lecturer,
        error: state.error,
        attendance: state.attendance,
        attendanceClass: state.attendanceClass,
        attendanceClassOne: state.attendanceClassOne,
        attendanceStudents: state.attendanceStudents,
        createProfile,
        updateProfile,
        getAttendance,
        getAttendanceClass,
        createAttendance,
        getAttendanceClassOne,
        createAttendanceClass,
        updateAttendanceClass,
        getStudentAttendanceClass,
      }}
    >
      {props.children}
    </LecturerContext.Provider>
  );
};

export default LecturerState;
