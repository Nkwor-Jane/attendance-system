import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Spinner from '../layout/Spinner';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated, loading, setLoading } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }

    if (error) {
      setAlert('Login Error, Invalid credentials', 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });
  const onSubmit = (data) => {
    setLoading();
    loginUser(data);
  };

  return (
    <div className="content">
      <div
        className="page-inner mt-5"
        style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}
      >
        <div className="row row-card-no-pd">
          <div className="card">
            <h2 style={{ textAlign: 'center', padding: '25px 40px 0px 40px' }}>
              LOGIN TO YOUR ACCOUNT!!!
            </h2>
            <div className="card-body">
              {alertContext.alerts && <Alert />}
              {loading ? (
                <Spinner />
              ) : (
                <Fragment>
                  {' '}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-group ${errors.email && 'has-error'}`}>
                      <label htmlFor="Email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        {...register('email', { required: true })}
                      />
                      {errors.email && (
                        <small className="form-text text-danger">Email name is required</small>
                      )}
                    </div>
                    <div className={`form-group ${errors.password && 'has-error'}`}>
                      <label htmlFor="Password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        {...register('password', { required: true })}
                      />
                      {errors.password && (
                        <small className="form-text text-danger">Password is required</small>
                      )}
                    </div>
                    <br />
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Login
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
                      to="/register"
                      className="btn btn-secondary btn-lg"
                      role="button"
                      aria-disabled="true"
                    >
                      Create an Account
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

export default Login;
