import React from 'react';
import profilepic from '../images/circle-cropped.png';
import { Link } from 'react-scroll';

import { BigDiv, AboutDiv, AboutText, Title, ProfilePic, SocialsDiv, SocialIcon, Button } from '../styles/AboutMe.styles';

function AboutMe(){
  return (
    <BigDiv name="aboutme">

      <AboutDiv>
        <AboutText>
        <p>Hi, my name is <Title>Vanessa Tellez.</Title> I am a full-stack web developer based in <p><span style={{color: "crimson"}}><i class="fas fa-map-pin"></i></span> Charlotte, NC</p> I am passionate about continuous learning and enjoy problem solving. I am excited to apply my skills to real world problems and applications.     </p>

        <p>
        When I'm not in front of my computer, I enjoy hiking the Carolina mountains, reading, visiting new coffee shops (cold brews and dirty chai's all the way), and spending time with my family.
        </p>
        </AboutText>


        <div>
        <ProfilePic src={profilepic} alt='profile-picture'></ProfilePic>    
        </div>
    </AboutDiv>  

    <SocialsDiv>
            <SocialIcon>
                <a href='https://github.com/vtellez1'><i style={{color: "black"}} class="fab fa-github fa-3x"></i></a>
                <p>GitHub</p>
            </SocialIcon>

            <SocialIcon>
                <a href='https://www.linkedin.com/in/tellezvanessa/'><i style={{color: "#0077B5"}} class="fab fa-linkedin fa-3x"></i></a>
                <p>LinkedIn</p>
            </SocialIcon>
        
            <SocialIcon>
                <a href='https://twitter.com/vanessa_tellezz'><i style={{color: "#1DA1F2"}} class="fab fa-twitter-square fa-3x"></i></a>
                <p>Twitter</p>
            </SocialIcon>
        </SocialsDiv>

        <Link
            activeClass='active'
            to='projects' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> <Button>View Projects</Button></Link> 

    </BigDiv>
  )
}

export default AboutMe;