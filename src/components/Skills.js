import React from 'react';
import styled from 'styled-components';

const BigDiv = styled.div`
margin: 7rem 0rem;
`

const SkillsBox = styled.div`
display: flex;
justify-content: space-evenly;
margin: 5rem 0rem;
`

const SkillText = styled.p`
font-size: 3rem;
`



function Skills() {
  return (
    <BigDiv name='skills'> 
      <h1>My Skills:</h1>
    <SkillsBox>
      <SkillText><i class="fab fa-html5"></i> HTML</SkillText>
      <SkillText><i class="fab fa-css3"></i> CSS</SkillText>
      <SkillText><i class="fab fa-js-square"></i> JavaScript</SkillText>
      </SkillsBox> 

      <SkillsBox>
      <SkillText><i class="fab fa-react"></i> React</SkillText>
      <SkillText><img src='https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png' style={{height:35}}></img> Redux</SkillText>
      <SkillText><i class="fab fa-node-js"></i> NodeJS </SkillText>
      <SkillText><i class="fas fa-database"></i> SQL </SkillText>
    </SkillsBox> 
   </BigDiv>
  );
}

export default Skills;