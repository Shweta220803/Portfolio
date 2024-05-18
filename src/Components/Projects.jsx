import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Project 1 */}
        <h1 className='sec-heading text-center'>Projects</h1>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="project1-image.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Project 1 details go here.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary me-2">View</a>
              <a href="#" className="btn btn-secondary">Source</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="project2-image.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Project 2 details go here.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary me-2">View</a>
              <a href="#" className="btn btn-secondary">Source</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="project3-image.jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Project 3 details go here.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary me-2">View</a>
              <a href="#" className="btn btn-secondary">Source</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
