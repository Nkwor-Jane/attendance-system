import React, { Fragment, useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DefaultSidebar from './DefaultSidebar';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <div className="main-header">
      <div className="logo-header" data-background-color="blue">
        {isAuthenticated && (
          <Link to="/" className="logo">
            <b style={{ color: 'white', fontSize: '35px' }}>A.M.S</b>
          </Link>
        )}
        {isAuthenticated && (
              <Fragment>
                  <button
                    className="navbar-toggler sidenav-toggler ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#switch"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    aria-controls="switch"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="icon-menu"></i>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="switch">
                    <button className="btn btn-toggle toggle-sidebar">
                      <i className="icon-menu"></i>
                    </button>
                  </div>
            
            </Fragment>
        )}
      </div>
      <Navbar />
      {isAuthenticated ? <Sidebar /> : <DefaultSidebar />}
    </div>
  );
};
export default Header;
