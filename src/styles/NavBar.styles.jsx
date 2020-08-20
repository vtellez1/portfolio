import styled from 'styled-components';

export const BigDiv = styled.div`
position: fixed;
top: 0;
width: 85%;
background-color: white;
`

export const NavDiv = styled.div`
display:flex;
justify-content: space-between;
margin: 1.3rem 0rem;
width: 85%;

@media(max-width:500px){
  flex-direction: column;
  align-items: center;
  width: 95%;
}
`

export const Title = styled.h4`
@media(max-width:500px){
  font-size: 1.2rem;
  padding-left: .7rem;
}
`

export const Icon = styled.span`
color: #99ccff;

@media(max-width:500px){
  font-size: .8rem;
}
`
export const LeftNav = styled.div`
display:flex;
justify-content: space-between;
width: 25%;

@media(max-width:500px){
  justify-content: center;
  width: 95%;
}
`

export const RightNav = styled.div`
display: flex;
justify-content: space-between;
width: 40%;

@media(max-width:500px){
  flex-direction: column;
  width: 95%;
}
`