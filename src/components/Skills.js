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

      <SkillText><span style={{color: "deepskyblue"}}><i class="fab fa-react"></i></span>  React</SkillText>
      <SkillText><img src='https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png' alt="redux logo" style={{height:23}}></img> Redux</SkillText>
      <SkillText><span style={{color: "limegreen"}}><i class="fab fa-node-js"></i></span> NodeJS </SkillText>
      <SkillText><span style={{color: "dimgray"}}><i class="fas fa-database"></i></span> SQL </SkillText>
    </SkillsBox> 
   </BigDiv>
  );
}

export default Skills;