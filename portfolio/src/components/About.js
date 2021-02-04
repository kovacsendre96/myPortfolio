import React from 'react';
import TimeLine from './TimeLine';
import ProgrammingSkills from "./ProgrammingSkills";
import OtherSkills from "./OtherSkills";
import styled from 'styled-components';
import whiteSmoke from '../img/whitesmoke.png';
import {Line} from "./styles";




const About = () =>{

return(
  <AboutSetting id="about"> 
  <h1>About me</h1>
  <Line />
  <TimeLine />
  <Heading>My programming skills</Heading>
  <ProgrammingSkills />
  <Heading>Other qualities that characterize me</Heading>
  <OtherSkills />

  </AboutSetting>

);

};


export default About;


const AboutSetting = styled.div`
  background:url(${whiteSmoke});
`;


const Heading=styled.h3`
  font-size:2.5rem;
  margin: 20px 0 20px 0;
  text-align:center;
  letter-spacing:1px;
  @media screen and (max-width: 900px) {
        font-size:2rem;
  }

`;

