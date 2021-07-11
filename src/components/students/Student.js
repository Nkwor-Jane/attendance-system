import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { stringToUpperCase } from '../../utils/stringModifier';

const Student = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <div className="content">
      <div className="panel-header bg-primary-gradient">
        <div className="page-inner py-5">
          <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
            <div>
              <h2 className="text-white pb-2 fw-bold">
                Hi,{' '}
                {user &&
                  `${
                    stringToUpperCase(user.user.first_name) +
                    ' ' +
                    stringToUpperCase(user.user.last_name)
                  } `}{' '}
                - {user && user.matric_no}
              </h2>
              <h5 className="text-white op-7 mb-2">
                Faculty of {user && user.faculty.faculty_name}
              </h5>
              <h5 className="text-white op-7 mb-2">
                Department of {user && user.department.department_name}
              </h5>
            </div>
            <div className="ml-md-auto py-2 py-md-0">
              <a href="/" className="btn btn-white btn-border btn-round mr-2">
                Join Class
              </a>
              <a href="/" className="btn btn-secondary btn-round">
                Mark Attendance
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="page-inner mt--5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">Class List</div>
                  <div className="card-tools">
                    <a href="/" className="btn btn-info btn-border btn-round btn-sm mr-2">
                      <span className="btn-label">
                        <i className="fa fa-pencil"></i>
                      </span>
                      Export
                    </a>
                    <a href="/" className="btn btn-info btn-border btn-round btn-sm">
                      <span className="btn-label">
                        <i className="fa fa-print"></i>
                      </span>
                      Print
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container" style={{ minHeight: '375px' }}>
                  <canvas id="statisticsChart"></canvas>
                </div>
                <div id="myChartLegend"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary">
              <div className="card-header">
                <div className="card-title">Attended</div>
                <div className="card-category">March 25 - April 02</div>
              </div>
              <div className="card-body pb-0">
                <div className="mb-4 mt-2">
                  <h1>Once</h1>
                </div>
                <div className="pull-in">
                  <canvas id="dailySalesChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-card-no-pd">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="table-responsive table-hover table-sales"></div>
                  </div>
                  <div className="col-md-6">
                    <div className="mapcontainer">
                      <div id="map-example" className="vmap"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
