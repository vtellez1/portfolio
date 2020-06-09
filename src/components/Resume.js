import React from 'react';
import styled from 'styled-components';
import ResumePdf from '../pdf/Resume.pdf';

const BigDiv = styled.div`
margin: 7rem 0rem;
padding: 2rem 0rem;
`
const ResumeWhole = styled.div`
padding-top: 2rem;
display: flex;
flex-direction: column;
`
const Header = styled.div`
padding: 1rem;
color:navy;
background-color: #F5F5F5;

`
const Main = styled.div`
display: flex;
justify-content: center;

@media(max-width:500px){
  flex-direction: column;
  align-items: center;
  margin: 0rem;
}
`

const Title = styled.h1`
@media(max-width:500px){
  font-size: 1.8rem;
}
`

const SubTitle = styled.h3`
@media(max-width:500px){
  font-size: 1.4rem;
}
`

const Left = styled.div`
width: 70%;
text-align: left;
padding:1rem;

@media(max-width:500px){
  width: 95%;
}
`

const Projects = styled.div`
`

const Employment = styled.div`
`

const Right = styled.div`
width: 28%;
text-align: left;
padding: 1rem;

@media(max-width:500px){
  width: 95%;
}
`

const SectionTitle = styled.h4`
color: navy;
font-weight: bold;
border-bottom: solid black 1px;

@media(max-width:500px){
  font-size: 1.3rem;
}
`
const Contact = styled.div`
padding: 1rem 0rem;
`
const TitleDates = styled.div`
display: flex;
justify-content: space-between;

`

const ProjectBody = styled.div`
line-height: .9rem;
@media(max-width:800px){
  line-height: 1.2rem;
}

`


