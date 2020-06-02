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
  `
  const CardImg = styled.img`
  width: 45%;
  height: 21rem;
  padding: 1rem;
  `

  const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  `
  const CardTitle = styled.h4``
  const CardSubtitle = styled.h6``
  const CardText = styled.p``
  const Button = styled.button``

  const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  `

function Projects() {
  return (
    <BigDiv name='projects'>
      <h1>My Projects:</h1>
      <ProjectDiv>

      <Card>
        <CardImg top width="100%" src={kanshaapp} alt="Kansha app screenshot" onClick={(e)=>{e.preventDefault(); window.location.href='https://kansharewards.com/'}}/>
        <CardBody>
          <CardTitle onClick={(e)=>{e.preventDefault(); window.location.href='https://kansharewards.com/'}}>Kansha Rewards</CardTitle>
          <CardSubtitle>Built using: JavaScript | React | Redux | SASS | NodeJS | Postgres </CardSubtitle>
          <CardText>Role: Front End and Back End Developer. </CardText>
          <CardText>A workplace recognition program to appreciate peers through rewards and personalized messages.</CardText>


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
          <CardSubtitle>Buit using: JavaScript | React | Redux | Material UI | NodeJS | Express</CardSubtitle>
          <CardText>Role: Back End Developer</CardText>
          <CardText>A professional platform for chefs to display their best recipes for the world to view with photos and ingredient lists. </CardText>
 
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
          <CardSubtitle>Buit using: JavaScript | React | Redux | SASS | NodeJS | Express</CardSubtitle>
          <CardText>Role: Front End Developer</CardText>
          <CardText>A professional platform for chefs to display their best recipes for the world to view with photos and ingredient lists. </CardText>
          <CardText> Built project on a remote team of 4 front-end developers, 1 backend developer, and 2 UI developers in 4 days.</CardText>
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
          <CardSubtitle>Built using: React </CardSubtitle>
          <CardText>Role: React I developer. </CardText>
          <CardText>Top Nine allows you to choose your top 9 favorite things, edit/delete them, and view your friend's Top Nine.</CardText>
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