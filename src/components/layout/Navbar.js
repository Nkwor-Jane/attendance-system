import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { stringToUpperCase } from '../../utils/stringModifier';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logout } = authContext;

  return (
    <Fragment>
      <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
        {isAuthenticated && (
          <div className="container-fluid">
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              <li className="nav-item toggle-nav-search hidden-caret">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#search-nav"
                  role="button"
                  aria-expanded="false"
                  aria-controls="search-nav"
                >
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="notifDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell"></i>
                  <span className="notification">4</span>
                </a>
                <ul
                  className="dropdown-menu notif-box animated fadeIn"
                  aria-labelledby="notifDropdown"
                >
                  <li>
                    <div className="dropdown-title">You have 4 new notification</div>
                  </li>
                  <li>
                    <div className="notif-scroll scrollbar-outer">
                      <div className="notif-center">
                        <a href="/">
                          <div className="notif-icon notif-primary">
                            {' '}
                            <i className="fa fa-user-plus"></i>{' '}
                          </div>
                          <div className="notif-content">
                            <span className="block">New user registered</span>
                            <span className="time">5 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-icon notif-success">
                            {' '}
                            <i className="fa fa-comment"></i>{' '}
                          </div>
                          <div className="notif-content">
                            <span className="block">Rahmad commented on Admin</span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-img">
                            <img src="../assets/img/profile2.jpg" alt="Img Profile" />
                          </div>
                          <div className="notif-content">
                            <span className="block">Reza send messages to you</span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-icon notif-danger">
                            {' '}
                            <i className="fa fa-heart"></i>{' '}
                          </div>
                          <div className="notif-content">
                            <span className="block">Farrah liked Admin</span>
                            <span className="time">17 minutes ago</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="/">
                      See all notifications<i className="fa fa-angle-right"></i>{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a className="nav-link" data-toggle="dropdown" href="/" aria-expanded="false">
                  <i className="fas fa-layer-group"></i>
                </a>
                <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                  <div className="quick-actions-header">
                    <span className="title mb-1">Quick Actions</span>
                    <span className="subtitle op-8">Shortcuts</span>
                  </div>
                  <div className="quick-actions-scroll scrollbar-outer">
                    <div className="quick-actions-items">
                      <div className="row m-0">
                        <a className="col-6 col-md-4 p-0" href="/">
                          <div className="quick-actions-item">
                            <i className="flaticon-file-1"></i>
                            <span className="text">Generated Report</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="/">
                          <div className="quick-actions-item">
                            <i className="flaticon-database"></i>
                            <span className="text">Create New Database</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="/">
                          <div className="quick-actions-item">
                            <i className="flaticon-pen"></i>
                            <span className="text">Create New Post</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="/">
                          <div className="quick-actions-item">
                            <i className="flaticon-interface-1"></i>
                            <span className="text">Create New Task</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="/">
                          <div className="quick-actions-item">
                            <i className="flaticon-list"></i>
                            <span className="text">Completed Tasks</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="/">
                          <div className="quick-actions-item">
                            <i className="flaticon-file"></i>
                            <span className="text">Create New Invoice</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
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
                          <a href="/" className="btn btn-xs btn-secondary btn-sm">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/">
                        My Profile
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/">
                        Account Setting
                      </a>
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
