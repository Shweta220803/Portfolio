import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <h1 className='sec-heading text-center'>Skills</h1>
        {/* First Column */}
        <div className="col-md-6">
          <h2>Technical Skills</h2>
          <div className="progress mb-3">
            <div className="progress-bar bg-primary progress-bar1" role="progressbar" style={{ width: '75%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">HTML</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          {/* Add more progress bars as needed */}
        </div>

        {/* Second Column */}
        <div className="col-md-6">
          <h2>Soft Skills</h2>
          <div className="progress mb-3">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          {/* Add more progress bars as needed */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

