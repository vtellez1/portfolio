import styled from 'styled-components';

export const BigDiv = styled.div`
margin: 4rem 0rem;

@media(max-width:500px){
  margin-bottom: 5rem;
}
`
export const Title = styled.h1`
@media(max-width:500px){
  font-size: 2rem;
}
`
export const SocialsDiv = styled.div`
display: flex;
justify-content: center;
margin: 3rem 0rem;

@media(max-width:500px){
  margin: 1.5rem 0rem;
  flex-direction: column;
  align-items: center;
}
`
export const SocialIcon = styled.div`
width: 15%
`