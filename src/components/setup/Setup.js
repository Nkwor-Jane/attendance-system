import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Student from './Student';
import Lecturer from './Lecturer';

const Setup = (props) => {
  const authContext = useContext(AuthContext);
  const { userType, registered } = authContext;
  useEffect(() => {
    if (!registered) props.history.push('/dashboard');
  }, [props.history, registered]);
  return userType === 'student' ? <Student /> : <Lecturer />;
};

export default Setup;
