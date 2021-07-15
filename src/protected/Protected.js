import { useContext, useEffect } from "react";
import AuthContext from '../context/auth/authContext';
import CoursesS from "../components/students/CoursesS";
import CoursesL from '../components/lecturers/CoursesL';

const Protected = (props) => {
    const authContext = useContext(AuthContext);
    const {userType, registered} = authContext;

    useEffect(() => {
        if(!registered) props.history.push('/courses');

    },[props.history, registered])
    return ( 
         userType === 'student' ? <CoursesS/> : <CoursesL/>
     );
}
 
export default Protected;