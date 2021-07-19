import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

import LecturerSettings from '../lecturer/LecturerSettings';
import StudentSettings from '../student/StudentSettings';

const Settings = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userType, user, setRegistered } = authContext;

  useEffect(() => {
    if (isAuthenticated && !user) {
      setRegistered(true);
    }
  });
  return isAuthenticated && userType === 'student' ? <StudentSettings /> : <LecturerSettings />;
};

export default Settings;
