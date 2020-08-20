import styled from 'styled-components';

export const BigDiv = styled.div`
margin: 7rem 0rem;
padding: 2rem 0rem;
border-bottom: 1px solid #484848;
color: #484848;
`

export const ProfilePic = styled.img`
height: 13rem;
@media(max-width:800px){
  height: 10rem;
  padding-top: 1rem;
}

@media(max-width:500px){
  height: 8rem;
}
`

export const Title = styled.h2`
color: #484848;
padding: 2rem 0rem;
@media(max-width:500px){
  font-size: 1.3rem;
}
`

export const SocialsDiv = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;

@media(max-width:500px){
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
`
export const SocialIcon = styled.div`
width: 20%
`