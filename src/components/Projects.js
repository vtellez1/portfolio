import React from 'react';

import kanshaapp from '../images/KanshaImg2.jpeg';
import simmerapp from '../images/simmer-app.jpeg';
import chefporfolioapp from '../images/chefportfolio-app.jpeg';
import topnineapp from '../images/topnineapp.jpg';

import { BigDiv, Title, ProjectDiv, Card, CardImg, CardBody, CardTitle, CardText, CardSubTitle, ButtonDiv, Button, } from '../styles/Projects.styles';

function Projects() {
  return (
    <BigDiv name='projects'>
      <Title>MY PROJECTS</Title>
      <ProjectDiv>

      <Card>
        <CardImg top width="100%" src={kanshaapp} alt="Kansha app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://kansharewards.com/'}}/>
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
        <CardImg top width="100%" src={simmerapp} alt="Simmer app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://deploy-inky.now.sh/home'}} />
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

      {/* <Card>
        <CardImg top width="100%" src={chefporfolioapp} alt="Chef Portfolio app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://objective-kalam-f1d625.netlify.app/'}}/>
        <CardBody>
          <CardTitle onClick={(e)=>{e.preventDefault(); window.location.href='https://objective-kalam-f1d625.netlify.app/'}}>Chef Portfolio</CardTitle>
          <CardText>
            <CardSubTitle>Buit using: JavaScript | React | Redux | SASS | NodeJS | Express</CardSubTitle>
            <p>Role: Front End Developer</p>
            <p>A professional platform for chefs to display their best recipes for the world to view with photos and ingredient lists. </p>
            <ul>
              <li>Built project on a remote team of 4 front-end developers, 1 backend developer, and 2 UI developers in 4 days.</li>
              <li>Developed state management for application and handled HTTP requests for all CRUD operations.</li>
              <li> Implemented client-side authentication in collaboration with a backend developer.</li>
            </ul>
        </CardText>
        <ButtonDiv> 
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://objective-kalam-f1d625.netlify.app/'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/ft-bw-chef-portfolio/front-end'}}>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card> */}

      <Card>
        <CardImg top width="100%" src={topnineapp} alt="top nine app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://mytopninefavs.netlify.com/'}} />
        <CardBody>
          <CardTitle onClick={(e)=>{e.preventDefault(); window.location.href='https://mytopninefavs.netlify.com/'}}>My Top Nine</CardTitle>
          <CardText>
          <CardSubTitle>Built using: JavaScript | React | Styled Components | NodeJS | Express </CardSubTitle>
          <p>Role: React I developer. </p>
          <p>Top Nine allows you to choose your top 9 favorite things, edit/delete them, and view your friend's Top Nine.</p>
          <ul>
            <li>Built project on a remote team of 3 front-end developers, 1 backend developer, and 1 UI developers in 4 days.</li>
            <li>Constructed user sign up and login forms utilizing formik in order to provide great user experience</li>
            <li>Styled application using styled components to meet plan design specifications.</li>
          </ul>
          
          </CardText>

        <ButtonDiv>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://mytopninefavs.netlify.com/'}}>View Project</Button>
          <Button onClick={(e)=>{e.preventDefault(); window.location.href='https://github.com/top-nine-pro'}}>GitHub Repo <i class="fab fa-github"></i></Button>
        </ButtonDiv>
        </CardBody>
      </Card>



    </ProjectDiv>
    </BigDiv>
  );
}

export default Projects;