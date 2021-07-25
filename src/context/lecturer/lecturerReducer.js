import {
  ATTTENDANCE_STUDENT,
  LECTURER_DATA,
  LECTURER_SETUP_FAIL,
  LIST_ATTTENDANCE,
  LIST_ATTTENDANCE_CLASS,
  LIST_ATTTENDANCE_CLASS_ONE,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LECTURER_DATA:
      return {
        ...state,
        lecturer: action.payload,
      };
    case LECTURER_SETUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LIST_ATTTENDANCE:
      return {
        ...state,
        attendance: action.payload,
      };
    case LIST_ATTTENDANCE_CLASS:
      return {
        ...state,
        attendanceClass: action.payload,
      };
    case LIST_ATTTENDANCE_CLASS_ONE:
      return {
        ...state,
        attendanceClassOne: action.payload,
      };
    case ATTTENDANCE_STUDENT:
      return {
        ...state,
        attendanceStudents: action.payload,
      };
    default:
      return state;
  }
};
