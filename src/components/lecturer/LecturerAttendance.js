import React, { Component} from 'react'


class LecturerAttendance extends Component {


  constructor(props) {
    super(props)
    this.state = { 
       courses: [
          { id: 1, matricno: 150211121, studentname: 'Peter Godwin', percentage : 50},
          { id: 2, matricno: 150211122, studentname: 'Omolara Kemi', percentage : 70},
          { id: 3, matricno: 150211123, studentname: 'Nkwor Jane', percentage : 70},
          { id: 4, matricno: 150211124, studentname: 'Victor Issah', percentage : 50},
          { id: 5, matricno: 150211125, studentname: 'Aisha Ola', percentage : 70},
          { id: 6, matricno: 150211126, studentname: 'Mercy Chukwudi', percentage : 70},
          { id: 7, matricno: 150211127, studentname: 'Hassan Mohammed', percentage : 70},
          { id: 8, matricno: 150211128, studentname: 'Janet Chisom', percentage : 50},
    
       ]
    }
 }


 renderTableData() {
  return this.state.courses.map((course, index) => {
     const { id, matricno, studentname, percentage } = course //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{matricno}</td>
           <td>{studentname}</td>
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

export default LecturerAttendance;
