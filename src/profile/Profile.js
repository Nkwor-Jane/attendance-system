import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/auth/authContext';

import ProfileS from '../components/students/ProfileS';
import ProfileL from '../components/lecturers/ProfileL';

const Profile = (props) =>{
    const authContext = useContext(AuthContext);
    const {isAuthenticated, userType, user, setRegistered} = authContext;

    useEffect(() => {
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && userType === 'student' ? <ProfileS/> : <ProfileL/>
}

export default Profile;