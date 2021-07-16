// import React, {useContext, useEffect} from 'react';
// import AuthContext from '../context/auth/authContext';

// import SettingsL from '../components/lecturers/SettingsL';
// import SettingsS from '../components/students/SettingsS';

// const Settings = (props) =>{
//     const authContext = useContext(AuthContext);
//     const {isAuthenticated, userType, user, setRegistered} = authContext;

//     useEffect(() =>{
//         if(isAuthenticated && !user){
//             setRegistered(true);
//         }
//     })
//     return isAuthenticated && userType === 'student' ? <SettingsS/> : <SettingsL/>
// }

// export default Settings;