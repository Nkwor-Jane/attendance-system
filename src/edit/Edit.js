import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/auth/authContext';

import EditL from '../components/lecturers/EditL';
import EditS from '../components/students/EditS';


const Edit = (props) =>{
    const authContext = useContext(AuthContext);
    const {isAuthenticated, userType, user, setRegistered} = authContext;

    useEffect(() => {
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && userType === 'student' ? <EditS/> :<EditL/>
}


export default Edit;