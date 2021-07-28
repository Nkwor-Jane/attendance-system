import React from 'react'
// import { stringToUpperCase } from '../../utils/stringModifier';
// import AppContext from '../../context/app/appContext';
// import LecturerContext from '../../context/lecturer/lecturerContext';


const LecturerAttendance = (props) =>{

//   const lecturerContext = useContext(LecturerContext);
//   const appContext = useContext(AppContext);
//   const {
//     attendanceClass,
//     getAttendanceClass,
//     getStudentAttendanceClass,
//     updateAttendanceClass,
//     attendanceStudents,
//   } = lecturerContext;

//   const { courses, faculties, departments } = appContext;

//  useEffect(() => {
//   getAttendanceClass(localStorage.getItem('attendanceClass'));
//   getStudentAttendanceClass(props.match.params.lecture_id);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);



//  renderTableData() {
//   return this.state.courses.map((course, index) => {
//      const { id, matricno, studentname, percentage } = course //destructuring
//      return (
//         <tr key={id}>
//            <td>{id}</td>
//            <td>{matricno}</td>
//            <td>{studentname}</td>
//            <td>{percentage}</td>
//         </tr>
//      )
//   })
// }

// renderTableHeader() {
//   let header = Object.keys(this.state.courses[0])
//   return header.map((key, index) => {
//      return <th key={index}>{key.toUpperCase()}</th>
//   })
// }



  return (
    <div className="mt-10 content">
      <div className="page-inner">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">
                  <h3 className="fw-bold">Attendance Records</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container" style={{ minHeight: '375px' }}>
                <div style={{ margin: 'auto', marginTop: '50px' }}>
                      {/* {attendanceStudents.length === 0 ? (
                        <b>No Student for this class yet, Start Class and Generate QR</b>
                      ) : (
                        <div>
                          <table id='students'>
                            <tbody>
                              <tr style={{ border: '1px solid black', margin: '10px' }}>
                                <td>Matric Number</td>
                                <td>Name</td>
                                <td>Level</td>
                              </tr>
                            </tbody>
                            {attendanceStudents.map((students) => {
                              return (
                                <tr>
                                  <td>{students.student.matric_no}</td>
                                  <td>
                                    {stringToUpperCase(students.user.first_name)}{' '}
                                    {stringToUpperCase(students.user.last_name)}
                                  </td>
                                  <td>{students.student.level}</td>
                                </tr>
                              );
                            })} */}
                          {/* </table>
                        </div>
                      )} */}
                    </div>
                </div>
                <div id="myChartLegend"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerAttendance;
