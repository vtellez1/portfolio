import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import { BigDiv, NavDiv, Title, Icon, RightNav, LeftNav } from '../styles/NavBar.styles';

function NavBar() {

  return (
    <BigDiv>
          
    <NavDiv>
        <LeftNav>
        <Icon></Icon>
        <Link
            activeClass='active'
            to='aboutme' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "black", textDecoration: 'none'}}><Title>VANESSA TELLEZ</Title></Link> 
        </LeftNav>
        
        <RightNav>        
          <Link
            activeClass='active'
            to='projects' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}>|  <i class="far fa-file-code"> Projects</i></Link>  
            
            <Link
            activeClass='active'
            to='skills' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}>|  <i class="far fa-sun">  Skills</i></Link>

            <Link
            activeClass='active'
            to='contact' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}>|  <i class="far fa-envelope"> Contact Me</i></Link>

            <Link
            activeClass='active'
            to='resume' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}>|  <i class="far fa-file"> Resume</i>  </Link> 

        </RightNav>

    </NavDiv>
 </BigDiv>
  );
}

export default NavBar;