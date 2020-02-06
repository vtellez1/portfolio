import React from 'react';
import profilepic from '../ProfilePic/circle-cropped.png';
import styled from 'styled-components';

const BigDiv = styled.div`
margin: 8.5rem 0rem;
`

const AboutDiv = styled.div`
display: flex;
justify-content: space-evenly;
margin: 4rem 0rem;
`

const ProfilePic = styled.img`
height: 16rem;
`

function AboutMe() {
  return (
    <BigDiv name="aboutme">
      <h1>About Me:</h1>

      <AboutDiv>

        <div>
        <p>Hi, my name is Vanessa. I am a full-stack web developer based in Charlotte, NC.  </p>
        </div>


        <div>
        <ProfilePic src={profilepic} alt='profile-picture'></ProfilePic>    
        </div>

    </AboutDiv>  

    </BigDiv>
  );
}

export default AboutMe;