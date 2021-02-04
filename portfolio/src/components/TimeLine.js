import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-regular-svg-icons';






const TimeLine = () => {






  return (
    <div>


      <AboutContainer>

        <CircleWrapper>



          <FontAwesomeIcon style={{ color: "#329555" }} size="5x" icon={faHistory} />



          <ContentContainer>
            <Heading>Past</Heading>
            <p >
            I have always wanted to learn programming, but I didn't have enough time and financial resources.
            During my previous job I realize what I really want. So I saved enough money, to start to learn programming at home, full-time.
            </p>
          </ContentContainer>

        </CircleWrapper>


        <CircleWrapper>



          <FontAwesomeIcon style={{ color: "#329555" }} size="5x" icon={faClock} />



          <ContentContainer >
            <Heading>Present</Heading>
            <p>

              It feels really good to finally I can learn what I want.
              I currently study more than 8 hours in a day.
              I am really interested about what I learn, often I don’t even realize how fast the time is passing me.

              </p>
          </ContentContainer>



        </CircleWrapper  >


        <CircleWrapper >



          <FontAwesomeIcon style={{ color: "#329555",transform:"rotateY(180deg)" }} size="5x" icon={faHistory} />




          <ContentContainer>
            <Heading>Future</Heading>
            <p>Now I learn tha basic skills at home in a self-taught way, but in the future, I'd like to improve it, take it to a higher level, and I'd like to work on real projects. My dream is to find a job, where I can develop my programming skills, and get an appropriate knowledge to become a good Frontend developer.</p>
          </ContentContainer>

        </CircleWrapper>




      </AboutContainer>




    </div>





  );
};
export default TimeLine;



const AboutContainer = styled.div`

    padding-top:100px;
    padding-bottom:100px;
    display: flex;
    margin-left:auto;
    margin-right:auto;
    width:70%;
    justify-content:space-between;

    @media screen and (max-width: 1200px) {
      width:100%;
    
  }

  @media screen and (max-width: 900px) {
      flex-direction:column;
    
  }

    
   

    `;


const ContentContainer = styled.div`

      width :300px;

    `;

const CircleWrapper = styled.div`
  
  display:flex;
  align-items:center;
  flex-direction:column;

  
  `;

export const Heading = styled.h3`
  color:#329555;
  font-size:1.5rem;
  text-align:center;
  padding-bottom:20px;
`;


