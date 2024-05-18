import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import ParticleComponent from './Components/Particles/Partical';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
  return (
    <Router>
    <Navbar />

    <Routes>

      <Route  index path='/' element={<Home />}/>
      <Route  path='/about' element={<About />}/>
      <Route  path='/projects' element={<Projects />}/>
      <Route  path='/skills' element={<Skills />}/>
      <Route  path='/contact' element={<Contact />}/>

    </Routes>
    <Footer />



      </Router>

  );
};

export default App;
