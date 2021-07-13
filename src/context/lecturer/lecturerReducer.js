import { LECTURER_DATA } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LECTURER_DATA:
      return {
        ...state,
        lecturer: action.payload,
      };
    default:
      return state;
  }
};
