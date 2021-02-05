import React from 'react';
import styled from 'styled-components';
import blackWallpaper from "../img/black-wallpaper-4.jpg";
import clock from '../img/clock.jpg';
import wedding from '../img/wedding.png';
import blog from '../img/blog.png';
import music from '../img/music.jpg';
import todo from "../img/todo.png";
import bonrow from "../img/bonrow.png";
import {Line} from "./styles";





const Projects = () =>{

return(
    <ProjectsStyle id="projects">

        <h1>My projects</h1>
        <Line />
        <Container>

      
            <Card style={{background:`url(${music})`, backgroundSize:"cover",filter:""}}>
            <a href="https://kovacsendre96.github.io/music-player/" target="blanc" ></a> 
            <CardBottom>Music player</CardBottom>
            </Card>

       

            <Card style={{background:`url(${wedding})`, backgroundSize:"cover"}}>
            <a href="https://kovacsendre96.github.io/my-components/wedding.html" target="blanc2" ></a> 
            <CardBottom>Wedding page</CardBottom>
            </Card>


            
            <Card style={{background:`url(${blog})`, backgroundSize:"cover"}}>
            <a href="https://sadap93.github.io/blog/" target="blanc3" ></a> 
            <CardBottom>Blog</CardBottom>
            </Card>


            
            <Card style={{background:`url(${todo})`, backgroundSize:"cover"}}>
            <a href="https://kovacsendre96.github.io/toDoList//" target="blanc4" ></a>
            <CardBottom>To do app</CardBottom>
            </Card>
        


            <Card style={{background:`url(${clock})`, backgroundSize:"cover"}}>
            <a href="https://kovacsendre96.github.io/clock/" target="blanc6" ></a>
            <CardBottom>Clock</CardBottom>
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
}   
  

   width:300px;
   height:220px;
 /*   border: 10px solid #329555;  */
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   align-items:center;
   border-radius: 5px 25px 5px 25px;
   margin-bottom:10px;
   margin:0 15px 15px 15px;
   transition:0.8s;
   filter:grayscale(100%);

   &:hover{
    transform:scale(1.05);
    filter:grayscale(0%);
   }
   

`;

const CardBottom = styled.div`
    width:100%;
    height:20%;
    background:#329555;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#F6F6F6;
    border-radius:0 0 5px 25px; 
`;


  
