import React, {useContext} from 'react'
import AuthContext from '../../context/auth/authContext';
import {stringToUpperCase} from '../../utils/stringModifier';

const ProfileLecturer = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
    return (
      <div className="mt-10 content">
      <div className="page-inner">
      <div className="row">  
      <div className="col-md-12">
      <div className="card " style={{width: '100%'}}>
        <div className="card-header">
          <div className="card-head-row">
            <h2 className="card-title fw-bold"> My Profile</h2>
          </div>
        </div>
        <div className="card-body p-5">
          <div className="py-10 my-2">
                <div className="avatar-sm" style={{width: '10rem', height: '10rem', float: 'right'}}>
                      <img
                        src={user && user.user.photo}
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
              <div>
                <p className="op-5">Name</p>
                  <h5 className="text-info op-7 mb-2 fw-bold">
                    {user &&
                      `${
                        stringToUpperCase(user.user.first_name) +
                        ' ' +
                        stringToUpperCase(user.user.last_name)
                      } `}{' '}
                  </h5>
              </div>
              <div>
                  <p className=" op-5">Profession</p>
                  <h5 className="text-info op-7 mb-2 fw-bold">
                  <span className="user-level">
                    {user && `${stringToUpperCase(user.user.user_type)}`}
                  </span>
                  </h5>
              </div>
              <div>
                  <p className=" op-5">Faculty</p>
                  <h5 className="text-info op-7 mb-2 fw-bold">
                    Faculty of {user && user.faculty.faculty_name}
                  </h5>
              </div>
              <div>
                  <p className=" op-5">Department</p>
                  <h5 className="text-info op-7 mb-2 fw-bold">
                    Department of {user && user.department.department_name}
                  </h5>
              </div>
              <div>
                  <p className=" op-5">Email</p>
                  <h5 className="text-info op-7 mb-2 fw-bold">
                  <span className="user-level">
                    {user && `${stringToUpperCase(user.user.email)}`}
                  </span>
                  </h5>
              </div>
              <div>
                  <p className=" op-5">Phone No.</p>
                  <h5 className="text-info op-7 mb-2 fw-bold">
                  <span className="user-level">
                    {user && `${stringToUpperCase(user.user.phone_number)}`}
                  </span>
                  </h5>
              </div>
              </div>
        </div>
      </div>
    </div>
      </div>
      </div>
  </div>
    )
}

export default ProfileLecturer;