function Resume() {
  return (
    <BigDiv>

      <a download href={ResumePdf}>Download PDF Resume</a>

      <ResumeWhole>
        <Header>
          <Title>Vanessa Tellez</Title>
          <SubTitle>Full Stack Developer</SubTitle>
          <p><span style={{color: "black"}}><i class="fas fa-map-pin"></i></span> Charlotte, NC</p>
        </Header>

        <Main>
          <Left>
            <Projects>
              <SectionTitle>Projects</SectionTitle>

              <div>
              <TitleDates>
                <h5><a href='https://kansharewards.com/'>Kansha Rewards</a></h5>
                <h6>Feb. 2020​ to Mar. 2020​</h6>
              </TitleDates>
              <ProjectBody>
              <p>A workplace recognition program to appreciate peers through rewards and personalized messages.</p>
              <p>Tech stack: JavaScript | React | Redux | SASS | NodeJS | Postgres</p>
              <p><a href='https://github.com/Lambda-School-Labs/kansha-fe'>Front-end Repo | </a> <a href='https://github.com/Lambda-School-Labs/kansha-be'>Backend Repo</a> </p>
              </ProjectBody>
              <ul>
                <li>Enhanced build-on project on a remote cross functional team of 8 developers and a UX Designer over 8 weeks.</li>
                <li>Developed application with front end and back end skills to reach product vision goals.</li>
                <li>Implemented bulk-user upload capabilities with CSV files and reports on user recognition count. </li>
              </ul>
              </div>

              <div>
                <TitleDates>
                 <h5><a href='https://deploy-inky.now.sh/home'>Simmr</a></h5>
                 <h6>Feb. 2020​</h6> 
                </TitleDates>

                <ProjectBody>
                <p>Professional platform for chefs to display recipes for public view with photos and ingredient lists.</p>
                <p>Tech Stack: JavaScript | React | Redux | Material UI | NodeJS | Express</p>
                <p><a href='https://github.com/chefPassport/backend'>Backend Repo</a></p>
                </ProjectBody>

                <ul>
                  <li>Developed project on a remote team of 2 front-end developers, 2 backend developer, and 1 UI developer in 4 days.</li>
                  <li>Built Web API in coordination with front-end team and backend developer partner to meet client requirements.</li>
                  <li>Delivered an API using the REST architectural pattern, provided data persistence, incorporated authentication, and included testing.</li>
                </ul>
              </div>

              <div>
                <TitleDates>
                 <h5><a href='https://deploy-inky.now.sh/home'>Chef Portfolio</a>​</h5>
                 <h6>Jan. 2020​</h6> 
                </TitleDates>
                
                <ProjectBody>
                <p>Professional platform for chefs to display recipes for public view with photos and ingredient lists.</p>
                <p>Tech Stack: JavaScript | React | Redux | SASS | NodeJS | Express</p>
                <p><a href='https://github.com/ft-bw-chef-portfolio/front-end'>Front-end Repo</a></p>
                </ProjectBody>

                <ul>
                  <li>Built project on a remote team of 4 front-end developers, 1 backend developer, and 2 UI developers in 4 days.</li>
                  <li>Guided junior developers as a front-end framework developer to meet daily goals.</li>
                  <li>Developed state management for application, handled HTTP requests for all CRUD operations, and implemented client-side authentication in conjunction with backend developer.</li>
                  
                </ul>
              </div>
            </Projects>

            <Employment>
              <SectionTitle>Employment</SectionTitle>
              <div>
                <h5>Morris-Jenkins	Charlotte, NC</h5>
                <TitleDates>
                  <h6>eSupport Specialist</h6>	
                  <h6>Aug. 2018​ to Sept. 2019​</h6>
                  </TitleDates>
                <ul>
                  <li>Evaluated customers' situations and needs to problem-solve for long-term solutions.</li>
                  <li>Applied company core values and resources to deliver exceptional service and build life long customers.</li>
                  <li>Enhanced customer experience with consistent proposed internal modifications on the daily procedures to the management team. </li>
                </ul>
              </div>

              <div>
                <h5>LPL Financial	Fort Mill, SC</h5>
                <TitleDates>
                 <h6>Direct Business Specialist</h6> 
                   <h6>	Oct. 2017​ to Aug. 2018​</h6>
                </TitleDates>
                
                <ul>
                  <li>Aided financial advisers in inquiries involving clients' external business investments and solving related issues.</li>
                  <li>Serviced and communicated with representatives through well-written emails, service requests, and internal messaging system.</li>
                  <li>Solved issues through research of submitted documentation and contacting contra firms.</li>
                </ul>
              </div>
            </Employment>

          </Left>
          <Right>
            <div>
              <SectionTitle>Contact</SectionTitle>
              <Contact>
              <p><a href='mailto:vanessatellez45@gmail.com'><i style={{color: "black"}} class="fas fa-envelope fa-1x"> vanessatellez45@gmail.com</i></a></p>
              <p><a href='https://twitter.com/vanessa_tellezz'><i style={{color: "black"}} class="fab fa-twitter-square fa-1x"> @vanessa_tellezz</i></a></p>
              <p><a href='https://www.linkedin.com/in/tellezvanessa/'><i style={{color: "black"}}  class="fab fa-linkedin fa-1x"> linkedin.com/in/tellezvanessa </i></a></p>
              <p><a href='https://github.com/vtellez1'><i style={{color: "black"}} class="fab fa-github fa-1x"> vtellez1 </i></a></p>
              </Contact>
            </div>

            <div>
              <SectionTitle>Skills</SectionTitle>
              <h6>CODING LANGUAGES:</h6>
              <p>HTML, CSS, JavaScript</p>

              <h6>LIBRARIES AND FRAMEWORKS</h6>
              <p>
                ReactJS,
                Redux,
                NodeJS,
                Knex,
                Express,
                SASS,
                Bootstrap,
                NPM,
                Yarn,
              </p>

              <h6>DATABASES</h6>
              <p>SQLite, PostgresSQL </p>

              <h6>VERSION CONTROL</h6>
              <p>Git, Github, Heroku, Netlify,VS Code, MacOS,Terminal </p>

              <h6>COMMUNICATION SOFTWARE</h6>
              <p>Slack, Zoom, Discord </p>
              

              </div>
            <div>
              <SectionTitle>Education</SectionTitle>
              <h6>Full Stack Web Development at Lambda School | Remote | Sept. 2019​ to Current</h6>
              <p>9+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science and fullstack web development.</p>

             

              <h6>University of North Carolina at Charlotte | Political Science | Charlotte, NC | Aug. 2013​ to Dec. 2016</h6>
              <p>Cum Laude | Order of Omega - Honor Society for Greek Leaders | Lambda Theta Alpha Latin Sorority, Inc. | Hispanic College Awareness Program (HCAP)</p>
            </div>
          </Right>
        </Main>
      </ResumeWhole>

    </BigDiv>
  
  );
}

export default Resume;