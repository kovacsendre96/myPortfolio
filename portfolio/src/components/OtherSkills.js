import React from 'react';
import styled from 'styled-components';
import bookreader from '../img/bookreader.png'; 
import teamplayer from '../img/teamplayer.png'; 
import motivate from '../img/motivate.png'; 


const OtherSkills = () =>{

    return(

       <Container>
       <Card style={{alignSelf:"flex-start"}}>
           <ImgWrapper> <img src={bookreader} alt="book reader" />
           <h3>Self-improvement</h3>
           </ImgWrapper>
           <p>I would like to develop myself in programming and the other areas that isn't related to it, such as English language, communication skills.
            I like to learn, and this is especially true when I learn what I like, what I care about, or what benefits to me.
           </p>
       </Card>


       <Card style={{alignSelf:"center"}}>
           <ImgWrapper> <img src={teamplayer} alt="team play" />
           <h3>Team player</h3>
           </ImgWrapper>
           <p>I have always liked to work in a team, and i can easily fit into a company. It gives me plus motivation, because I feel more responsibility than when I work alone. In a team I can learn to the others.</p>

       </Card>


       <Card style={{alignSelf:"flex-end"}}>
           <ImgWrapper> <img src={motivate} alt="motivate" />
           <h3>Motivate</h3>
           </ImgWrapper>
           <p>I want to complete every single step to reach my goal.
The road is long, but it doesn’t hold me back.
I am motivated and it gives me strength to be better every day.</p>

       </Card>
       </Container>

    );


};

const Container= styled.div`

    display:flex;
    justify-content:space-around;
    width:70%;
    margin: 80px auto 0 auto ;
    flex-direction:column;
    @media screen and (max-width: 1200px) {
        width:100%;
  }

    
   

`;



const Card = styled.div`
   width:600px;
   height:220px;
   border: 1px solid black ;
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius: 5px 25px 5px 25px;
   margin-bottom:10px;
   background:white;
   transition:0.5s;
   @media screen and (max-width: 600px) {
       width:80%;
       align-items:center;
  }

@media screen and (max-width: 900px) {
    
    align-self:center !important ;
}

   &:hover{
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

   }

   img{
       width:100%;
       margin-bottom:10px;

   }
   

`;

const ImgWrapper = styled.div`
    border-radius:50%;
    object-fit:cover;
    display:flex;
    flex-direction:column;
    margin-right:20px;
    text-align:center;
    @media screen and (max-width: 900px) {
img{width:70%;
}
h3{
    font-size:80%;
}
}
`;

export default OtherSkills;