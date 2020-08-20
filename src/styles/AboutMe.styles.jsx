import styled from 'styled-components';

export const BigDiv = styled.div`
margin: 7rem 0rem;
padding: 2rem 0rem;
`

export const AboutDiv = styled.div`
display: flex;
justify-content: space-evenly;
margin: 4rem 0rem;

@media(max-width:800px){
  flex-direction: column;
  align-items: center;
}

@media(max-width:500px){
  margin: 2rem 0rem;
}
`

export const AboutText = styled.div`
width: 55%;
@media(max-width:800px){
  width: 95%;
  font-size: .8rem;
}
`

export const Title = styled.h2`
@media(max-width:500px){
  font-size: 1.3rem;
}
`

export const ProfilePic = styled.img`
height: 16rem;
@media(max-width:800px){
  height: 10rem;
  padding-top: 1rem;
}

@media(max-width:500px){
  height: 8rem;
}
`
export const SocialsDiv = styled.div`
display: flex;
justify-content: center;
margin: 3rem 0rem;

@media(max-width:500px){
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
`
export const SocialIcon = styled.div`
width: 15%
`
export const Button = styled.button`
background-color: black;
color: white;
padding: .6rem 1.2rem;
font-size: 1.1rem;
border-radius: .4rem;
&:hover{
background-color:white; 
color: black;
}

@media(max-width:500px){
  font-size: .9rem;
  padding: .4rem 1rem;

}
`