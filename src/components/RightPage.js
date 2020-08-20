import React from 'react';

import AboutMe from './AboutMe';
import Projects from './Projects';

import { RightDiv } from "../styles/RightPage.styles"


function RightPage() {
  return (
    <RightDiv>
      <AboutMe/>
      <Projects/>  
    </RightDiv>
  );
}

export default RightPage;