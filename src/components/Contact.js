import React from 'react';
import styled from 'styled-components';

const BigDiv = styled.div`
margin: 5rem 0rem;
`

const SocialsDiv = styled.div`
display: flex;
justify-content: center;
margin: 3rem 0rem;
`
const SocialIcon = styled.div`
width: 15%
`

function Contact() {
  return (
    <BigDiv name='contact'>
      <h1>Contact Me:</h1>
      <SocialsDiv>      
          <SocialIcon>
                <a href='mailto:vanessatellez45@gmail.com'><i class="fas fa-envelope fa-3x"></i></a>
                <p>Email</p>
            </SocialIcon>

            <SocialIcon>
                <a href='https://github.com/vtellez1'><i class="fab fa-github fa-3x"></i></a>
                <p>GitHub</p>
            </SocialIcon>

            <SocialIcon>
                <a href='https://www.linkedin.com/in/vanessa-tellez-b8389394/'><i class="fab fa-linkedin fa-3x"></i></a>
                <p>LinkedIn</p>
            </SocialIcon>
        
            <SocialIcon>
                <a href='https://twitter.com/vanessa_tellezz'><i class="fab fa-twitter-square fa-3x"></i></a>
                <p>Twitter</p>
            </SocialIcon> 
        </SocialsDiv>
    </BigDiv>
  );
}

export default Contact;