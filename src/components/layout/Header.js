import React, { Fragment, useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserContext from '../../context/user/userContext';
import DefaultSidebar from './DefaultSidebar';

const Header = () => {
  const userContext = useContext(UserContext);
  const { accessToken } = userContext;

  return (
    <div className="main-header">
      <div className="logo-header" data-background-color="blue">
        {accessToken && (
          <a href="index.html" className="logo">
            <b style={{ color: 'white', fontSize: '35px' }}>A.M.S</b>
          </a>
        )}
        {accessToken && (
          <Fragment>
            <button
              className="navbar-toggler sidenav-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="icon-menu"></i>
              </span>
            </button>
            <button className="topbar-toggler more">
              <i className="icon-options-vertical"></i>
            </button>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="icon-menu"></i>
              </button>
            </div>
          </Fragment>
        )}
      </div>
      <Navbar />
      {accessToken ? <Sidebar /> : <DefaultSidebar />}
    </div>
  );
};
export default Header;
