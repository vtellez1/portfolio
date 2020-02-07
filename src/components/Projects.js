import React from 'react';
import styled from 'styled-components';

import todolistapp from '../ProfilePic/todolistapp.jpg';
import topnineapp from '../ProfilePic/topnineapp.jpg';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const BigDiv = styled.div`
  margin: 8.5rem 0rem;
  `

  const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  `

function Projects() {
  return (
    <BigDiv name='projects'>
      <h1>My Projects:</h1>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src={todolistapp} alt="Card image cap" />
        <CardBody>
          <CardTitle>To-Do List</CardTitle>
          <CardSubtitle>Built using: React </CardSubtitle>
          <CardText>Used class components to manage state for a to-do app. Able to add new to-do item, cross off completed, and clear all completed items.</CardText>
        <ButtonDiv>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://vanessas-todo-list.netlify.com/'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/vtellez1/React-Todo'}}>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={topnineapp} alt="Card image cap" />
        <CardBody>
          <CardTitle>My Top Nine</CardTitle>
          <CardSubtitle>Built using: React </CardSubtitle>
          <CardText>Role: React I developer. Top Nine allows you to choose your top 9 favorite things, edit/delete them, and view your friend's Top Nine.</CardText>
        <ButtonDiv>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://mytopninefavs.netlify.com/'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/top-nine-pro'}}>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project title</CardTitle>
          <CardSubtitle>Buit using: Languages/Framworks used</CardSubtitle>
          <CardText>Description of project and my role. 2-3 bullets highlighting responsibilities, how technology was used,
        or accomplishments..</CardText>
        <ButtonDiv>
          <Button>View Project</Button>
          <Button>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card>
    </CardDeck>
    </BigDiv>
  );
}

export default Projects;