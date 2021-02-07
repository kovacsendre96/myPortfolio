import React from 'react';
import styled from 'styled-components';
import blackWallpaper from "../img/black-wallpaper-4.jpg";
import clock from '../img/clock.jpg';
import wedding from '../img/wedding.png';
import blog from '../img/blog.png';
import music from '../img/music.jpg';
import todo from "../img/todo.png";
import {Line} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";



const Projects = () =>{

return(
    <ProjectsStyle id="projects">

        <h1>My projects</h1>
        <Line />
        <Container>

      
            <Card style={{background:`url(${music})`, backgroundSize:"cover",filter:""}}>
            <a href="https://kovacsendre96.github.io/music-player/" target="blanc" ></a> 
            <CardBottom> <h5>Music player</h5> <a href="https://github.com/kovacsendre96/react-todo" target="_blanc"><FontAwesomeIcon size="2x" icon={faGithub}/>Link</a></CardBottom>
            </Card>

       

            <Card style={{background:`url(${wedding})`, backgroundSize:"cover"}}>
            <a href="https://kovacsendre96.github.io/my-components/wedding.html" target="blanc2" ></a> 
            <CardBottom> <h5>Wedding page</h5> <a href="https://github.com/kovacsendre96/my-components" target="_blanc2"><FontAwesomeIcon size="2x" icon={faGithub}/>Link</a></CardBottom>

            </Card>


            
            <Card style={{background:`url(${blog})`, backgroundSize:"cover"}}>
            <a href="https://sadap93.github.io/blog/" target="blanc3" ></a> 
            <CardBottom> <h5>Blog</h5> <a href="https://github.com/kovacsendre96/blog" target="_blanc3"><FontAwesomeIcon size="2x" icon={faGithub}/>Link</a></CardBottom>

            </Card>


            
            <Card style={{background:`url(${todo})`, backgroundSize:"cover"}}>
            <a href="https://kovacsendre96.github.io/react-todo/" target="blanc4" ></a>
            <CardBottom> <h5>To do app</h5> <a href="https://github.com/kovacsendre96/react-todo" target="_blanc4"><FontAwesomeIcon size="2x" icon={faGithub}/>Link</a></CardBottom>

            </Card>
        


            <Card style={{background:`url(${clock})`, backgroundSize:"cover"}}>
            <a href="https://kovacsendre96.github.io/clock/" target="blanc6" ></a>
            <CardBottom> <h5>Clock</h5> <a href="https://github.com/kovacsendre96/clock" target="_blanc5"><FontAwesomeIcon size="2x" icon={faGithub}/>Link</a></CardBottom>
            </Card>
      


        </Container>
    
    </ProjectsStyle>

);

};


export default Projects;


const ProjectsStyle =styled.div`
background:url(${blackWallpaper});
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-around;
padding-bottom:100px;

           @media screen and (max-width: 900px) {
            padding-top:50px;
  }
    

`;

const Container = styled.div`
display:flex;
width:70%;
margin: 0 auto 0 auto;
justify-content:center;
flex-wrap:wrap;
align-items:center;
`;

const Card = styled.div`
           @media screen and (max-width: 600px) {
            width:100%;  
  }
            a{
    width:100%;
    height:100%;
    text-decoration:none;
            }   
  

   width:300px;
   height:220px;
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   align-items:center;
   border-radius: 5px 25px 5px 25px;
   margin-bottom:10px;
   margin:15px 15px 15px 15px;
   transition:0.8s;
 
  
   &:hover{
    transform:scale(1.05);
  
            a{
                opacity:1;
                  
            }
         
  
   }
   

`;

const CardBottom = styled.div`
    width:100%;
    height:20%;
    background:#329555;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:0 0 5px 25px;
   
    a,h5{
        color:#F6F6F6;
        align-self:center;
        width:50%;
        text-align:center; 
     }
     a{
         padding:3px;
         opacity:0;
         transition:0.8s;
         @media screen and (max-width: 900px) {
            opacity:1;  
  }
     }

    h5{
      @media(min-height:600px){
        font-size:1rem;
      }
        
    }

    
   
`;


  
