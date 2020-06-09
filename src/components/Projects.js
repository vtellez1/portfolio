import React from 'react';
import styled from 'styled-components';

import kanshaapp from '../ProfilePic/KanshaImg2.jpeg';
import simmerapp from '../ProfilePic/simmer-app.jpeg';
import chefporfolioapp from '../ProfilePic/chefportfolio-app.jpeg';
import topnineapp from '../ProfilePic/topnineapp.jpg';


  const BigDiv = styled.div`
  margin: 8.5rem 0rem;
  `
  const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1rem 0rem;
  height: auto;
  `

  const Card = styled.div`
  display: flex;
  padding: 1.5rem;
  margin: 1rem;
  border: black solid 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media(max-width:800px){
    flex-direction: column;
    align-items: center;
  }

  @media(max-width:500px){
    padding: .5rem;
    margin: .5rem;
    width:100%;
  }
  `
  const CardImg = styled.img`
  width: 45%;
  height: 21rem;
  padding: 1rem;
  @media(max-width:800px){
    width: 90%;
  }
  @media(max-width:500px){
    width: 80%;
    height: 13rem;
  }
  `

  const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  `

const Title = styled.h1`
@media(max-width:500px){
  font-size: 2rem;
}
`

  const CardTitle = styled.h4`
  @media(max-width:500px){
    font-size: 1.2rem;
  }
  `
  const CardSubTitle = styled.h6`
  @media(max-width:500px){
    font-size: .8rem;
  }
  `

  const CardText = styled.div`
  height: 10.7rem;
  overflow: scroll;
  margin-bottom: 1rem;
  padding-right: 1.3rem;

  @media(max-width:500px){
    font-size: .8rem;
    text-align: left;
  }
  `
  const Button = styled.button`
  background-color: #282828;
  color: white;
  font-size: 1rem;
  padding: .2rem;
  border-radius: .4rem;
  &:hover{
  background-color:white; 
  color: black;
  }

  @media(max-width:500px){
    font-size: .7rem;
  }
  `

  const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  `

function Projects() {
  return (
    <BigDiv name='projects'>
      <Title>My Projects:</Title>
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

      <Card>
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
      </Card>

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