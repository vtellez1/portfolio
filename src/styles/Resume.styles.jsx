import styled from 'styled-components';

export const BigDiv = styled.div`
margin: 7rem 0rem;
padding: 2rem 0rem;
border-top: 1px solid #484848;
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

export const ResumeLink = styled.a`
color: white;

&:hover{
  background-color:white; 
  color: black;
  text-decoration: none;
  }
`

export const ResumeWhole = styled.div`
padding-top: 2rem;
display: flex;
flex-direction: column;
`
export const Header = styled.div`
padding: 1rem;
color:navy;
background-color: #F5F5F5;

`
export const Main = styled.div`
display: flex;
justify-content: center;

@media(max-width:500px){
  flex-direction: column;
  align-items: center;
  margin: 0rem;
}
`

export const Title = styled.p`
font-size: 1.4rem;

@media(max-width:500px){
  font-size: 1.2rem;
}
`

export const SubTitle = styled.h3`
@media(max-width:500px){
  font-size: 1.4rem;
}
`

export const Left = styled.div`
width: 70%;
text-align: left;
padding:1rem;

@media(max-width:500px){
  width: 95%;
}
`

export const Projects = styled.div`
`

export const Employment = styled.div`
`

export const Right = styled.div`
width: 28%;
text-align: left;
padding: 1rem;

@media(max-width:500px){
  width: 95%;
}
`

export const SectionTitle = styled.h4`
color: navy;
font-weight: bold;
border-bottom: solid black 1px;

@media(max-width:500px){
  font-size: 1.3rem;
}
`
export const Contact = styled.div`
padding: 1rem 0rem;
`
export const TitleDates = styled.div`
display: flex;
justify-content: space-between;

`

export const ProjectBody = styled.div`
line-height: .9rem;
@media(max-width:800px){
  line-height: 1.2rem;
}

`
