import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import Html from '../img/html5.png'
import Css from '../img/css-logo.png'
import Js from '../img/js.png';


const ProgrammingSkills = () =>{

    return(

        <Wrapper>
           

            <Card>
                <ImgWrapper>
                    <img src={Html} alt="html logo" />
                </ImgWrapper>
                <Content>
                    <p> <FontAwesomeIcon style={{color:"#FFAFA0"}} icon={faCheck} /> Basic Knowledge of HTML</p>                                                                           
                    <p> <FontAwesomeIcon style={{color:"#FFAFA0"}} icon={faCheck} /> Structure construction</p>
                    <p> <FontAwesomeIcon style={{color:"#FFAFA0"}} icon={faCheck} /> Froms and Validation</p>
                   
                   
                  
                </Content>
            </Card>


            <Card>
                <ImgWrapper style={{background:"#8cd7f7"}}>
                    <img src={Css} alt="css logo" /> 
                </ImgWrapper>
                <Content>
                    <p> <FontAwesomeIcon style={{color:"#8CD7F7"}} icon={faCheck} /> Basic Knowledge of CSS</p>
                    <p> <FontAwesomeIcon style={{color:"#8CD7F7"}} icon={faCheck} /> Responsive desing and Media Queries</p>
                    <p> <FontAwesomeIcon style={{color:"#8CD7F7"}} icon={faCheck} /> Floats Positioning</p>
                    <p> <FontAwesomeIcon style={{color:"#8CD7F7"}} icon={faCheck} /> CSS Grid, Flex Box</p>
                </Content>
            </Card>


            <Card>
                <ImgWrapper style={{background:"#f2f268"}}>
                    <img src={Js} alt="javascript logo" /> 
                </ImgWrapper>
                <Content>
                    <p> <FontAwesomeIcon style={{color:"#f2f268"}} icon={faCheck} /> Syntax and Basic Construct</p>
                    <p> <FontAwesomeIcon style={{color:"#f2f268"}} icon={faCheck} /> DOM Manipulation with Vanilla JS and jQuery</p>
                    <p> <FontAwesomeIcon style={{color:"#f2f268"}} icon={faCheck} /> Basics of React.js</p>
                    <p> <FontAwesomeIcon style={{color:"#f2f268"}} icon={faCheck} /> CSS in JS</p>
                </Content>
            </Card>

          

        </Wrapper>


    );


};

export default ProgrammingSkills;


const Wrapper = styled.div`
    display:flex;
    margin: 0 auto 0 auto ;
    width:80%;
 


    @media screen and (max-width: 1200px) {
        width:100%;
  }

  @media screen and (max-width: 900px) {
        flex-direction:column;
  }
`;


const Card = styled.div`
    background:white;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
    width:300px;
    height:400px;
    border: 1px solid whitesmoke;
    border-radius: 20px;
   transition:0.5s;
    &:hover{
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   transform:scale(1.1);
   }


`;

const ImgWrapper = styled.div`
    height:30%;
    background:rgba(255, 54, 17,0.4);
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 20px 20px 0px 0px;
    
    
    img{
        width:25%;
        
    }
`;


const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around;
    height:100%;
    padding:15px;

`;
