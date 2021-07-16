import React from 'react'

export default function EditL() {
    return (
    <div className="mt-10 content">
      <div className="page-inner">
        <div className="row">  
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title fw-bold">Edit My Profile</div>
                </div>
              </div>
                    <div className="card-body">
                      <div className="py-10 my-2">
                        <form>
                          <div className="form-group">
                            <label htmlFor="">Email address</label>
                            <input type="email" className="form-control"/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control"/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="faculty">Faculty</label>
                            <input type="text" className="form-control"/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="dept">Department</label>
                            <input type="text" className="form-control"/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone_no">Phone Number</label>
                            <input type="number" className="form-control"/>
                          </div>
                          <button className="btn btn-secondary m-2">Update</button>
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
