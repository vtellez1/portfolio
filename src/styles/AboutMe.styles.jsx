import styled from 'styled-components';

export const BigDiv = styled.div`
margin-top: 6rem;
padding: 1.7rem 0rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const AboutDiv = styled.div`
display: flex;
justify-content: space-evenly;
margin: 1.5rem 0rem;

@media(max-width:800px){
  flex-direction: column;
  align-items: center;
}

@media(max-width:500px){
  margin: 2rem 0rem;
}
`

export const AboutText = styled.div`
width: 95%;
text-align: left;

@media(max-width:800px){
  width: 95%;
  font-size: .8rem;
  text-align: center;
}
`

export const AboutTop = styled.span`
width: 95%;
text-align: center;

@media(max-width:800px){
  width: 95%;
  font-size: .8rem;
}
`

export const Title = styled.h3`
@media(max-width:500px){
  font-size: 1.3rem;
}
`

export const CardImg = styled.img`
width: 100%;
height: auto;
padding: 1rem 0rem;

@media(max-width:800px){
  width: 90%;
}

@media(max-width:500px){
  width: 80%;
  height: 13rem;
}
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