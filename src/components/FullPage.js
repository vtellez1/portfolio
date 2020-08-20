import React from 'react';

import Contact from './Contact';
import RightPage from './RightPage';
import LeftPage from './LeftPage';

import { MainDiv } from '../styles/FullPage.styles'

function FullPage() {
  return (
    <div className="FullPage">
      <MainDiv>
        <LeftPage/> 
        <RightPage/>      
      </MainDiv>

      <Contact/>
    </div>
  );
}

export default FullPage;