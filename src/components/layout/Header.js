import React, { Fragment, useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DefaultSidebar from './DefaultSidebar';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';



const Header = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <div className="main-header ">
      <div className="logo-header" data-background-color="blue">
        {isAuthenticated && (
          <Link to="/" className="logo">
            <b style={{ color: 'white', fontSize: '35px' }}>A.M.S</b>
          </Link>
        )}
        {isAuthenticated && (
              <Fragment>
                    {/* <div className="burger">
                        <div className="span">
                          
                        </div>
                        <div className="span">
                          
                        </div>
                        <div className="span">
                          
                        </div>
                    </div> */}

                  <button
                    className="navbar-toggler sidenav-toggler ml-auto"
                    type="button"
                    data-toggle="collapse" 
                    data-target="collapse" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="icon-menu"  ></i>
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
                   {/* <div className="collapse navbar-collapse">
                    <button className="btn btn-toggle">
                      <i className="icon-menu"></i>
                    </button>   
                  </div> */}
            </Fragment>
        )}
      </div>
      <Navbar />   
      {isAuthenticated ? <Sidebar /> : <DefaultSidebar />}
    </div>
  );
};
export default Header;
