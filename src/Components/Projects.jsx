import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import randomImage from '../images/random.jpeg'; 
import quizImage from '../images/quiz.jpeg'; 
import PortfolioImage from '../images/portfolio.jpeg'; 




const Projects = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
      <h1 className='sec-heading text-center'>Projects</h1>

              {/* Project 1 */}
          <div className="col-md-4 mb-4">
          <div className="card">
            <img src={PortfolioImage} className="card-img-top" alt="Project 1" height="250px" />
            <div className="card-body">
              <h5 className="card-title">My Portfolio web application</h5>
              <p className="card-text">My personal portfolio is created by using react and bootstrap with the components of projects skills and many more. </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/Shweta220803/Portfolio.git" className="btn btn-primary btn1">View Source</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={randomImage} className="card-img-top" alt="Project 2" height="230px" />
            <div className="card-body">
              <h5 className="card-title">Random Password Generator</h5>
              <p className="card-text">Random Password Generator react app that generate random password for users combination of using uppercase letter , lowercase letter, digits, and special characters.</p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/Shweta220803/Password_Generator.git" className="btn btn-primary btn2">View Source</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={quizImage} className="card-img-top" alt="Project 3"  height="235px" />
            <div className="card-body">
              <h5 className="card-title">Quiz App</h5>
              <p className="card-text">Quiz app using react for the users they can attempt quiz and after submitting also can check result</p>>
            </div>
            <div className="card-footer">
              <a href="https://github.com/Shweta220803/Quiz-App.git" className="btn btn-primary btn3">View Source</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
