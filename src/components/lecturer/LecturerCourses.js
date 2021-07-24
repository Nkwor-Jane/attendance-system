import React, { Component} from 'react';



class LecturerCourses extends Component {


  constructor(props) {
    super(props) 
    this.state = { 
       courses: [
          { id: 1, coursetitle: 'Engineering Maths', coursecode: 'ECE 501' },
          { id: 2, coursetitle:'Digital SIgnal Processing', coursecode: 'ECE 515'},
       ]
    }
 }


 renderTableData() {
  return this.state.courses.map((course, index) => {
     const { id, coursecode, coursetitle } = course //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{coursecode}</td>
           <td>{coursetitle}</td>
        </tr>
     )
  })
}

renderTableHeader() {
  let header = Object.keys(this.state.courses[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

  render(){


  return (
    <div className="mt-10 content">
      <div className="page-inner">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">
                  <h3 className="fw-bold">Courses</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
              <div className="chart-container" style={{ minHeight: '375px' }}>
                    <table id='students'>
                        <tbody>
                          <tr>{this.renderTableHeader()}</tr>
                          {this.renderTableData()}
                        </tbody>
                    </table>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default LecturerCourses;
