import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Student from '../student/Student';
import Lecturer from '../lecturer/Lecturer';
import AlertContext from '../../context/alert/alertContext';

const Dashboard = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { isAuthenticated, userType, user, setRegistered } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated && !user) {
      setRegistered(true);
      props.history.push('/setup');
      setAlert('Registration Successful, Setup Profile!!!', 'success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isAuthenticated && user && userType === 'student' ? <Student /> : <Lecturer />;
};

export default Dashboard;
