import React, { useContext, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import AppContext from '../../context/app/appContext';
import Spinner from '../layout/Spinner';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';
import ImageUpload from '../uploading/ImageUpload';
import LecturerContext from '../../context/lecturer/lecturerContext';
import AuthContext from '../../context/auth/authContext';

const Lecturer = () => {
  const appContext = useContext(AppContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const lecturerContext = useContext(LecturerContext);
  const { faculties, departments, getFaculties, getDepartments, uploadUrl } = appContext;
  const { createProfile, error } = lecturerContext;
  const { setLoading, loadUser, loading } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    getFaculties();
    getDepartments();
    if (error) {
      setAlert('Setup Failed, Please Try Again', 'danger');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });
  const onSubmit = async (data) => {
    data.photo = uploadUrl;
    data.faculty_id = data.faculty;
    data.department_id = data.department;
    setLoading();
    await createProfile(data);
    loadUser();
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
              SETUP YOUR PROFILE!!!
            </h2>
            <div className="card-body">
              {alertContext.alerts && <Alert />}
              {loading ? (
                <Spinner />
              ) : (
                <Fragment>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ImageUpload />
                    <div className={`form-group ${errors.first_name && 'has-error'}`}>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="firstNameHelp"
                        placeholder="Enter First Name"
                        {...register('first_name', {
                          required: true,
                        })}
                      />
                      {errors.first_name && errors.first_name.type === 'required' && (
                        <small className="form-text text-danger">First name is required</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.last_name && 'has-error'}`}>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="lastNameHelp"
                        placeholder="Enter Last Name"
                        {...register('last_name', {
                          required: true,
                        })}
                      />
                      {errors.last_name && errors.last_name.type === 'required' && (
                        <small className="form-text text-danger">Last name is required</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.phone_number && 'has-error'}`}>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="number"
                        className="form-control"
                        aria-describedby="phoneNumberHelp"
                        placeholder="Enter Phone Number"
                        {...register('phone_number', {
                          required: true,
                          minLength: 11,
                          maxLength: 11,
                        })}
                      />
                      {errors.phone_number && errors.phone_number.type === 'required' && (
                        <small className="form-text text-danger">Phone Number is required</small>
                      )}
                      {errors.phone_number && errors.phone_number.type === 'minLength' && (
                        <small className="form-text text-danger">Phone Number is not valid</small>
                      )}
                      {errors.phone_number && errors.phone_number.type === 'maxLength' && (
                        <small className="form-text text-danger">Phone Number is not valid</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.gender && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Gender</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('gender', {
                          required: true,
                        })}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {errors.gender && (
                        <small className="form-text text-danger">Select Gender</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.title && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Title</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('title', {
                          required: true,
                        })}
                      >
                        <option value="">Select Title</option>
                        <option value="dr">Dr.</option>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="engr">Engr.</option>
                      </select>
                      {errors.level && (
                        <small className="form-text text-danger">Select Title</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.faculty && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Faculty</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('faculty', {
                          required: true,
                        })}
                      >
                        <option value="">Choose Faculty</option>
                        {faculties.map((faculty) => {
                          return (
                            <option value={faculty.id} key={faculty.id}>
                              {faculty.faculty_name}
                            </option>
                          );
                        })}
                      </select>
                      {errors.faculty && (
                        <small className="form-text text-danger">Choose Faculty</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.department && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Department</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('department', {
                          required: true,
                        })}
                      >
                        <option value="">Choose Department</option>
                        {departments.map((department) => {
                          return (
                            <option value={department.id} key={department.id}>
                              {department.department_name}
                            </option>
                          );
                        })}
                      </select>
                      {errors.department && (
                        <small className="form-text text-danger">Choose Department</small>
                      )}
                    </div>
                    <br />
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Create Profile
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

export default Lecturer;
