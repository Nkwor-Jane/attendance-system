import { LECTURER_DATA, LECTURER_SETUP_FAIL } from '../types';

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
    default:
      return state;
  }
};
