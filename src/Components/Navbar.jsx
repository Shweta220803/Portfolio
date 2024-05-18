import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top back-ground">
      <div className="container">
        {/* <h2 className="p-title">Portfolio</h2> */}
        <div className="navbar-brand-container">
          <div className="navbar-brand-animation p-title">Portfolio</div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-items">
          <Link className="nav-item">
              <a className="nav-link nav-active" href="#home">Home</a>
            </Link>
            <Link className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </Link>
            <Link className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </Link>
            <Link className="nav-item">
              <a className="nav-link" href="#projects">Portfolio</a>
            </Link>

            <Link className="nav-item">
              <a className="nav-link " href="#contact">Contact</a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
</>

  );
};

export default Navbar;
