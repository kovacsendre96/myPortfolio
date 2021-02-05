import React from 'react';
import TimeLine from './TimeLine';
import ProgrammingSkills from "./ProgrammingSkills";
import OtherSkills from "./OtherSkills";
import styled from 'styled-components';
import whiteSmoke from '../img/whitesmoke.png';
import {Line} from "./styles";




const About = () =>{

return(
  <>
  <AboutSetting id="about" > 

  <h1>About me</h1>
  <Line />
  <TimeLine />
  <SpaceBetweenContents />  
  <Heading>My programming skills</Heading>
  <SpaceBetweenContents />  
  <ProgrammingSkills />
  <SpaceBetweenContents />  
  <Heading>Other qualities that characterize me</Heading>

  <OtherSkills />
<SpaceBetweenContents />  
  </AboutSetting>
  </>

);

};


export default About;


const AboutSetting = styled.div`
  background:url(${whiteSmoke});
`;


const Heading=styled.h3`
  font-size:2.5rem;
  text-align:center;
  letter-spacing:1px;
  @media screen and (max-width: 900px) {
        font-size:1.5rem;
  }
  @media screen and (max-width: 600px) {
        font-size:1.2rem;
  }

`;

const SpaceBetweenContents = styled.div`
  width:100%;
  height:80px;

`;
