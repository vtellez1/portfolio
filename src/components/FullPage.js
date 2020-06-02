import React from 'react';

import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


function FullPage() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Skills/>     
      <Contact/>
    </div>
  );
}

export default FullPage;