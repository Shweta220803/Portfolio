import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
