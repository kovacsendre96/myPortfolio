import React, { useState } from 'react';
import styled from 'styled-components';
import blackWallpaper from "../img/black-wallpaper-4.jpg";
import clock from '../img/clock.jpg';
import wedding from '../img/wedding.jpg';
import music from '../img/music.jpg';
import bonrow from '../img/bonrow.jpg';
import todo from "../img/todo.jpg";
import frigider from "../img/frigider.jpg";
import { Line } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects = ({language}) => {

    const [show, setShow] = useState(false);

    const [filter, setFilter] = useState();

    const [info, setInfo] = useState([
        {
            title: 'Music player',
            descriptionEng:'I have participated many online courses where I have acquired basics of React.js. That was my one of favourite learning project which I complemented with my own ideas.',
            descriptionHun: 'Több online kurzuson vettem részt, ahol elsajátítottam a react.js alapjait. Ez volt az egyik kedvenc tanuló projektem, amelyet saját ötleteimmel is kiegészítettem.',
            img: `${music}`,
            link: 'https://kovacsendre96.github.io/music-player/',
            githubLink: 'https://github.com/kovacsendre96/music-player',
        },
        {
            title: 'Wedding page',
            descriptionEng: 'That was the first time when I tested my knowledge and I tried to copy a demo page that has already been designed.',
            descriptionHun:'Ennek az oldalnak a megalkotása volt az első alkalom, amikor egy már előre megtervezett design-t próbáltam lemásolni.',
            img: `${wedding}`,
            link: 'https://kovacsendre96.github.io/my-components/wedding.html',
            githubLink: 'https://github.com/kovacsendre96/my-components',
        },
        {
            title: 'Bonrow',
            descriptionHun: 'Az egyik barátom megkért arra, hogy a zenekari bandájukról csináljak egy bemutatkozó oldalt. Ezt már React Js-ben csináltam meg, hogy gyakoroljam az eddig megszerzett tudásom. A kihívást a desgin megtervezése adta leginkább, amiben teljes szabadkezet kaptam.',
            descriptionEng:'One of my friends asked me to make a webpage about their band. I created it with React.js to develope my knowledge. The page of design challenged me that I got free hand.',
            img: `${bonrow}`,
            link: 'https://kovacsendre96.github.io/bonrow/',
            githubLink: 'https://github.com/kovacsendre96/bonrow',
        },
        {
            title: 'Todo app',
            descriptionHun: 'Sok fórumon és videóban találkoztam a To-do app-el, amit egy jó gyakorlási alapnak gondolok én is. A program megírása közben sok tapasztalatot szereztem. Később az app tovább fejlesztésén gondolkodva született meg a Frigider alkalmazás ötlete',
            descriptionEng:'In many tutorials I met Todo apps. I think that is a good practice. When I created this app I got many expreience and I deepended my knowledge. Later, when I was thinking about further development, the idea of Frigider appplication was born.',
            img: `${todo}`,
            link: 'https://kovacsendre96.github.io/react-todo/',
            githubLink: 'https://github.com/kovacsendre96/react-todo',
        },
        {
            title: 'Clock',
            descriptionHun: 'Sok különböző megvalósítással találkoztam, de tesztelni akartam magamat és végül teljesen önállóan készítettem el ezt az órát.',
            descriptionEng:'I came across many different implementations, but I wanted to test myself and I made this clock completely on my own.',
            img: `${clock}`,
            link: 'https://kovacsendre96.github.io/clock/',
            githubLink: 'https://github.com/kovacsendre96/clock',
        },
        {
            title: 'Frigider',
            descriptionHun:'Ez az app képviseli leginkább a jelenlegi tudásomat. A projectet jelenleg is fejlesztés alatt áll és még sok ötletem várja megvalósítását.'
             +'Rövid bemutató:'
           +'Az alkalmazás segítségével a felhasználó képes számon tartani és rendszerezni a hűtője tartalmát. Az űrlap kitöltéséhez szükség van többek között a berakás dátumára és szavatossági időre. Az adatok segítségével tudja az app az adott terméket kategóriába sorolni és kiszámolni, annak szavatosságát. Ezen kívül még a mennyiség megadása is szükséges, hogy a későbbiekben módosítható legyen.',
            descriptionEng:'This app represents most of my current knowledge. The project is still under development and I have many more ideas waiting to be implemented.'
           +'Short Introduction: The application allows the user to keep track of and organize the contents of their fridge. The form requires the quantities of food and the date of put in and guarantee. The app can categorize the products and calculate its warranty.',          

            img: `${frigider}`,
            link: 'https://kovacsendre96.github.io/Frigider/',
            githubLink: 'https://github.com/kovacsendre96/Frigider',
        }
    ]);






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
            <h1>{language === false ?'My projects' : 'Projektjeim'}</h1>
            <Line />


            <Slider className='slider'{...settings}>
                {info.map((infoItem) =>

                    <Container>

                        <Card onClick={() => {
                            setShow(true);
                            setFilter(info.filter((f) => f.title === infoItem.title));
                        }} style={{ background: `url(${infoItem.img})`, backgroundSize: "cover", }}>

                            <CardBottom> <h5>{infoItem.title}</h5>
                            </CardBottom>
                        </Card>
                        {filter !== undefined &&
                            <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                                
                            >
                                <Modal.Header style={{background:'#329555'}} closeButton>
                                    <Modal.Title  id="example-custom-modal-styling-title">
                                        <p style={{color:'white'}}>{filter[0].title}</p>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img style={{width:'100%',margin:'15px 0px'}} src={`${filter[0].img}`}/>
                                    <p>{language===false?filter[0].descriptionEng:filter[0].descriptionHun}</p>
                                    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                                    <a style={{color:'#329555'}} href={`${filter[0].link}`} target="blanc" >Demo Link <FontAwesomeIcon size="2x" icon={faDesktop} /></a>
                                    <a style={{color:'#329555'}} href={`${filter[0].githubLink}`} target="_blanc">GitHub Link <FontAwesomeIcon size="2x" icon={faGithub} /></a>
                                    </div>

                                </Modal.Body>
                            </Modal>}

                    </Container>

                )}
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
  
  
   cursor:pointer;
   width:300px;
   height:220px;
   display:flex;
   flex-direction:column-reverse;
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
    
    a,h5,span{
        color:#F6F6F6;
        align-self:center;
        width:50%;
        text-align:center; 
        
     }
     a{
         padding:3px;

     }
     span{
         cursor:pointer;
     }

    h5{
      @media(min-height:600px){
        font-size:1rem;
      }
        
    }


   
`;

