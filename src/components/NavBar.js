import React from 'react';
import { Link } from 'react-scroll';

import { BigDiv, NavDiv, Title, Icon, RightNav, LeftNav, HamburgerMenu} from '../styles/NavBar.styles';

function NavBar() {

  const hamburgerFunction = e => {
    e.preventDefault();
    var x = document.getElementById("myLinks");
    x.style.display === "block" ? x.style.display = "none" : x.style.display = "block";
  }

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

        <RightNav id="myLinks">                
          <Link
            activeClass='active'
            to='projects' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}> |  <i class="far fa-file-code"> Projects</i></Link>  
            
            <Link
            activeClass='active'
            to='skills' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}> |  <i class="far fa-sun">  Skills</i></Link>

            <Link
            activeClass='active'
            to='resume' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}> |  <i class="far fa-file"> Resume</i>  </Link> 

            <Link
            activeClass='active'
            to='contact' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500} style={{color: "#484848", textDecoration: 'none'}}> |  <i class="far fa-envelope"> Contact Me</i></Link>
        </RightNav>

        <HamburgerMenu onClick={hamburgerFunction}>
        <i class="fas fa-bars"></i>
        </HamburgerMenu>

    </NavDiv>
 </BigDiv>
  );
}

export default NavBar;