import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';

import AttendanceStudent from '../../students/AttendanceStudent';
import AttendanceLecturer from '../../lecturers/AttendanceLecturer';


const Attendance = (props) =>{
    const authContext = useContext(AuthContext);
    const {isAuthenticated, userType, user, setRegistered} = authContext;

    useEffect(() =>{
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && userType === 'student' ? <AttendanceStudent/> : <AttendanceLecturer/>
}

export default Attendance;