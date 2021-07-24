import React, { Component} from 'react'


class StudentCourses extends Component {


  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       courses: [
          { id: 1, coursetitle: 'Engineering Maths', coursecode: 'ECE 501' },
          { id: 2, coursetitle:'Law for Engineers', coursecode: 'BUL 507'},
          { id: 3, coursetitle: 'Control Engineering', coursecode: 'ECE 507' },
          { id: 4, coursetitle: 'Reliability and Maintainability', coursecode:  'ECE 509'},
          { id: 5, coursetitle: 'Optic Fiber Communication', coursecode: 'ECE 513' },
          { id: 6, coursetitle:'Power Electronics', coursecode: 'ECE 517'},
          { id: 7, coursetitle: 'Microwave Engineering', coursecode: 'ECE 521' },
          { id: 8, coursetitle: 'Software Engineering', coursecode:  'ECE 519'}
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

export default StudentCourses;
