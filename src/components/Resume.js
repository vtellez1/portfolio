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
border: solid black 1px;
padding: 1.5rem;
`
const Main = styled.div`
display: flex;
justify-content: center;
`
const Left = styled.div`
width: 70%;
text-align: left;
padding:1rem;
`

const Projects = styled.div`
padding-bottom: 1rem;

`

const Employment = styled.div`
`

const Right = styled.div`
width: 28%;
text-align: left;
padding: 1rem;
`

const SectionTitle = styled.h4`
color: navy;
font-weight: bold;
border-bottom: solid black 1px;
`



function Resume() {
  return (
    <BigDiv>

      <a download href={ResumePdf}>Download PDF Resume</a>

      <ResumeWhole>
        <Header>
          <h1>Vanessa Tellez</h1>
          <h3>Full Stack Developer</h3>
        </Header>

        <Main>
          <Left>
            <Projects>
              <SectionTitle>Projects</SectionTitle>

              <div>
              <h5>Kansha Rewards	Feb. 2020​ to Mar. 2020​</h5>
              <p>A workplace recognition program to appreciate peers through rewards and personalized messages.</p>
              <p>JavaScript | React | Redux | SASS | NodeJS | Postgres</p>
              <ul>
                <li>Enhanced build-on project on a remote cross functional team of 8 developers over 8 weeks.</li>
                <li>Developed application with front end and back end skills to reach product vision goals.</li>
                <li>Implemented bulk-user upload capabilities with CSV files and reports on user recognition count. </li>
              </ul>
              </div>

              <div>
                <h5>Simmr	Feb. 2020​ to Feb. 2020​</h5>
                <p>A professional platform for chefs to display their best recipes for the world to view with photos and ingredient lists.</p>
                <p>JavaScript | React | Redux | Material UI | NodeJS | Express</p>
                <ul>
                  <li>Developed project on a remote team of 2 front-end developers, 2 backend developer, and 1 UI developer in 4 days.</li>
                  <li>Built Web API in coordination with front-end team and backend developer partner to meet client requirements.</li>
                  <li>Delivered an API using the REST architectural pattern, provided data persistence, incorporated authentication, and included testing.</li>
                </ul>
              </div>

              <div>
                <h5>Chef Portfolio	Jan. 2020​ to Jan. 2020​</h5>
                <p>A professional platform for chefs to display their best recipes for the world to view with photos and ingredient lists.</p>
                <p>JavaScript | React | Redux | SASS | NodeJS | Express</p>
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
                <h6>eSupport Specialist	Aug. 2018​ to Sept. 2019​</h6>
                <ul>
                  <li>Evaluated customer's situation and needs to problem solve for long-term solution.</li>
                  <li>Applied company's core values and training tools to deliver exceptional customer service and build life long customers.</li>
                  <li>Enhanced customer experience with consistent proposed internal modifications on day to day procedures to management team.</li>
                  <li>Monitored online reputation for customers feedback and handled complaints diligently.</li>
                </ul>
              </div>

              <div>
                <h5>LPL Financial	Fort Mill, SC</h5>
                <h6>Direct Business Specialist	Oct. 2017​ to Aug. 2018​</h6>
                <ul>
                  <li>Answered inbound service calls from financial advisers to assist in questions involving outside business and solving related issues.</li>
                  <li>Processed operational transactions and data input while utilizing company applications.</li>
                  <li>Serviced and communicated with representatives through well-written emails, service requests, and internal messaging system.</li>
                  <li>Solved issues through research of submitted documentation and contacting contra firms.</li>
                </ul>
              </div>
            </Employment>

          </Left>
          <Right>
            <div>
              <SectionTitle>Contact</SectionTitle>
              <p> vanessatellez45@gmail.com</p>
              <p>https://twitter.com/vanessa_tellezz</p>
              <p>https://www.linkedin.com/in/tellezvanessa</p>
              <p>https://github.com/vtellez1</p>
            </div>

            <div>
              <SectionTitle>Skills</SectionTitle>
              <h6>CODING LANGUAGES</h6>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>

              <h6>LIBRARIES AND FRAMEWORKS</h6>
              <ul>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>NodeJS</li>
                <li>Knex</li>
                <li>Express</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>NPM</li>
                <li>Yarn</li>
              </ul>

              <h6>DATABASES</h6>
              <ul>
                <li>SQLite</li>
                <li>PostgresSQL</li>
              </ul>

              <h6>VERSION CONTROL</h6>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>VS Code</li>
                <li>MacOS</li>
                <li>Terminal</li>
              </ul>

              <h6>COMMUNICATION SOFTWARE</h6>
              <ul>
                <li>Slack</li>
                <li>Zoom</li>
                <li>Discord</li>
              </ul>

              </div>
            <div>
              <SectionTitle>Education</SectionTitle>
              <p>Full Stack Web Development at Lambda School - Remote | Sept. 2019​ to Current</p>

              <p>University of North Carolina at Charlotte | Political Science | Aug. 2013​ to Dec. 2016</p>
            </div>
          </Right>
        </Main>
      </ResumeWhole>

    </BigDiv>
  
  );
}

export default Resume;