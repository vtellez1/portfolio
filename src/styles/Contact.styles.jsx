import styled from 'styled-components';

export const BigDiv = styled.div`
padding-top: 1rem;
padding-left:7rem;
text-align: left;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media(max-width:800px){
  padding-top: 2rem;
  padding-left: 3rem;
}

@media(max-width:500px){
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
export const Title = styled.h1`
font-size: 1.4rem;
color: #484848;

@media(max-width:500px){
  font-size: 1.2rem;
}
`

export const SocialsDiv = styled.div`

width: 6rem;
@media(max-width:500px){
  margin: 1.5rem 0rem;
  display: flex;
  flex-direction: column;
}
`

export const SocialIcon = styled.div`


`

export const CopyRight = styled.p`
text-align: center;
color: #484848;
margin-bottom: 0;
`