import React, { useContext, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../context/auth/authContext';
import AppContext from '../../context/app/appContext';
import Spinner from '../layout/Spinner';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';
import LecturerContext from '../../context/lecturer/lecturerContext';

const AttendanceCreate = (props) => {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);
  const alertContext = useContext(AlertContext);
  const lecturerContext = useContext(LecturerContext);
  const { courses, success, setSuccess } = appContext;
  const { createAttendance, error } = lecturerContext;
  const { setLoading, loading, userType, removeLoading } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (userType !== 'lecturer') props.history.push('/dashboard');
    if (success) {
      if (error && error.error && error.error.message) setAlert(error.error.message, 'danger');
      else if (error) {
        setAlert('Failed to create Attendance, Try again', 'danger');
      } else {
        props.history.push('/dashboard');
      }
      setSuccess(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType, props.history, error, success]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    courses.forEach((course) => {
      if (data.course === course.id.toString()) {
        data.faculty_id = course.faculty_id;
        data.department_id = course.department_id;
        data.course_id = data.course;
      }
    });
    setLoading();
    await createAttendance(data);
    removeLoading();
    setSuccess(true);
  };

  return (
    <div className="content">
      <div
        className="page-inner mt-5"
        style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}
      >
        <div className="row row-card-no-pd">
          <div className="card">
            <h2 style={{ textAlign: 'center', padding: '25px 50px 0px 50px' }}>
              CREATE ATTENDANCE!!!
            </h2>
            <div className="card-body">
              {alertContext.alerts && <Alert />}
              {loading ? (
                <Spinner />
              ) : (
                <Fragment>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-group ${errors.academic_session && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Academic Session</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('academic_session', {
                          required: true,
                        })}
                      >
                        <option value="">Select Session</option>
                        <option value="2019/2020">2019/2020</option>
                        <option value="2020/2021">2020/2021</option>
                        <option value="2021/2022">2021/2022</option>
                        <option value="2022/2023">2022/2023</option>
                      </select>
                      {errors.academic_session && (
                        <small className="form-text text-danger">Select Session</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.semester && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Semester</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('semester', {
                          required: true,
                        })}
                      >
                        <option value="">Select Semester</option>
                        <option value="Harmattan">Harmattan</option>
                        <option value="Rain">Rain</option>
                      </select>
                      {errors.semester && (
                        <small className="form-text text-danger">Select Semester</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.course && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Course</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('course', {
                          required: true,
                        })}
                      >
                        <option value="">Choose Course</option>
                        {courses.map((course) => {
                          return (
                            <option value={course.id} key={course.id}>
                              {course.course_code}
                            </option>
                          );
                        })}
                      </select>
                      {errors.course && (
                        <small className="form-text text-danger">Choose Course</small>
                      )}
                    </div>
                    <br />
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Create Attendance
                    </button>
                  </form>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCreate;
