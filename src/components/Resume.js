import React from 'react';
import { Button } from 'reactstrap';

import styled from 'styled-components';

const BigDiv = styled.div`
position: fixed;
top: 0;
width: 80%;
background-color: white;
`

const NavDiv = styled.div`
display:flex;
justify-content: space-between;
margin: 2rem 0rem;
`
const LeftNav = styled.div`
display:flex;
justify-content: space-between;
width: 20%;
`

const RightNav = styled.div`
display: flex;
justify-content: flex-end;
width: 40%;`


function Resume(props) {
  return (
    <BigDiv>
          
    <NavDiv>
      <LeftNav>
        <span style={{color: "lavender"}}><i class="fas fa-code fa-2x"></i></span>
            <h4>Vanessa Tellez</h4>
      </LeftNav>
      <RightNav>
        <Button onClick={()=> props.history.push('/')}>Back to Portfolio</Button>
      </RightNav>
    </NavDiv>

 <div className="resume" name='resume'>
  
      <h1>My Resume</h1>
      <p> Resume coming soon</p>
    </div>


    </BigDiv>
  
  );
}

export default Resume;