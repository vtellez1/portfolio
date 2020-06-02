import React, {useState} from 'react';

import { Link as ReactLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import styled from 'styled-components';

const BigDiv = styled.div`
position: fixed;
top: 0;
width: 85%;
background-color: white;
`

const NavDiv = styled.div`
display:flex;
justify-content: space-between;
margin: 1.3rem 0rem;
width: 85%;
`
const LeftNav = styled.div`
display:flex;
justify-content: space-between;
width: 25%;
`

const RightNav = styled.div`
display: flex;
justify-content: space-between;
width: 40%;
`
function NavBar() {

  return (
    <BigDiv>
          
    <NavDiv>
        <LeftNav>
        <span style={{color: "#99ccff"}}><i class="fas fa-code fa-2x"></i></span>
            <ReactLink style={{color: "black", textDecoration: 'none'}} to="/"><h4>Vanessa Tellez</h4></ReactLink>
        </LeftNav>
        <RightNav>
            <ReactLink style={{color: "black", textDecoration: 'none'}} to="/resume"> Resume </ReactLink>

          <Link
            activeClass='active'
            to='projects' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}><ReactLink style={{color: "black", textDecoration: 'none'}} to="/"> Projects</ReactLink></Link>  
            
            <Link
            activeClass='active'
            to='contact' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> <ReactLink style={{color: "black", textDecoration: 'none'}} to="/">Contact Me</ReactLink></Link>
        </RightNav>

    </NavDiv>
 </BigDiv>
  );
}

export default NavBar;