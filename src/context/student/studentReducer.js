import {
  LIST_ATTTENDANCE_CLASS,
  LIST_STUDENT_CLASS,
  REMOVE_LOADING,
  SET_LOADING,
  STUDENT_DATA,
  STUDENT_SETUP_FAIL,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case STUDENT_DATA:
      return {
        ...state,
        student: action.payload,
      };
    case STUDENT_SETUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LIST_ATTTENDANCE_CLASS:
      return {
        ...state,
        attendanceList: action.payload,
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
    case LIST_STUDENT_CLASS:
      return {
        ...state,
        studentClass: action.payload,
      };
    default:
      return state;
  }
};
