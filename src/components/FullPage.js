import React from 'react';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


function FullPage() {
  return (
    <div className="App">
      <AboutMe/>
      <Projects/>
      <Skills/>     
      <Contact/>
    </div>
  );
}

export default FullPage;