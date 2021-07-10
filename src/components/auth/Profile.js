import React, { useRef, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UserContext from '../../context/user/userContext';
import Spinner from '../layout/Spinner';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);
  const { loading, registerUser } = userContext;
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: 'all' });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    registerUser(data);
  };

  const nextPage = () => {
    alertContext.alert && alertContext.alert.type === 'success' && history.push('/login');
  };

  nextPage();

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
              {alertContext.alert && <Alert />}
              {loading ? (
                <Spinner />
              ) : (
                <Fragment>
                  <form onSubmit={handleSubmit(onSubmit)}>
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
                    <div className={`form-group ${errors.matric_no && 'has-error'}`}>
                      <label htmlFor="matricNo">Matric Number</label>
                      <input
                        type="number"
                        className="form-control"
                        aria-describedby="matricNoHelp"
                        placeholder="Enter Matric Number"
                        {...register('matric_no', {
                          required: true,
                          minLength: 9,
                        })}
                      />
                      {errors.matric_no && errors.matric_no.type === 'required' && (
                        <small className="form-text text-danger">Matric Number is required</small>
                      )}
                      {errors.matric_no && errors.matric_no.type === 'minLength' && (
                        <small className="form-text text-danger">Matric Number is not valid</small>
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
                        })}
                      />
                      {errors.phone_number && errors.phone_number.type === 'required' && (
                        <small className="form-text text-danger">Phone Number is required</small>
                      )}
                      {errors.phone_number && errors.phone_number.type === 'minLength' && (
                        <small className="form-text text-danger">Phone Number is not valid</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.email && 'has-error'}`}>
                      <label htmlFor="Email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        {...register('email', {
                          required: true,
                        })}
                      />
                      {errors.email && errors.email.type === 'required' && (
                        <small className="form-text text-danger">Email name is required</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.email && 'has-error'}`}>
                      <label htmlFor="Email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        {...register('email', {
                          required: true,
                        })}
                      />
                      {errors.email && errors.email.type === 'required' && (
                        <small className="form-text text-danger">Email name is required</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.password && 'has-error'}`}>
                      <label htmlFor="Password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        {...register('password', { required: true, minLength: 6 })}
                      />
                      {errors.password && errors.password.type === 'required' && (
                        <small className="form-text text-danger">Password is required</small>
                      )}
                      {errors.password && errors.password.type === 'minLength' && (
                        <small className="form-text text-danger">
                          Password should be 6 characters and more
                        </small>
                      )}
                    </div>
                    <div className={`form-group ${errors.confirmPassword && 'has-error'}`}>
                      <label htmlFor="exampleInputCPassword1">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputCPassword1"
                        placeholder="Confirm Password"
                        {...register('confirmPassword', {
                          required: true,
                          validate: (value) => value === password.current,
                        })}
                      />
                      {errors.confirmPassword && (
                        <small className="form-text text-danger">Passwords do not match</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.user_type && 'has-error'}`}>
                      <label htmlFor="selectFloatingLabel2">Account Type</label>
                      <select
                        className="form-control input-solid"
                        id="selectFloatingLabel2"
                        required
                        {...register('user_type', {
                          required: true,
                        })}
                      >
                        <option value="">Choose an account type</option>
                        <option value="student">Student</option>
                        <option value="lecturer">Lecturer</option>
                      </select>
                      {errors.user_type && (
                        <small className="form-text text-danger">Choose an Account type</small>
                      )}
                    </div>
                    <br />
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Create Account
                    </button>
                  </form>
                  <br />
                  <br />
                  <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link
                      to="/"
                      className="btn btn-default btn-lg"
                      role="button"
                      aria-disabled="true"
                    >
                      Home
                    </Link>

                    <Link
                      to="/login"
                      className="btn btn-secondary btn-lg"
                      role="button"
                      aria-disabled="true"
                    >
                      Login to your Account
                    </Link>
                  </p>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
