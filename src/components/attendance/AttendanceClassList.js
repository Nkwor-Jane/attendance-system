import React, { Fragment, useContext, useEffect } from 'react';
import LecturerContext from '../../context/lecturer/lecturerContext';
import AppContext from '../../context/app/appContext';
import Spinner from '../layout/Spinner';
import { stringToUpperCase } from '../../utils/stringModifier';

const AttendanceClassList = (props) => {
  const lecturerContext = useContext(LecturerContext);
  const appContext = useContext(AppContext);
  const {
    attendanceClass,
    getAttendanceClass,
    getStudentAttendanceClass,
    updateAttendanceClass,
    attendanceStudents,
  } = lecturerContext;

  const { courses, faculties, departments } = appContext;

  //backend url
  const url = 'https://lasu-attendance.herokuapp.com';

  useEffect(() => {
    getAttendanceClass(localStorage.getItem('attendanceClass'));
    getStudentAttendanceClass(props.match.params.lecture_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let courseName, lectureId, facultyName, departmentName, semester, session, active, qrdata;

  const onUpdateClass = async (id, data) => {
    await updateAttendanceClass(id, { active: data });
    window.location.reload();
  };

  return (
    <div className="mt-10 content">
      <div className="bg-primary-gradient py-2 px-3">
        <h3 className="text-white p-2 fw-bold">Attendance Records</h3>
      </div>
      <div className="page-inner ">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {attendanceClass === 'loading' ? (
                <Spinner />
              ) : (
                <Fragment>
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title" style={{ textAlign: 'center', margin: 'auto' }}>
                        {' '}
                        {attendanceClass.forEach((data, key) => {
                          if (data.id.toString() === props.match.params.lecture_id) {
                            courses.forEach((course) => {
                              if (course.id === data.attendance.course_id)
                                courseName = course.course_code;
                            });
                            faculties.forEach((faculty) => {
                              if (faculty.id === data.attendance.faculty_id)
                                facultyName = faculty.faculty_name;
                            });
                            departments.forEach((department) => {
                              if (department.id === data.attendance.department_id)
                                departmentName = department.department_name;
                            });
                            lectureId = key + 1;
                            semester = data.attendance.semester;
                            session = data.attendance.academic_session;
                            active = data.active;
                            qrdata = data.qr_code_data;
                          }
                        })}{' '}
                        <span style={{ color: 'red' }}>
                          Lecture {lectureId} - Attendance - {courseName}
                        </span>
                        <br />
                        Faculty of {facultyName}
                        <br />
                        Department of {departmentName}
                        <br />
                        {semester} Semester - {session} Session
                        <br />
                      </div>
                      {active === 1 && (
                        <a
                          className="btn btn-primary btn-lg pull-right"
                          aria-disabled="true"
                          href={`${url}/qrcode/${qrdata}`}
                          role="button"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GENERATE QR
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="card-body">
                    <span className={'pull-right'}>
                      {active ? (
                        <p>
                          STATUS: <span style={{ color: 'green' }}>Active</span> <br />{' '}
                          <button onClick={() => onUpdateClass(props.match.params.lecture_id, 0)} className="btn btn-primary btn-round">
                            END CLASS
                          </button>
                        </p>
                      ) : (
                        <p>
                          <span style={{ color: 'red', marginBottom: '10px' }}>NOT ACTIVE</span> <br />{' '}
                          <button onClick={() => onUpdateClass(props.match.params.lecture_id, 1)} className="btn btn-primary btn-border btn-round">
                            START CLASS
                          </button>
                        </p>
                      )}
                    </span>
                    <br />
                    <div style={{ margin: 'auto', marginTop: '50px' }}>
                      {attendanceStudents.length === 0 ? (
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
                            })}
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceClassList;
