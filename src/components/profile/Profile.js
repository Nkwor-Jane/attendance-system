import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

import StudentProfile from '../student/StudentProfile';
import LecturerProfile from '../lecturer/LecturerProfile';

const Profile = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userType, user, setRegistered } = authContext;

  useEffect(() => {
    if (isAuthenticated && !user) {
      setRegistered(true);
    }
  });
  return isAuthenticated && userType === 'student' ? <StudentProfile /> : <LecturerProfile />;
};

export default Profile;
