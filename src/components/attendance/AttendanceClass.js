import React, { Fragment, useContext, useEffect } from 'react';
import LecturerContext from '../../context/lecturer/lecturerContext';
import AppContext from '../../context/app/appContext';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const AttendanceClass = (props) => {
  localStorage.setItem('attendanceClass', props.match.params.attendance_id);
  const lecturerContext = useContext(LecturerContext);
  const appContext = useContext(AppContext);
  const {
    getAttendance,
    attendanceClass,
    getAttendanceClass,
    attendance,
    createAttendanceClass,
    updateAttendanceClass,
  } = lecturerContext;
  const { courses } = appContext;

  useEffect(() => {
    getAttendance();
    getAttendanceClass(props.match.params.attendance_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCreateClass = async (data) => {
    await createAttendanceClass({ attendance_id: data });
    window.location.reload();
  };

  const onUpdateClass = async (id, data) => {
    await updateAttendanceClass(id, { active: data });
    window.location.reload();
  };

  return (
    <div className="mt-10 content">
      <div className="bg-primary-gradient py-2 px-3">
        <h3 className="text-white p-2 fw-bold">Attendance Classes</h3>
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
                      <div className="card-title">
                        {courses.map((course) => {
                          let courseId;
                          attendance.forEach((data) => {
                            if (data.id.toString() === props.match.params.attendance_id)
                              courseId = data.course_id;
                          });
                          return course.id === courseId && course.course_code + ' - ATTENDANCE';
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="card-body" >
                    {attendanceClass.length === 0 && (
                      <div>
                        <b style={{ color: 'red' }}>No Lectures Created... </b>
                      </div>
                    )}
                    {attendanceClass.length !== 0 &&
                      attendanceClass.map((data, key) => {
                        return (
                          <div key={attendance.id}> 
                            <h3>
                              Lecture {key + 1}:{' '}
                              {data.active ? (
                                <b style={{ color: 'green' }}>Active</b>
                              ) : (
                                <b style={{ color: 'red' }}>Not active</b>
                              )}{' '}
                            </h3>
                            <Link to={`/lecture/${data.id}`}>View Details</Link> .{' '}
                            {data.active ? (
                              <button onClick={() => onUpdateClass(data.id, 0)} className="btn btn-primary btn-roun">End Class</button>
                            ) : (
                              <button onClick={() => onUpdateClass(data.id, 1)} className="btn btn-primary btn-border btn-round">Start Class</button>
                            )}
                            <br />
                            <br />
                          </div>
                        );
                      })}
                    <br />
                    <button
                      className="btn btn-primary"
                      onClick={() => onCreateClass(props.match.params.attendance_id)}
                    >
                      <span><i className="flaticon-shapes"> Create a Lecture</i></span>
                      
                    </button>
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

export default AttendanceClass;
