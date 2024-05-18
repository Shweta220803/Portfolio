import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h1 className='footer-title'>Shwet<span className='span-a'>A</span></h1>
            <p className='footer-p'>I am a Web Developer.</p>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Enter your email" />  
            <button className='btn btn-danger sub-btn'>Subscribe</button>
          </div>

          <div className="col-md-3">
          <h2 className='footer-col-3'>Quick Link</h2>
          <a className='quick-link' href='/'>Home</a><br/>
          <a className='quick-link' href='/about'>About</a><br />
          <a className='quick-link' href='/contact'>Contact</a>
          <br />
          <br />


          </div>
          <hr />
          <div className='row'>
          <p className='footer-p1'>© 2024 Shweta Bharti. All rights reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
