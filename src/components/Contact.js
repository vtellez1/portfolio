import React from 'react';
import { BigDiv, Title, SocialsDiv, SocialIcon, CopyRight } from '../styles/Contact.styles';

function Contact() {
  return (
    <BigDiv name='contact'>
      <Title>CONTACT ME</Title>
      <SocialsDiv>      
          <SocialIcon>
                <a target="_blank" rel="noopener noreferrer" href='mailto:vanessatellez45@gmail.com'><i style={{color: "#484848"}} class="fas fa-envelope"> Email</i></a>
            </SocialIcon>

            <SocialIcon>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/vtellez1'><i style={{color: "black"}} class="fab fa-github"> GitHub</i></a>
            </SocialIcon>

            <SocialIcon>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/tellezvanessa/'><i style={{color: "#0077B5"}}  class="fab fa-linkedin"> LinkedIn</i></a>
            </SocialIcon>
        
            <SocialIcon>
                <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/vanessa_tellezz'><i style={{color: "#1DA1F2"}} class="fab fa-twitter-square"> Twitter</i></a>
            </SocialIcon> 
        </SocialsDiv>
        <CopyRight>  Tellez - 2021 </CopyRight>

    </BigDiv>
  );
}

export default Contact;