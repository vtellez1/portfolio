import React from 'react';
import profilepic from '../ProfilePic/circle-cropped.png';
import styled from 'styled-components';

const BigDiv = styled.div`
margin: 10rem 0rem;
padding: 2rem 0rem;
`

const AboutDiv = styled.div`
display: flex;
justify-content: space-evenly;
margin: 4rem 0rem;
`
const AboutText = styled.div`
width: 55%;
`
const ProfilePic = styled.img`
height: 16rem;
`

function AboutMe(){
  return (
    <BigDiv name="aboutme">
      <h1>About Me:</h1>

      <AboutDiv>

        <AboutText>
        <p>Hi, my name is Vanessa Tellez. I am a full-stack web developer based in Charlotte, NC. I am passionate about continuous learning and enjoy problem solving. I am excited to apply my skills to real world problems and applications.     </p>

        <p>
        When I'm not in front of my computer, I enjoy hiking, reading, visiting new coffee shops, and spending time with my family.
        </p>
        </AboutText>


        <div>
        <ProfilePic src={profilepic} alt='profile-picture'></ProfilePic>    
        </div>

    </AboutDiv>  

    </BigDiv>
  )
}

export default AboutMe;