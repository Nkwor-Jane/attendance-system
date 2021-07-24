import React, { Component} from 'react'


class StudentAttendance extends Component {


  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       courses: [
          { id: 1, coursecode: 'ECE 501', percentage : 50},
          { id: 2,  coursecode: 'BUL 507', percentage : 70},
          { id: 3, coursecode: 'ECE 507', percentage : 70},
          { id: 4, coursecode: 'ECE 509', percentage : 50},
          { id: 5, coursecode: 'ECE 513', percentage : 70},
          { id: 6, coursecode: 'ECE 517', percentage : 70},
          { id: 7, coursecode: 'ECE 521', percentage : 70},
          { id: 8, coursecode: 'ECE 519', percentage : 50},
    
       ]
    }
 }


 renderTableData() {
  return this.state.courses.map((course, index) => {
     const { id, coursecode, percentage } = course //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{coursecode}</td>
           <td>{percentage}</td>
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
                  <h3 className="fw-bold">Attendance Records</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container" style={{ minHeight: '375px' }}>
                    <div className="table table-head-bg-success mb-3">
                    <table id='students'>
                        <tbody>
                          <tr>{this.renderTableHeader()}</tr>
                          {this.renderTableData()}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div id="myChartLegend"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default StudentAttendance;
