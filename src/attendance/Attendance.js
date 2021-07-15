import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/auth/authContext';

import AttendanceS from '../components/students/AttendanceS';
import AttendanceL from '../components/lecturers/AttendanceL';


const Attendance = (props) =>{
    const authContext = useContext(AuthContext);
    const {isAuthenticated, userType, user, setRegistered} = authContext;

    useEffect(() =>{
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && userType === 'student' ? <AttendanceS/> : <AttendanceL/>
}

export default Attendance;