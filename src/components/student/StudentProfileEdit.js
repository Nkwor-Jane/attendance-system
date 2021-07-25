import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import AuthContext from '../../context/auth/authContext';
// import { stringToUpperCase } from '../../utils/stringModifier';


import StudentContext from '../../context/student/studentContext';

const StudentProfileEdit = () =>{
  // const { user } = authContext;
  // const authContext = useContext(AuthContext);

  const studentContext = useContext(StudentContext);
  const { updateProfile } = studentContext;

  const { register, handleSubmit } = useForm({ mode: 'all' });
  const onSubmit = async (data) => {
    await updateProfile(data);
    console.log(data);
  };
  return (
    <div className="mt-10 content">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" style={{marginLeft: '48rem'}}>
	    Edit Profile
      </button>

      {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Edit My Profile</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                        <div className="py-10 my-2">
                          <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                  <label htmlFor="">Email address</label>
                                  <input type="email" className="form-control" {...register('email')}
                                    // value={user &&  `${stringToUpperCase(user.user.email)}`}
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="">First Name</label>
                                  <input type="text" className="form-control" {...register('first_name')} />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="">Last Name</label>
                                  <input type="text" className="form-control" {...register('last_name')} />
                                </div>
                            <div className="form-group">
                              <label htmlFor="faculty">Faculty</label>
                              <input type="text" className="form-control" {...register('faculty')} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="dept">Department</label>
                              <input type="text" className="form-control" {...register('department')} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="phone_no">Phone Number</label>
                              <input
                                type="number"
                                className="form-control"
                                {...register('phone_number', {
                                  minLength: 11,
                                  maxLength: 11,
                                })}
                              />
                            </div>
                          </form>
                  </div>
                </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default StudentProfileEdit;
