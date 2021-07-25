import { STUDENT_DATA, STUDENT_SETUP_FAIL } from '../types';

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
    default:
      return state;
  }
};
