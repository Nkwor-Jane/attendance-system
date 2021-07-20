import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { stringToUpperCase } from '../../utils/stringModifier';

const Lecturer = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <div>
      <div className="content">
        <div className="panel-header bg-primary-gradient">
          <div className="page-inner py-5">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
              <div className=" py-4">
                <h2 className="text-white pb-2 fw-bold">
                  Hi,{' '}
                  {user &&
                    `${
                      stringToUpperCase(user.title) +
                      '. ' +
                      stringToUpperCase(user.user.first_name) +
                      ' ' +
                      stringToUpperCase(user.user.last_name)
                    } `}{' '}
                </h2>
                <h5 className="text-white op-7 mb-2">
                  Faculty of {user && user.faculty.faculty_name}
                </h5>
                <h5 className="text-white op-7 mb-2">
                  Department of {user && user.department.department_name}
                </h5>
              </div>
              <div className="ml-md-auto py-2 py-md-0">
                <button
                  className="btn btn-white btn-border btn-round mr-2"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Create Class
                </button>

                {/* Modal  */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Create Class
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">the QR code</div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
            {/* <div className="col-md-4">
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
          </div> */}
          </div>
          {/* <div className="row row-card-no-pd">
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
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Lecturer;
