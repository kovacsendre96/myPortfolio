import React from 'react';
import styled from 'styled-components';
import bookreader from '../img/bookreader.png';
import teamplayer from '../img/teamplayer.png';
import motivate from '../img/motivate.png';
import { faBookReader, faUsers, faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const OtherSkills = () => {

    return (

        <Container>
            <Card>
                <FontAwesomeIcon className="icon" icon={faBookReader} />
                <h3>Self-improvement</h3>
                <p>I am not satisfied with the knowledge I have, I always want to improve.</p>
            </Card>


            <Card>
                <FontAwesomeIcon className="icon" icon={faUsers} />
                <h3>Team player</h3>
                <p>I have always liked to work in a team, and I can easily fit into a company. Work in a team gives me plus motivation, because I feel more responsibility than when I work alone.</p>
            </Card>


            <Card >
                <FontAwesomeIcon className="icon" icon={faFistRaised} />
                <h3>Motivate</h3>
                <p>I want to complete every single step to reach my goal.
                The road is long, but it doesn’t hold me back. I am motivated and it gives me strength to be better every day.</p>
            </Card>
            
        </Container>
        

    );


};

const Container = styled.div`

    display:flex;
    justify-content:space-around;
    width:70%;
    margin: 80px auto 0 auto ;
    flex-wrap:wrap;
    @media screen and (max-width: 1200px) {
        width:100%;
  }

    
   

`;



const Card = styled.div`
   margin:20px;
   display:flex;
   width:200px;
   flex-direction:column;
   align-items:center;
   text-align:center;
       .icon{
           border-radius:50%;
           color:#F6F6F6;
           background:#329555;
           padding:10px;
           width:70px;
           height:70px;
       }

       h3{
           font-size:1.2rem;
           margin:10px;
       }

       @media screen and (max-width: 1200px) {
        
  }
 

`;



export default OtherSkills;