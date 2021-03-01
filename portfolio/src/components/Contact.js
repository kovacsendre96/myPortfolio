import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import whiteSmoke from '../img/whitesmoke.png';
import { Line } from "./styles";
import emailjs from 'emailjs-com';





const Contact = () => {

    const [send, setSend] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();



    const NameHandler = (e) => {
        setName(e.target.value)

    };

    const EmailHandler = (e) => {
        setEmail(e.target.value)

    };

    const MessageHandler = (e) => {
        setMessage(e.target.value)

    };


    function sendEmail(e) {
        e.preventDefault();

        if ((name === undefined) || (email === undefined) || (message === undefined)) {
            alert("Fields marked with an asterisk (*) are required");

        }
        else {

            setSend(true);
             emailjs.sendForm('gmail', 'template_qnti8q5', e.target, 'user_uOqE4Hh94B4dY8eHywsMZ')
                 .then((result) => {
                     console.log(result.text);
                 }, (error) => {
                     console.log(error.text);
                 }); 
            e.target.reset();
        }

    };


    return (

        <ContactStyle id="contact">

            <div className='card'>



                <h1>Contact</h1>
                <Line />
                <UpWrapper>

                    <Form onSubmit={sendEmail}>
                        <div className="txt">
                            <label for="name">Name*</label>
                            <input onChange={NameHandler} name="name" id="name" type="name"></input>



                            <label for="email">Email*</label>
                            <input onChange={EmailHandler} name="email" id="email" type="email"></input>



                            <label for="message">Message*</label>
                            <input onChange={MessageHandler} name="message" id="message" type="message"></input>
                        </div>
                        <input className="button" type='submit' value='Send'></input>
                    </Form>
                    <div className={send ? 'alert-message' : 'alert-message-hide'}>The message was sent successfully.</div>
                    <Line />
                    <div className="icon-wrapper">
                        <a href="tel:+36706349277"><FontAwesomeIcon className="tel" style={{ color: "green", marginRight: "10px" }} size="3x" icon={faPhone} /> +36706349277</a>
                        <a href="mailto:kovacsendre96@gmail.com"><FontAwesomeIcon className="mail" style={{ color: "green", marginRight: "10px" }} size="3x" icon={faEnvelope} />kovacsendre96@gmail.com</a>

                    </div>
                </UpWrapper>
                <Line />
                <DownWrapper>
                    <DownIconWrapper>

                        <a href="https://www.facebook.com/endre.kovacs.52/" target="blank" >  <FontAwesomeIcon className="icon" size="3x" icon={faFacebook} /><br />Facebook</a>
                    </DownIconWrapper>
                    <DownIconWrapper>

                        <a href="https://www.linkedin.com/in/endre-kov%C3%A1cs-a595101b5/" target="blank2" > <FontAwesomeIcon className="icon" size="3x" icon={faLinkedin} /> <br />LinkedIn</a>

                    </DownIconWrapper>
                    <DownIconWrapper>
                        <a href="https://github.com/kovacsendre96" target="blank3"><FontAwesomeIcon className="icon" size="3x" icon={faGithub} /><br />GitHub</a>
                    </DownIconWrapper>
                </DownWrapper>
            </div>
        </ContactStyle>


    );

};

export default Contact;

const ContactStyle = styled.div`

    background:url(${whiteSmoke});
    margin: 25px 0px;
    display:flex;
    justify-content:center;
    align-items:center;

.card{

    box-shadow: 0px 0px 38px 0px rgba(0,0,0,0.75);
background:white;
width:60%;
@media(max-width:768px){
    width:100%;
}
}
    
`;

const Form = styled.form`
width:70%;
display:flex;
flex-direction:column;
align-items:center;

@media(max-width:768px){
    width:100%;
}




.txt{
    display:flex;
    flex-direction:column;
    
width:100%;
    margin:5px;
    padding:10px;
    border-radius:10px;
    
  
   input{
       height:30px;
       width:50%;
       border:2px solid #329555;
     
       
   }
   label{
       align-self:flex-start;
   }
   #message{
       width:80%;
       height:100px;

   }
}
   .button{
       width:auto;
       height:auto;
       padding:15px 35px;
       border:0;
       border-radius:15px;
       cursor:pointer;
       background-image:linear-gradient(#329555,#4cd37b);
       text-shadow:1px 2px 5px rgba(0,0,0,0.5);
       border-bottom:5px solid rgba(0,0,0,0.5);
       border-top:2px solid rgba(255,255,255,.5);
       color:#FDFDFD;
       outline:none;
&:hover{
background-image:linear-gradient(#21683a,#329555);
}
&:active{
    background-image:linear-gradient(#329555,#21683a);
    border-top:5px solid rgba(0,0,0,0.5);
       border-bottom:2px solid rgba(255,255,255,.5);
    
}

   }
`;




const UpWrapper = styled.div`
        display:flex;
        align-items:center;
        flex-direction:column;

        .alert-message{
    width:100%;
    height:25px;
    background:green;
    color:white;
    text-align:center;
    margin:20px;

}
.alert-message-hide{
    display:none;
}

        .icon-wrapper{
            display:flex;
            flex-direction:column;
            width:100%;
            align-items:center;
           
         
        }
        
        a{
            text-decoration:none;
           width:260px;
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



