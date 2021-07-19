import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

import LecturerCourses from '../lecturer/LecturerCourses';
import StudentCourses from '../student/StudentCourses';

const Courses = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userType, user, setRegistered } = authContext;

  useEffect(() => {
    if (isAuthenticated && !user) {
      setRegistered(true);
    }
  });
  return isAuthenticated && user && userType === 'student' ? (
    <StudentCourses />
  ) : (
    <LecturerCourses />
  );
};
export default Courses;
