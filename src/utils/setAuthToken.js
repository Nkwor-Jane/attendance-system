import axios from 'axios';

const defaultToken = process.env.REACT_APP_API_TOKEN;

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + defaultToken;
  }
};

export default setAuthToken;
