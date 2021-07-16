import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';

import CoursesL from '../components/lecturers/CoursesL';
import CoursesS from '../components/students/CoursesS';


const Courses = (props) =>{
    const authContext = useContext(AuthContext);
    const { isAuthenticated, userType, user, setRegistered } = authContext;

    useEffect(() =>{
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && user && userType === 'student' ? <CoursesS/> : <CoursesL/>
}
export default Courses;