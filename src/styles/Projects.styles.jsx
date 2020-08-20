import styled from 'styled-components';

  export const BigDiv = styled.div`
  margin: 8.5rem 0rem;
  padding-top: 2rem;
  `
  export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1rem 0rem;
  height: auto;
  `

  export const Card = styled.div`
  display: flex;
  padding: 1.5rem 0rem;
  margin: 1rem 0rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media(max-width:800px){
    flex-direction: column;
    align-items: center;
  }

  @media(max-width:500px){
    padding: .5rem;
    margin: .5rem;
    width:100%;
  }
  `
  export const CardImg = styled.img`
  width: 45%;
  height: 21rem;
  padding: 1rem;
  @media(max-width:800px){
    width: 90%;
  }
  @media(max-width:500px){
    width: 80%;
    height: 13rem;
  }
  `

  export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  `

  export const Title = styled.p`
  font-size: 1.4rem;
  @media(max-width:500px){
  font-size: 1.2rem;
}
`

export const CardTitle = styled.h4`
  @media(max-width:500px){
    font-size: 1.2rem;
  }
  `
  export const CardSubTitle = styled.h6`
  @media(max-width:500px){
    font-size: .8rem;
  }
  `

  export const CardText = styled.div`
  height: 10.7rem;
  overflow: scroll;
  margin-bottom: 1rem;
  padding-right: 1.3rem;

  @media(max-width:500px){
    font-size: .8rem;
    text-align: left;
  }
  `
  export const Button = styled.button`
  background-color: #282828;
  color: white;
  font-size: 1rem;
  padding: .2rem;
  border-radius: .4rem;
  &:hover{
  background-color:white; 
  color: black;
  }

  @media(max-width:500px){
    font-size: .7rem;
  }
  `

  export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  `