import React from 'react';

const About = () => {
  return (
    <section id="about" className="container-fluid about-sec">
      <h2 className='text-center text-white'>About Me</h2>
      <p>Write about yourself here...</p>
      {/* Add your image here */}
      <img src="./images/hero.jpeg" alt="Your Name" />
    </section>
  );
};

export default About;
