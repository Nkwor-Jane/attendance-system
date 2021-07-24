import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { stringToUpperCase } from '../../utils/stringModifier';

import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logout } = authContext;


  

  return (
    <Fragment>
      <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
        {isAuthenticated && (
          <div className="container-fluid">
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">    
            <li className="nav-item dropdown hidden-caret">
              <a
                className="dropdown-toggle profile-pic"
                data-toggle="dropdown"
                href="/"
                aria-expanded="false"
              >
                <div className="avatar-sm">
                  <img
                    src={user && user.user.photo}
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg">
                        <img
                          src={user && user.user.photo}
                          alt="profile"
                          className="avatar-img rounded"
                        />
                      </div>
                      <div className="u-text">
                        <h4>
                          {user &&
                            `${
                              stringToUpperCase(user.user.first_name) +
                              ' ' +
                              stringToUpperCase(user.user.last_name)
                            } `}
                        </h4>
                        <p className="text-muted">
                          {user && `${stringToUpperCase(user.user.email)}`}
                        </p>
                        <Link to="/profile">
                          <button type="button" className="btn btn-xs btn-secondary btn-sm">
                        View Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" href="/" onClick={(e) => logout()}>
                      Logout
                    </button>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
          
        )}
        
      </nav>
    </Fragment>
  );
};

export default Navbar;
