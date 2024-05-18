import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
      <h1 className='sec-heading text-center'>Skills</h1>
        {/* First Column */}
        <div className="col-md-6">
          <h2>Technical Skills</h2>
          <div className="progress mb-3">
            <div className="progress-bar bg-primary progress-bar1" role="progressbar" style={{ width: '90%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">HTML & CSS</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-success progress-bar1" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-primary progress-bar1" role="progressbar" style={{ width: '80%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">ReactJS</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-success progress-bar1" role="progressbar" style={{ width: '70%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">MERN</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-primary progress-bar1" role="progressbar" style={{ width: '80%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">JAVA</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-success progress-bar1" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">MySQL</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-success progress-bar1" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Git</div>
          </div>


          {/* Add more progress bars as needed */}
        </div>

        {/* Second Column */}
        <div className="col-md-6">
          <h2>Soft Skills</h2>
          <div className="progress mb-3">
            <div className="progress-bar bg-warning progress-bar1" role="progressbar" style={{ width: '70%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Communication</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Teamwork</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-warning progress-bar1" role="progressbar" style={{ width: '90%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Time Management</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Dedication</div>
          </div>          
          <div className="progress mb-3">
            <div className="progress-bar bg-warning progress-bar1" role="progressbar" style={{ width: '90%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Adaptability</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;

