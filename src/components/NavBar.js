import React from 'react';
import App from '../App';
import { Switch, Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const BigDiv = styled.div`
position: fixed;
top: 0;
width: 80%;
background-color: white;
`

const NavDiv = styled.div`
display:flex;
justify-content: space-between;
margin: 2rem 0rem;
`
const LeftNav = styled.div`
display:flex;
justify-content: space-between;
width: 18%;
`

const RightNav = styled.div`
display: flex;
justify-content: space-between;
width: 45%;

`
function NavBar() {
  return (
      <BigDiv>
    <NavDiv>
        <LeftNav>
        <span style={{color: "lavender"}}><i class="fas fa-code fa-2x"></i></span>
            <h4>Vanessa Tellez</h4>
        </LeftNav>
        <RightNav>
            <Link to='resume'> Resume </Link>

            <Link
            activeClass='active'
            to='aboutme' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> About Me</Link>   
            
            <Link
            activeClass='active'
            to='projects' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> Projects </Link>



            <Link
            activeClass='active'
            to='contact' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> Contact Me</Link>
        </RightNav>

    </NavDiv>
 </BigDiv>
  );
}

export default NavBar;