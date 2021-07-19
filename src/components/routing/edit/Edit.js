import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';

import EditLecturer from '../../lecturers/EditLecturer';
import EditStudent from '../../students/EditStudent';


const Edit = (props) =>{
    const authContext = useContext(AuthContext);
    const {isAuthenticated, userType, user, setRegistered} = authContext;

    useEffect(() => {
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && userType === 'student' ? <EditStudent/> :<EditLecturer/>
}


export default Edit;