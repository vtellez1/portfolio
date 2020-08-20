import React from 'react';

import Skills from './Skills';
import InfoBox from './InfoBox';

import { LeftDiv } from '../styles/LeftPage.styles'
import Resume from './Resume';


function LeftPage() {
  return (
    <LeftDiv>
        <InfoBox/>
        <Skills/>   
        <Resume/>  
    </LeftDiv>
  );
}

export default LeftPage;