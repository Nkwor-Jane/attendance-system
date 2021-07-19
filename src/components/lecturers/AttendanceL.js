import React from 'react'

function AttendanceL() {
    return (
        <div className="mt-10 content">
            <div className="bg-primary-gradient py-2 px-3">
            <h3 className="text-white p-2 fw-bold">Attendance Records</h3>
            </div>
            <div className="page-inner ">
        <div className="row">  
        <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="card-head-row">
              <div className="card-title">Class List</div>
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
        </div>
        </div>
        </div>
    )
}

export default AttendanceL
