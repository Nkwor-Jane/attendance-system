import { STUDENT_DATA } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case STUDENT_DATA:
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
};
