import styled from 'styled-components';

export const BigDiv = styled.div`
padding-top: 1rem;
padding-left:7rem;

text-align: left;
border-bottom: 1px solid black;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media(max-width:500px){
  margin-bottom: 5rem;
}
`
export const Title = styled.h1`
font-size: 1.4rem;
color: #484848;
@media(max-width:500px){
  font-size: 1.2rem;
}
`

export const CopyRight = styled.p`
text-align: center;
color: #484848;
`
export const SocialsDiv = styled.div`

margin-bottom: 3rem;
@media(max-width:500px){
  margin: 1.5rem 0rem;
  flex-direction: column;
  align-items: center;
}
`
export const SocialIcon = styled.div`
width: 15%
`