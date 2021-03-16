import React from 'react';
import TimeLine from './TimeLine';
import ProgrammingSkills from "./ProgrammingSkills";
import OtherSkills from "./OtherSkills";
import styled from 'styled-components';
import whiteSmoke from '../img/whitesmoke.png';
import { Line } from "./styles";
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = ({ language, setLanguage }) => {

  return (
    <>
      <AboutSetting id="about" >

        <h1> {
          language === false ?
            'About' : 'Rólam'
        }</h1>
        <Line />
        <TimeLine 
        language={language}
        />
        <SpaceBetweenContents />
        <Heading> {
          language === false ?
            'My programming skills' : 'Programozási tudásom'
        }</Heading>
        <SpaceBetweenContents />
        <ProgrammingSkills
        language={language}
        />
        <SpaceBetweenContents />
        <Heading>
          {language === false ?
            'Other qualities that characterize me' : 'Egyéb tulajdonságok, amelyek jellemeznek engem'
          }
        </Heading>

        <OtherSkills
        language={language}
        />
        <Alert variant="info">
          <Alert.Heading></Alert.Heading>
          <p className="cv">
            {language === false ?
              'If you are interested in my CV' : 'Ha érdekel az önéletrajzom'
            } <a target="_blanc" href="https://drive.google.com/file/d/12x6KujviIN2OBgzLO2FSV6VggvP_Kths/view?usp=sharing">
              {language === false ?
                'click here to view it in English' : 'kattints ide, hogy megtekintsd angolul'
              }</a> {language === false ?
                'and' : 'és'
              } <a target="_blanc2" href="https://drive.google.com/file/d/14LWWC16xwjgaiGJkApzUlYvI63fSqRGf/view?usp=sharing"> {language === false ?
              'here to view it in Hungarian !' : 'ide, hogy megtekintsd magyarul !'
            }</a></p>
        </Alert>
        <SpaceBetweenContents />
      </AboutSetting>
    </>
  );

};


export default About;


const AboutSetting = styled.div`
  background:url(${whiteSmoke});
  text-align:center;
a{
  text-decoration:underline;
  color:#696969;
}
`;


const Heading = styled.h3`
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
