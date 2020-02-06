import React from 'react';
import styled from 'styled-components';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const BigDiv = styled.div`
  margin: 8.5rem 0rem;
  `

function Projects() {
  return (
    <BigDiv name='projects'>
      <h1>My Projects:</h1>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project title</CardTitle>
          <CardSubtitle>Built using: Languages/Framworks used</CardSubtitle>
          <CardText>Description of project and my role. 2-3 bullets highlighting responsibilities, how technology was used,
        or accomplishments..</CardText>
          <Button>View Project</Button>
          <Button>GitHub Repo <i class="fab fa-github"></i></Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project title</CardTitle>
          <CardSubtitle>Built using:Languages/Framworks used</CardSubtitle>
          <CardText>Description of project and my role. 2-3 bullets highlighting responsibilities, how technology was used,
        or accomplishments..</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project title</CardTitle>
          <CardSubtitle>Buit using: Languages/Framworks used</CardSubtitle>
          <CardText>Description of project and my role. 2-3 bullets highlighting responsibilities, how technology was used,
        or accomplishments..</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </BigDiv>
  );
}

export default Projects;