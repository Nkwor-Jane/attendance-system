import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';

import SettingsLecturer from '../../lecturers/SettingsLecturer';
import SettingsStudent from '../../students/SettingsStudent';

const Settings = (props) =>{
    const authContext = useContext(AuthContext);
    const {isAuthenticated, userType, user, setRegistered} = authContext;

    useEffect(() =>{
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && userType === 'student' ? <SettingsStudent/> : <SettingsLecturer/>
}

export default Settings;