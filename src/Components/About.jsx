import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../images/about.jpeg'; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const About = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <h1 className='sec-heading text-center'>About</h1>
        <div className="col-md-6">
          <img src={aboutImage} className='about-img' alt="Your Name" />

        </div>
        <div className="col-md-6">
          <h2 className='about-title'>About Me</h2>
          <p className='about-p'>
          Hii!, My name is Shweta Bharti. I am an enthusiastic and self-motivated, and dedicated to achieving my career goals.currently, I am in the third year of my BTech program in Computer Science & Engineering at DBUU, Dehradun. My passion lies in web development, and I have acquired proficiency in technologies such as HTML, CSS, JavaScript, and React. Moreover, I am actively engaged in enhancing my skills by working on MERN stack projects and solving problems related to Data Structures and Algorithms.

</p>
<br /> 
<a href='https://linkedin.com/in/shweta-bharti-48b850259/'>         
 <FaLinkedin  className='fa-linkedin'/>
 </a>
 <a href='https://github.com/Shweta220803'>
 <FaGithub  className='fa-github'/>

 </a>

<br />
<br />

          <button className='btn btn-primary btn-about'>Read More</button>

        </div>
        <div className='row'>

        </div>
      </div>
    </div>
  );
};

export default About;
