import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../images/banner1.jpeg'; 
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';


const Home = () => {
  return (
    <div className="container-fluid mt-5">
    <img src={heroImage} className='hero-img' alt="Your Name" />
   <div className='hero-content'>
    <h1 className='hero-title'>Welcome to my Portfolio</h1>
         <h3 className='name-sec'>Hii, I am <span className='name-sec1'>Shweta Bharti</span></h3>
         <h2 className='job-title'>Web Developer</h2> 
      
        <p className='home-para'>React Developer and also  working on MERN Stack. Programming Language Java, C++, C.<br/> Knowledge of Github and Git Version Control.</p>
        <br></br>
              <button className='btn btn-primary btn2'>Download Resume</button>
              <button className='btn btn-primary btn2'>Hire Me Now!</button>



    </div>
    <About />
      <Projects />
      <Skills />
      <Contact />

    </div>
  );
};

export default Home;

