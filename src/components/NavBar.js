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

@media(max-width:500px){
  flex-direction: column;
  align-items: center;
  width: 95%;
}
`

const Title = styled.h4`
@media(max-width:500px){
  font-size: 1.2rem;
  padding-left: .7rem;
}
`

const Icon = styled.span`
color: #99ccff;

@media(max-width:500px){
  font-size: .8rem;
}
`
const LeftNav = styled.div`
display:flex;
justify-content: space-between;
width: 25%;

@media(max-width:500px){
  justify-content: center;
  width: 95%;
}
`

const RightNav = styled.div`
display: flex;
justify-content: space-between;
width: 40%;

@media(max-width:500px){
  flex-direction: column;
  width: 95%;
}
`
function NavBar() {

  return (
    <BigDiv>
          
    <NavDiv>
        <LeftNav>
        <Icon><i class="fas fa-code fa-2x"></i></Icon>
            <ReactLink style={{color: "black", textDecoration: 'none'}} to="/"><Title>Vanessa Tellez</Title></ReactLink>
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
        </RightNav>

    </NavDiv>
 </BigDiv>
  );
}

export default NavBar;