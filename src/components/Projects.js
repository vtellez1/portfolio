import React from 'react';

import kanshaapp from '../images/KanshaImg2.jpeg';
import omdbapp from '../images/omdb-movie-app.jpeg';

import { BigDiv, Title, ProjectDiv, Card, CardImg, CardBody, CardTitle, CardText, CardSubTitle, ButtonDiv, Button, } from '../styles/Projects.styles';

function Projects() {
  return (
    <BigDiv name='projects'>
      <Title>MY PROJECTS</Title>
      <ProjectDiv>

      <Card>
        <CardImg src={kanshaapp} alt="Kansha app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://kansharewards.com/'}}/>
        <CardBody>
          <CardTitle onClick={(e)=>{e.preventDefault(); window.location.href='https://kansharewards.com/'}}>Kansha Rewards</CardTitle>
          <CardText>
            <CardSubTitle>Built using: JavaScript | React | Redux | SASS | NodeJS | Postgres </CardSubTitle>
            <p>Role: Front End and Back End Developer. </p>
            <p>A workplace recognition program to appreciate peers through rewards and personalized messages.</p>
            <ul>
              <li>Enhanced build-on project on a remote cross-functional team of 8 developers and a UX Designer in 8 weeks.</li>
              <li>Developed application with front end and back end skills to reach product vision goals.</li>
              <li>Implemented bulk-user upload capabilities with CSV files and reports on user recognition count.</li>
            </ul>
          </CardText>


        <ButtonDiv>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://www.youtube.com/watch?v=LOjRpE6OURw'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/Lambda-School-Labs/kansha-fe'}}>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={omdbapp} alt="OMDB app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://omdb-movies-tellez.netlify.app/'}}/>
        <CardBody>
          <CardTitle onClick={(e)=>{e.preventDefault(); window.location.href='https://omdb-movies-tellez.netlify.app/'}}>OMDb Movies</CardTitle>
          <CardText>
            <CardSubTitle>Buit using: JavaScript | React | Redux | Styled Components </CardSubTitle>
            <p>Role: Front End Developer</p>
            <p> Search OMDb for movies on webpage and save 5 favourite films. Select 5 nominees and be notified when finished. </p>
            <ul>
              <li>Implemented request to OMDb API for application movie search data.  </li>
              <li>Developed state management for full application with Redux to add/remove movie from nomination list.</li>
              <li> Styled and designed full application with styled components. </li>
            </ul>
        </CardText>
        <ButtonDiv> 
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://omdb-movies-tellez.netlify.app/'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/vtellez1/omdbmovies'}}>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card>

    </ProjectDiv>
    </BigDiv>
  );
}

export default Projects;