import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top back-ground">
      <div className="container-fluid">
        <div className="navbar-brand-container">
          <div className="navbar-brand-animation p-title">Portfolio</div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-items">
          <Link className="nav-item">
              <a className="nav-link nav-active" href="/">Home</a>
            </Link>
            <Link className="nav-item">
              <a className="nav-link" href="/about">About Me</a>
            </Link>
            <Link className="nav-item">
              <a className="nav-link" href="/skills">Skills</a>
            </Link>
            <Link className="nav-item">
              <a className="nav-link" href="/projects">Portfolio</a>
            </Link>

            <Link className="nav-item">
              <a className="nav-link " href="/contact">Contact</a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
</>

  );
};

export default Navbar;
