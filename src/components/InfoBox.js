import React from 'react';
import profilepic from '../images/circle-cropped.png';

import { BigDiv, ProfilePic, Title, SocialsDiv, SocialIcon } from '../styles/InfoBox.styles';


function InfoBox() {
  return (
    <BigDiv>
        <div>
            <ProfilePic src={profilepic} alt='profile-picture'></ProfilePic>  
            <Title>VANESSA TELLEZ</Title> 
            <p>Full-Stack Web Developer </p>

            <SocialsDiv>
            <SocialIcon>
                <a target="_blank" href='https://github.com/vtellez1' rel="noopener noreferrer"><i style={{color: "black"}} class="fab fa-github fa-2x"></i></a>
                <p>GitHub</p>
            </SocialIcon>

            <SocialIcon>
                <a target="_blank" href='https://www.linkedin.com/in/tellezvanessa/' rel="noopener noreferrer"><i style={{color: "#0077B5"}} class="fab fa-linkedin fa-2x"></i></a>
                <p>LinkedIn</p>
            </SocialIcon>
        
            <SocialIcon>
                <a target="_blank" href='https://twitter.com/vanessa_tellezz' rel="noopener noreferrer"><i style={{color: "#1DA1F2"}} class="fab fa-twitter-square fa-2x"></i></a>
                <p>Twitter</p>
            </SocialIcon>
        </SocialsDiv>
        </div>
    </BigDiv>
  );
}

export default InfoBox;