import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-regular-svg-icons';






const TimeLine = ({ language, setLanguage }) => {






  return (
    <div>


      <TimeLineContainer>

        <CircleWrapper>

          <FontAwesomeIcon className="icon" style={IconStyle} size="5x" icon={faHistory} />


          <ContentContainer>
            <Heading> {
          language === false ?'Past':'Múlt' }</Heading>
            <p >
           
            {
          language === false ?
            'I have always wanted to learn programming, but I didn'+'t have enough time and financial resources.'
           +'During my previous job I realize what I really want. So I saved enough money, to start to learn programming at home, full-time.' : 'Régi vágyam volt programozást tanulni, de nem volt hozzá elég anyagi hátterem sem időm. Korábbi munkámat végezve igazolódott bennem, hogy a programozás az amivel szeretnék foglalkozni. Így elég pénzt spóroltam ahhoz, hogy végre elkezdjek főállásban tanulni otthon.'
        }
            </p>
          </ContentContainer>

        </CircleWrapper>

        
        <CircleWrapper>



          <FontAwesomeIcon className="icon2" style={IconStyle} size="5x" icon={faClock} />



          <ContentContainer >
            <Heading>{
          language === false ?'Present':'Jelen' }</Heading>
            <p>
              {
          language === false ?'It feels really good to finally I can learn what I want.'+
          'I currently study more than 8 hours in a day.'+
          'I am really interested about what I learn, often I don’t even realize how fast the time is passing me.':'Nagy örömömre szolgál végre azt tanulni amit szeretek. Naponta 8 óránál is többet foglalkozok a programozással. Gyakran fel sem tűnik, hogy milyen gyorsan eltelik az idő amikor tanulok.' }
              </p>
          </ContentContainer>



        </CircleWrapper  >


        <CircleWrapper >



          <FontAwesomeIcon  className="icon3" style={{ color: "#329555",  }} size="5x" icon={faHistory} />




          <ContentContainer>
            <Heading>{
          language === false ?'Future':'Jövő' }</Heading>
            <p>
            {
          language === false ?'Now I learn the basic skills at home in a self-taught way, but in the future, I would like to improve it, take it to a higher level, and I would like to work on real projects. My dream is to find a job, where I can develop my programming skills, and get an appropriate knowledge to become a good Frontend developer.':'Úgy érzem, hogy a tudásomra már lehet építeni, így szeretnék elhelyezkedni, ahol valós projektek által bővíthetem tovább az ismereteimet. Az álmom egy olyan munkahelyenen dolgozni, ahol lehetőségem van a szakmai fejlődésre, és sikerül minden szükséges tudást elsajátítanom ahhoz, hogy egy jó Frontend fejlesztőként tartsanak számon.' }
            </p>
          </ContentContainer>

        </CircleWrapper>




      </TimeLineContainer>




    </div>





  );
};
export default TimeLine;



const TimeLineContainer = styled.div`
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
      padding-bottom:25px;

    `;

const CircleWrapper = styled.div`
  
  display:flex;
  align-items:center;
  flex-direction:column;

  .icon3{
    transform:rotateZ(180deg);
    
  }
  .icon2{
    transition:0.7s;
  }

  &:hover{
  .icon{
  transition:1s  ease-out;
  transform:rotate(-720deg);

  }
  .icon2{
  transform:scale(1.1);

  }
  .icon3{
  transition:1s ease-out;
  transform:rotate(-540deg);

  }
  
    
  }


  
  `;

  

export const Heading = styled.h3`
  color:#329555;
  font-size:1.5rem;
  text-align:center;
  padding-bottom:20px;
  
`;


const IconStyle ={
  color:"#329555",
 
}

