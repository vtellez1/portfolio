import React from 'react';

import { BigDiv, Title, SkillText, SkillsBox } from '../styles/Skills.styles';

function Skills() {
  return (
    <BigDiv name='skills'> 
    <Title>MY SKILLS</Title>
    <SkillsBox>
      <SkillText> HTML <span style={{color: "orange"}}><i class="fab fa-html5"></i></span></SkillText>
      <SkillText> CSS <span style={{color: "dodgerblue"}}><i class="fab fa-css3"></i></span></SkillText>      
      <SkillText> JavaScript <span style={{color: "gold"}}><i class="fab fa-js-square"></i></span> </SkillText> 

      <SkillText> ReactJS <span style={{color: "deepskyblue"}}><i class="fab fa-react"></i></span> </SkillText>
      <SkillText> Redux <img src='https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png' alt="redux logo" style={{height:23}}></img></SkillText>

      <SkillText> NodeJS <span style={{color: "limegreen"}}><i class="fab fa-node-js"></i></span> </SkillText>
      <SkillText> Knex <span style={{color: "orange"}}><i class="fas fa-dharmachakra"></i></span></SkillText>
      <SkillText> Express <span style={{color: "lightblue"}}><i class="fas fa-cogs"></i></span></SkillText>      
      <SkillText> SQL <span style={{color: "dimgray"}}><i class="fas fa-database"></i></span></SkillText>
      <SkillText> PostgresSQL <img src='https://miro.medium.com/max/3840/1*wsG43wOOFexWg_xa0CEhuQ.jpeg' alt="postgres logo" style={{height:27}}></img></SkillText>

      <SkillText> Sass <span style={{color: "pink"}}><i class="fab fa-sass"></i></span></SkillText>
      <SkillText> Styled Components <img src='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png' alt="styled components logo" style={{height:32}}></img></SkillText>
      <SkillText> BootStrap <span style={{color: "purple"}}><i class="fab fa-bootstrap"></i></span></SkillText>

      <SkillText> Git Source Control <span style={{color: "darkorange"}}><i class="fab fa-git"></i></span></SkillText>
    </SkillsBox> 
   </BigDiv>
  );
}

export default Skills;