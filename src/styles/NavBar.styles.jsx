import styled from 'styled-components';

export const BigDiv = styled.div`
position: fixed;
top: 0;
width: 100%;
padding: .8rem 1rem;
background-color: white;
border-bottom: 1px solid black;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const NavDiv = styled.div`
display:flex;
width: 100%;

@media(max-width:500px){
  flex-direction: column;
  align-items: center;
  width: 95%;
}
`

export const LeftNav = styled.div`
display:flex;
width: 20%;
align-items: center;

@media(max-width:500px){
  justify-content: center;
  width: 95%;
}
`

export const RightNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 45%;

@media(max-width:500px){
  flex-direction: column;
  width: 95%;
}
`

export const Title = styled.h4`
font-size: 1.4rem;

@media(max-width:500px){
  font-size: 1.2rem;
  padding-left: .7rem;
}
`

export const Icon = styled.span`
color: #99ccff;
padding: 0rem 1rem;

@media(max-width:500px){
  font-size: .8rem;
}
`
