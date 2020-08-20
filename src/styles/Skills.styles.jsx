import styled from 'styled-components';

export const BigDiv = styled.div`
margin: 9rem 0rem;
`

export const SkillsBox = styled.div`
display: flex;
justify-content: space-evenly;
margin: 5rem 0rem;

@media(max-width:800px){
  flex-direction: column;
  align-items: center;
  margin: 0rem;
}
`

export const Title = styled.h1`
@media(max-width:500px){
  font-size: 2rem;
}
`

export const SkillText = styled.p`
font-size: 3rem;

&:hover{
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.2);
}
}
@media(max-width:800px){
  font-size: 2.4rem;
}

@media(max-width:800px){
  font-size: 1.8rem;
}
`
