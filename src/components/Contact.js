import React from 'react';
import styled from 'styled-components';

const BigDiv = styled.div`
margin: 4rem 0rem;

@media(max-width:500px){
  margin-bottom: 5rem;
}
`
const Title = styled.h1`
@media(max-width:500px){
  font-size: 2rem;
}
`
const SocialsDiv = styled.div`
display: flex;
justify-content: center;
margin: 3rem 0rem;

@media(max-width:500px){
  margin: 1.5rem 0rem;
  flex-direction: column;
  align-items: center;
}
`
const SocialIcon = styled.div`
width: 15%
`

function Contact() {
  return (
    <BigDiv name='contact'>
      <Title>Contact Me:</Title>
      <SocialsDiv>      
          <SocialIcon>
                <a href='mailto:vanessatellez45@gmail.com'><i style={{color: "#99ccff"}} class="fas fa-envelope fa-3x"></i></a>
                <p>Email</p>
            </SocialIcon>

            <SocialIcon>
                <a href='https://github.com/vtellez1'><i style={{color: "black"}} class="fab fa-github fa-3x"></i></a>
                <p>GitHub</p>
            </SocialIcon>

            <SocialIcon>
                <a href='https://www.linkedin.com/in/tellezvanessa/'><i style={{color: "#0077B5"}}  class="fab fa-linkedin fa-3x"></i></a>
                <p>LinkedIn</p>
            </SocialIcon>
        
            <SocialIcon>
                <a href='https://twitter.com/vanessa_tellezz'><i style={{color: "#1DA1F2"}} class="fab fa-twitter-square fa-3x"></i></a>
                <p>Twitter</p>
            </SocialIcon> 
        </SocialsDiv>

    </BigDiv>
  );
}

export default Contact;