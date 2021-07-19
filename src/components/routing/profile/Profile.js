import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';

import ProfileStudent from '../../students/ProfileStudent';
import ProfileLecturer from '../../lecturers/ProfileLecturer';

const Profile = (props) =>{
    const authContext = useContext(AuthContext);
    const {isAuthenticated, userType, user, setRegistered} = authContext;

    useEffect(() => {
        if(isAuthenticated && !user){
            setRegistered(true);
        }
    })
    return isAuthenticated && userType === 'student' ? <ProfileStudent/> : <ProfileLecturer/>
}

export default Profile;