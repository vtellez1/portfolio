import React from 'react';

import kanshaapp from '../images/KanshaImg2.jpeg';
import simmerapp from '../images/simmer-app.jpeg';
import omdbapp from '../images/omdb-movie-app.jpeg';

import topnineapp from '../images/topnineapp.jpg';

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
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://kansharewards.com/'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/Lambda-School-Labs/kansha-fe'}}>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={simmerapp} alt="Simmer app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://deploy-inky.now.sh/home'}} />
        <CardBody>
          <CardTitle onClick={(e)=>{e.preventDefault(); window.location.href='https://deploy-inky.now.sh/home'}}>Simmr</CardTitle>
          <CardText>
            <CardSubTitle>Buit using: JavaScript | React | Redux | Material UI | NodeJS | Express</CardSubTitle>
            <p>Role: Back End Developer</p>
            <p>A professional platform for chefs to display their best recipes for the world to view with photos and ingredient lists. </p>
            <ul>
              <li>Developed project on a remote team of 2 front-end developers, 2 backend developer, and 1 UI developer in 4 days.</li>
              <li>Built Web API in coordination with front-end team and backend developer partner to meet client requirements.</li>
              <li>Delivered an API using the REST architectural pattern, provided data persistence, incorporated authentication, and included testing.</li>
            </ul>
        </CardText>

        <ButtonDiv> 
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://deploy-inky.now.sh/home'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/chefPassport/backend'}}>GitHub Repo <i class="fab fa-github"></i></Button>
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