import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';


const SocialsDiv = styled.div`
display: flex;
justify-content: center;
margin: 4rem 0rem;
`
const SocialIcon = styled.div`
width: 15%
`

function Header() {
  return (
    <div className="header" name='header'>
      <Jumbotron>
      <h1 className="display-3">Vanessa Tellez</h1>
        <p className="lead">Full-Stack Web Developer</p>
        <p><i class="fas fa-map-pin"></i> Charlotte, NC</p>
        <hr className="my-2" />
        <SocialsDiv>
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

        <p className="lead">
          <Button color="secondary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Header;