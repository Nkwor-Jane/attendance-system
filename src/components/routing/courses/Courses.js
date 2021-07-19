import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';

import CoursesLecturer from '../../lecturers/CoursesLecturer';
import CoursesStudent from '../../students/CoursesStudent';


const Courses = (props) =>{
    const authContext = useContext(AuthContext);
    const { isAuthenticated, userType, user, setRegistered } = authContext;

    useEffect(() =>{
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && user && userType === 'student' ? <CoursesStudent/> : <CoursesLecturer/>
}
export default Courses;