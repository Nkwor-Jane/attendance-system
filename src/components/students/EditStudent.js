import React,{useContext} from 'react';
import { useForm } from 'react-hook-form';

import StudentContext from '../../context/student/studentContext';



const EditStudent = () => {
  const studentContext = useContext(StudentContext);
  const { updateProfile } = studentContext;



    const {register, handleSubmit} = useForm({ mode: 'all' });
    const onSubmit = async (data) => {
      await updateProfile(data);
      console.log(data)
    };
  
    return (
    <div className="mt-10 content">
      <div className="page-inner">
        <div className="row">  
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title fw-bold">Edit My Profile</div>
                </div>
              </div>
                    <div className="card-body">
                      <div className="py-10 my-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-group">
                            <label htmlFor="">Email address</label>
                            <input type="email" className="form-control"
                            {...register('email')}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control"
                              {...register('first_name')}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" 
                              {...register('last_name')}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="faculty">Faculty</label>
                            <input type="text" className="form-control"
                              {...register('faculty')}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="dept">Department</label>
                            <input type="text" className="form-control"
                              {...register('department')}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone_no">Phone Number</label>
                            <input type="number" className="form-control"
                              {...register('phone_number', {
                                minLength: 11,
                                maxLength: 11,
                              })}
                            />
                          </div>
                          <button className="btn btn-secondary m-2"  type="submit">Update</button>
                        </form>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}




export default  EditStudent;
