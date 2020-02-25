import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const BigDiv = styled.div`
padding-top: 6.5rem;
`

const TitleDiv = styled.div`
margin: 4rem 0rem;
`

const SocialsDiv = styled.div`
display: flex;
justify-content: center;
margin: 3rem 0rem;
`
const SocialIcon = styled.div`
width: 15%
`

function Header() {
  return (
    <BigDiv name='header'>
      <Jumbotron>
        <TitleDiv>
      <h1 className="display-3">Vanessa Tellez</h1>
        <p className="lead">Full-Stack Web Developer</p>
        <p><span style={{color: "crimson"}}><i class="fas fa-map-pin"></i></span> Charlotte, NC</p>
        </TitleDiv>
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
        <Link
            activeClass='active'
            to='aboutme' 
            spy={true}
            smooth= {true}
            offset={-70}
            duration={500}> <Button color="secondary">About Me</Button></Link> 
          
        </p>
      </Jumbotron>
    </BigDiv>
  );
}

export default Header;