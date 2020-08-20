import React, {useState} from 'react';

import { Link as ReactLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import { BigDiv, NavDiv, Title, Icon, RightNav, LeftNav } from '../styles/NavBar.styles';

function NavBar() {

  return (
    <BigDiv>
          
    <NavDiv>
        <LeftNav>
        <Icon><i class="fas fa-code fa-2x"></i></Icon>
        <Link
            activeClass='active'
            to='aboutme' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}><ReactLink style={{color: "black", textDecoration: 'none'}} to="/"><Title>Vanessa Tellez</Title></ReactLink></Link> 
        </LeftNav>
        <RightNav>

          <Link
            activeClass='active'
            to='projects' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}><ReactLink style={{color: "black", textDecoration: 'none'}} to="/"> Projects</ReactLink></Link>  
            
            <Link
            activeClass='active'
            to='skills' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> <ReactLink style={{color: "black", textDecoration: 'none'}} to="/">Skills</ReactLink></Link>

            <Link
            activeClass='active'
            to='contact' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> <ReactLink style={{color: "black", textDecoration: 'none'}} to="/">Contact Me</ReactLink></Link>

            <ReactLink style={{color: "black", textDecoration: 'none'}} to="/resume"> Resume </ReactLink> 
        </RightNav>

    </NavDiv>
 </BigDiv>
  );
}

export default NavBar;