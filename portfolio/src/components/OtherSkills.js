import React from 'react';
import styled from 'styled-components';
import { faBookReader, faUsers, faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const OtherSkills = ({ language }) => {

    return (

        <Container>
            <Card>
                <FontAwesomeIcon className="icon" icon={faBookReader} />
                <h3>{
          language === false ?
            'Self-improvement' : 'Önfejlesztő'
        }</h3>
                <p>{
          language === false ?
            'I am not satisfied with the knowledge I have, I always want to improve.' : 'Nem elégszem meg az aktuális tudásommal, mindig szeretnék továbbfejlődni.'
        }</p>
            </Card>


            <Card>
                <FontAwesomeIcon className="icon" icon={faUsers} />
                <h3>{
          language === false ?
            'Team player' : 'Csapatjátékos'
        }</h3>
                <p>{
          language === false ?
            'I have always liked to work in a team, and I can easily fit into a company. Work in a team gives me plus motivation, because I feel more responsibility than when I work alone.' : 'Mindig is szerettem csapatban dolgozni, és könnyen be is illeszkedem egy társaságba. A csapatban való dolgozás során több felelősséget érzek a saját munkám iránt.'
        }</p>
            </Card>


            <Card >
                <FontAwesomeIcon className="icon" icon={faFistRaised} />
                <h3>{
          language === false ?
            'Motivate' : 'Motivált'
        }</h3>
                <p>
                {
          language === false ?
            'I want to complete every single step to reach my goal.'+
            'The road is long, but it doesn’t hold me back. I am motivated and it gives me strength to be better every day.' : 'Minden egyes lépcsőfokot meg szeretnék mászni a siker érdekében. Tudom hogy a sikerhez vezető út hosszú, de elkötelezett vagyok, hogy minden nap jobbnál jobb legyek.'
        }</p>
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