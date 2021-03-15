import React from 'react';
import styled from 'styled-components';
import blackWallpaper from "../img/black-wallpaper-4.jpg";
import clock from '../img/clock.jpg';
import wedding from '../img/wedding.png';
import music from '../img/music.jpg';
import bonrow from '../img/bonrow.png';
import todo from "../img/todo.png";
import frigider from "../img/frigider.png";
import { Line } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Projects = () => {


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        responsive: [


            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (



        <ProjectsStyle id="projects">
            <h1>My projects</h1>
            <Line />

            <Slider className='slider'{...settings}>
                <Container>

                    <Card style={{ background: `url(${music})`, backgroundSize: "contain", filter: "" }}>
                        <a href="https://kovacsendre96.github.io/music-player/" target="blanc" ></a>
                        <CardBottom> <h5>Music player</h5> <a href="https://github.com/kovacsendre96/react-todo" target="_blanc"><FontAwesomeIcon size="2x" icon={faGithub} />Link</a></CardBottom>
                    </Card>

                </Container>
                <Container>

                    <Card style={{ background: `url(${wedding})`, backgroundSize: "contain" }}>
                        <a href="https://kovacsendre96.github.io/my-components/wedding.html" target="blanc2" ></a>
                        <CardBottom> <h5>Wedding page</h5> <a href="https://github.com/kovacsendre96/my-components" target="_blanc2"><FontAwesomeIcon size="2x" icon={faGithub} />Link</a></CardBottom>
                    </Card>
                </Container>

                <Container>
                    <Card style={{ background: `url(${bonrow})`, backgroundSize: "cover", backgroundRepeat:"no-repeat" }}>
                        <a href="https://kovacsendre96.github.io/bonrow/" target="blanc3" ></a>
                        <CardBottom> <h5>Bonrow</h5> <a href="https://github.com/kovacsendre96/bonrow" target="_blanc3"><FontAwesomeIcon size="2x" icon={faGithub} />Link</a></CardBottom>
                    </Card>
                </Container>

                <Container>
                    <Card style={{ background: `url(${todo})`, backgroundSize: "cover" }}>
                        <a href="https://kovacsendre96.github.io/react-todo/" target="blanc4" ></a>
                        <CardBottom> <h5>To do app</h5> <a href="https://github.com/kovacsendre96/react-todo" target="_blanc4"><FontAwesomeIcon size="2x" icon={faGithub} />Link</a></CardBottom>
                    </Card>
                </Container>

                <Container>
                    <Card style={{ background: `url(${clock})`, backgroundSize: "cover" }}>
                        <a href="https://kovacsendre96.github.io/clock/" target="blanc6" ></a>
                        <CardBottom> <h5>Clock</h5> <a href="https://github.com/kovacsendre96/clock" target="_blanc5"><FontAwesomeIcon size="2x" icon={faGithub} />Link</a></CardBottom>
                    </Card>

                </Container>

                <Container>
                    <Card style={{ background: `url(${frigider})`, backgroundSize: "cover" }}>
                        <a href="https://kovacsendre96.github.io/Frigider/" target="blanc7" ></a>
                        <CardBottom> <h5>Frigider</h5> <a href="https://github.com/kovacsendre96/Frigider" target="_blanc5"><FontAwesomeIcon size="2x" icon={faGithub} />Link</a></CardBottom>
                    </Card>

                </Container>
            </Slider>
        </ProjectsStyle>

    );

};


export default Projects;






const ProjectsStyle = styled.div`
background:url(${blackWallpaper});
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-around;
padding-bottom:100px;

           @media screen and (max-width: 900px) {
            padding-top:50px;
  }
    
    .slider {
      width:70%;
      margin:0 auto 0 auto;
      position: relative;

      .slick-prev:before,
.slick-next:before {
  color: #329555;
  
}
  .slick-dots li.slick-active button:before {
    color:  #329555!important;
}
.slick-dots li button::before {
    
    color: white;
    opacity:0.8;
   
  }
    }
    
`;

const Container = styled.div`
display:flex;
width:70%;
margin: 0 auto 0 auto;
justify-content:center;
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
   align-items:center;
   border-radius: 5px 25px 5px 25px;
   margin-bottom:10px;
   margin:15px auto 15px auto;
   transition:0.8s;
   @media screen and (max-width: 600px) {
    width:210px;
    height:230px;  
  }
  
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