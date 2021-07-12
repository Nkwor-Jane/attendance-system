import {
  LIST_DEPARTMENTS,
  LIST_FACULTIES,
  SET_DATA_ERROR,
  SET_DATA_LOADING,
  SET_UPLOADING,
  SET_UPLOAD_URL,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LIST_FACULTIES:
      return {
        ...state,
        faculties: action.payload,
        dataLoading: false,
        dataError: null,
      };
    case LIST_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
        dataLoading: false,
        dataError: null,
      };
    case SET_DATA_LOADING:
      return {
        ...state,
        dataLoading: true,
      };
    case SET_DATA_ERROR:
      return {
        ...state,
        dataError: action.payload,
      };
    case SET_UPLOADING:
      return {
        ...state,
        uploading: true,
      };
    case SET_UPLOAD_URL:
      return {
        ...state,
        uploadUrl: action.payload,
        uploading: false,
      };
    default:
      return state;
  }
};
