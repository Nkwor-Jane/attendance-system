import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { stringToUpperCase } from '../../utils/stringModifier';




const Sidebar = (props) => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;
  return (
    <div className="sidebar sidebar-style-2">
      			<div className="sidebar-background"></div>
      <div className="">
        <div className="navigation">
          <div className="user">
            <div className="avatar-sm float-left mr-2">
              <img src={user && user.user.photo} alt="..." className="avatar-img rounded-circle" />
            </div>
            <div className="info">
              <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                <span>
                  {user &&
                    `${
                      stringToUpperCase(user.user.first_name) +
                      ' ' +
                      stringToUpperCase(user.user.last_name)
                    } `}
                  <span className="user-level">
                    {user && `${stringToUpperCase(user.user.user_type)}`}
                  </span>
                  <span className="caret"></span>
                </span>
              </a>
              <div className="clearfix"></div>

              <div className="collapse in" id="collapseExample">
                <ul className="nav nav-info">
                  <li className="nav-item">
                    <Link to="/profile">
                      <span className="link-collapse">My Profile</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/edit">
                    <span className="link-collapse">Edit Profile</span>
                  </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/settings">
                      <span className="link-collapse">Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav nav-primary" id="collapse">
            <li className="nav-item active">
                <i className="fas fa-home"></i>
                <Link to="/dashboard"><p>Dashboard</p></Link>
            </li>
            <li className="nav-item">
                <i className="fas fa-th-list"></i>
                <Link to="/attendance"><p>Attendance</p></Link>
            </li>
            <li className="nav-item">
                <i className="fas fa-pen-square"></i>
                 <Link to="/courses"><p>Courses</p></Link>
            </li>
            <br />
            <br />
            <br />
            <li className="mx-4 mt-2">
              <button className="btn btn-primary btn-block" onClick={(e) => logout()}>
                <span className="btn-label mr-2">
                  {' '}
                  <i className="fas fa-mouse-pointer"></i>{' '}
                </span>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
