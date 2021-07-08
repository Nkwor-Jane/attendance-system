import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="content">
      <div className="panel-header bg-primary-gradient" style={{ margin: '100px' }}>
        <div className="page-inner py-5">
          <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
            <div>
              <h2 className="text-white pb-2 fw-bold">Attendance Management System</h2>
              <h4 className="text-white op-7 mb-2">
                An Attendance Management System is web-based software application designed and
                developed for recording, tracking and storing students’ attendance in institutions.
                The proposed system uses a generated QR code which can be scanned with the mobile
                phone of students. This process does not require much action from the lecturer
                except displaying the generated QR code.
              </h4>
            </div>
          </div>
          <div className="ml-md-auto py-2 py-md-0" style={{ marginTop: '150px' }}>
            <Link to="/login" className="btn btn-white btn-border btn-round mr-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary btn-round">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
