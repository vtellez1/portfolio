import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


function FullPage() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Projects/>      
      <AboutMe/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default FullPage;