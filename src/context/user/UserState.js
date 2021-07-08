import React, { useReducer } from 'react';
import UserContext from './userContext';
import { GET_USER_TOKEN, GET_USER_TYPE } from '../types';
import UserReducer from './userReducer';

const UserState = (props) => {
  const initialState = {
    accessToken: '',
    userType: '',
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        accessToken: state.accessToken,
        userType: state.userType,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
