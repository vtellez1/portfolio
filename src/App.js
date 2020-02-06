import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
