import React from 'react';
import heroImage from '../images/hero.jpeg'; // Adjust the path accordingly

const Home = () => {
  return (
    <div className="container-fluid">
      {/* <div className="hero-section"> */}
      
      {/* <div className="hero-section" style={{ position: 'relative' }}></div> */}
        {/* Add your image here */}
        <img src={heroImage} className='hero-img' alt="Your Name" />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'red',
        }}>
       
        <h1 className='hero-title'>Welcome to my Portfolio</h1>
        <button className='btn btn-primary'>Download CV</button>
        <button className='btn btn-primary'>Hire Me</button>


      </div>
     </div>
  );
};

export default Home;
