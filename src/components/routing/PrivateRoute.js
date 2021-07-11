import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, token, userType, loadUser } = authContext;
  useEffect(() => {
    if (!isAuthenticated) loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  return (
    <Route
      {...rest}
      render={(props) =>
        !token && !userType ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
