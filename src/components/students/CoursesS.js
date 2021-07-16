import React from 'react'

function CoursesS() {
    return (
        <div className="mt-10 content">
        <div className="page-inner">
        <div className="row">  
        <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <div className="card-head-row">
              <div className="card-title">Courses</div>
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

export default CoursesS
