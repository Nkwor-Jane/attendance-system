import React, { useRef, useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Spinner from '../layout/Spinner';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { registerUser, error, clearErrors, isAuthenticated, loading, setLoading, registered } =
    authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }

    if (error && error.error.message.email) {
      setAlert(error.error.message.email, 'danger');
    } else if (error) {
      setAlert('Registration Failed, Please Try Again', 'danger');
      clearErrors();
    }

    if (registered) {
      props.history.push('/setup');
      setAlert('Registration Successful, Setup Profile!!!', 'success');
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, registered, props.history]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: 'all' });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    setLoading();
    registerUser(data);
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
              CREATE AN ACCOUNT!!!
            </h2>
            <div className="card-body">
              {alertContext.alerts && <Alert />}
              {loading ? (
                <Spinner />
              ) : (
                <Fragment>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-group ${errors.email && 'has-error'}`}>
                      <label htmlFor="Email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        {...register('email', {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[lasu.edu.ng]+)*$/,
                        })}
                      />
                      {errors.email && errors.email.type === 'required' && (
                        <small className="form-text text-danger">Email is required</small>
                      )}
                      {errors.email && errors.email.type === 'pattern' && (
                        <small className="form-text text-danger">
                          Must be a valid Email address and LASU email
                        </small>
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

export default Register;
