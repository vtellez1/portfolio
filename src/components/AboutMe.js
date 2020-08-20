import React from 'react';
import { Link } from 'react-scroll';

import { BigDiv, AboutDiv, AboutText, Title, Button, CardImg, AboutTop } from '../styles/AboutMe.styles';

import carolina_mountains from '../images/carolina_mountains.jpeg';

function AboutMe(){
  return (
    <BigDiv name="aboutme">

      <AboutDiv>
        <AboutText>
        <AboutTop>
         <p>Hi, my name is <Title>Vanessa Tellez.</Title> I am a full-stack web developer based in <p><span style={{color: "crimson"}}><i class="fas fa-map-pin"></i></span> Charlotte, NC</p></p>
        </AboutTop> 
         <p>I am passionate about continuous learning and enjoy problem solving. I am excited to apply my skills to real world problems and applications.</p>
        
        <CardImg src={carolina_mountains}></CardImg>   

        <p>
        When I'm not in front of my computer, I enjoy hiking the Carolina mountains, reading, visiting new coffee shops (cold brews and dirty chai's all the way), and spending time with my family.
        </p>
        </AboutText>
      </AboutDiv>  

        <Link
            activeClass='active'
            to='projects' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> <Button>View Projects</Button></Link> 

    </BigDiv>
  );
}

export default AboutMe;