import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import whiteSmoke from '../img/whitesmoke.png';
import {Line} from "./styles";





const Contact = () => {

    return (
        
            <ContactStyle id="contact">
                <h1>Contact</h1>
                <Line />
                <UpWrapper>
                     <a href="tel:+36706349277"><FontAwesomeIcon className="tel" style={{color:"green", marginRight:"10px"}} size="3x" icon={faPhone} /> +36706349277</a>
                   <a href="mailto:kovacsendre96@gmail.com"><FontAwesomeIcon className="mail" style={{color:"green",marginRight:"10px"}} size="3x" icon={faEnvelope} />kovacsendre96@gmail.com</a>

                </UpWrapper>
                <Line style={{ width: "40%" }} />
                <DownWrapper>
                    <DownIconWrapper>
                      
                        <a  href="https://www.facebook.com/endre.kovacs.52/" target="blank" >  <FontAwesomeIcon className="icon" size="3x" icon={faFacebook} /><br/>Facebook</a>
            </DownIconWrapper>
                    <DownIconWrapper>
                       
                        <a href="https://www.linkedin.com/in/endre-kov%C3%A1cs-a595101b5/" target="blank2" > <FontAwesomeIcon className="icon" size="3x" icon={faLinkedin} /> <br />LinkedIn</a>
                        
            </DownIconWrapper>
                    <DownIconWrapper>
                        <a href="https://github.com/kovacsendre96" target="blank3"><FontAwesomeIcon className="icon" size="3x" icon={faGithub} /><br />GitHub</a>
            </DownIconWrapper>
                </DownWrapper>

            </ContactStyle>
       

    );

};

export default Contact;

const ContactStyle= styled.div`

    background:url(${whiteSmoke});
    padding-bottom:50px;
    
`;




const UpWrapper = styled.div`
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:space-around;
        height:200px;
        
        a{
            text-decoration:none;
            width:300px;
            text-align:center;
            &:hover{
                .tel{

         animation:call 0.5s linear  ;
         
         @keyframes call {
             0%{transform:rotate(0deg);}
             50%{transform:rotate(30deg);}
             100%{transform:rotate(0deg);}
         }
                }


                .mail{
                    
                    animation:call 0.5s linear  ;
                
                @keyframes call {
                    0%{transform:rotate(0deg);}
                    50%{transform:rotate(30deg);}
                    100%{transform:rotate(0deg);}
                }
                }
                

     }
            
        }
        
            .tel{
                padding-right:10px;
                transition:0.3s;
         
        }

            .mail{
                padding-right:10px;
                transition:0.3s;
             
            }
                
            
        
        
    `;



const DownWrapper = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
      
        a{
            text-decoration:none;
            text-align:center;
            padding:50px;
        @media screen and (max-width: 600px) {
            padding:20px;
    }
        }
      
    `;

const DownIconWrapper = styled.div`
    
        display:flex;
        align-items:center;
        transition: 0.5s;
        height:200px;

        .icon{
            color:green;
            transition: 0.75s;
        }
     

       

       
        &:hover{
            transform:rotate(360deg);
            .icon{
                color:#696969;
               
                transform:scale(1.2)
               
            }   
     
        } 


      
    `;

    

