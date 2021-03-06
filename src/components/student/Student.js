import React, { useContext, useEffect, useState, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import { stringToUpperCase } from '../../utils/stringModifier';
import StudentContext from '../../context/student/studentContext';
import Spinner from '../layout/Spinner';
import QrCode from '../../utils/qrScan';

const Student = () => {
  const authContext = useContext(AuthContext);
  const studentContext = useContext(StudentContext);
  const { getAttendanceClass, attendanceList, loading } = studentContext;
  const { user } = authContext;

  useEffect(() => {
    getAttendanceClass();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [classStatus, setClassStatus] = useState(null);

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
              {/* <button
                className="btn btn-white btn-border btn-round mr-2"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Join Class
              </button> */}
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
                        Join class
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
                    <div className="modal-body">
                      the scanning stuff
                      <p></p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Scan to Join
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
                    {/* <a href="/" className="btn btn-info btn-border btn-round btn-sm mr-2">
                      <span className="btn-label">
                        <i className="fa fa-pencil"></i>
                      </span>
                      Export
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="card-body">
                {attendanceList === 'loading' ? (
                  <Spinner />
                ) : attendanceList.length === 0 ? (
                  <b>No Active Class at the moment</b>
                ) : (
                  <div>
                    {attendanceList.map((attendance) => {
                      return (
                        <span>
                          <ul>
                            <li>
                              <b>{attendance.course_code}</b> -{' '}
                              <b style={{ color: 'green' }}>On Going</b> ({' '}
                              {attendance.joined ? (
                                <b>Joined</b>
                              ) : (
                                <b style={{ color: 'red' }}>Not Joined</b>
                              )}{' '}
                              )
                            </li>
                          </ul>
                        </span>
                      );
                    })}
                    To Join any of the above class(es) click 'Join a Class' and place the QR code
                    from lecturer, on your camera
                    <br />
                    <br />
                    {!classStatus && (
                      <Fragment>
                        <button
                          onClick={() => setClassStatus(1)}
                          className="btn btn-default btn-lg"
                        >
                          JOIN A CLASS
                        </button>
                      </Fragment>
                    )}
                    {classStatus && loading ? (
                      <Spinner />
                    ) : (
                      classStatus && (
                        <Fragment>
                          <br />
                          <QrCode />
                          <br />
                          <button onClick={() => setClassStatus(null)}>Close QR</button>
                        </Fragment>
                      )
                    )}
                  </div>
                )}
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
  );
};

export default Student;
