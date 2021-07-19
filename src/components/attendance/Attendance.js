import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

import StudentAttendance from '../student/StudentAttendance';
import LecturerAttendance from '../lecturer/LecturerAttendance';

const Attendance = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userType, user, setRegistered } = authContext;

  useEffect(() => {
    if (isAuthenticated && !user) {
      setRegistered(true);
    }
  });
  return isAuthenticated && userType === 'student' ? <StudentAttendance /> : <LecturerAttendance />;
};

export default Attendance;
