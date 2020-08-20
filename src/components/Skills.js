import React from 'react';

import { BigDiv, Title, SkillText, SkillsBox } from '../styles/Skills.styles';

function Skills() {
  return (
    <BigDiv name='skills'> 
    <Title>MY SKILLS</Title>
    <SkillsBox>
      <SkillText><span style={{color: "orange"}}><i class="fab fa-html5"></i></span> HTML</SkillText>
      <SkillText><span style={{color: "dodgerblue"}}><i class="fab fa-css3"></i></span> CSS</SkillText>      
      <SkillText><span style={{color: "gold"}}><i class="fab fa-js-square"></i></span> JavaScript</SkillText> 

      <SkillText><span style={{color: "deepskyblue"}}><i class="fab fa-react"></i></span>  ReactJS</SkillText>
      <SkillText><img src='https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png' alt="redux logo" style={{height:23}}></img> Redux</SkillText>

      <SkillText><span style={{color: "limegreen"}}><i class="fab fa-node-js"></i></span> NodeJS </SkillText>
      <SkillText><span style={{color: "orange"}}><i class="fas fa-dharmachakra"></i></span> Knex </SkillText>
      <SkillText><span style={{color: "lightblue"}}><i class="fas fa-cogs"></i></span> Express </SkillText>      
      <SkillText><span style={{color: "dimgray"}}><i class="fas fa-database"></i></span> SQL </SkillText>
      <SkillText><img src='https://miro.medium.com/max/3840/1*wsG43wOOFexWg_xa0CEhuQ.jpeg' alt="postgres logo" style={{height:27}}></img> PostgresSQL </SkillText>

      <SkillText><span style={{color: "pink"}}><i class="fab fa-sass"></i></span> Sass </SkillText>
      <SkillText><img src='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png' alt="styled components logo" style={{height:32}}></img> Styled Components </SkillText>
      <SkillText><span style={{color: "purple"}}><i class="fab fa-bootstrap"></i></span> BootStrap </SkillText>

      <SkillText><span style={{color: "darkorange"}}><i class="fab fa-git"></i></span> Git Source Control </SkillText>
    </SkillsBox> 
   </BigDiv>
  );
}

export default Skills;