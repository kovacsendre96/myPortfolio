import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faHtml5, faCss3, faGithub, } from '@fortawesome/free-brands-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ProgrammingSkills = ({ language }) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    };

    return (
        <Container>

            <Slider className='slider'{...settings}>

                <Wrapper>

                    <Card>
                        <ImgWrapper>
                            <FontAwesomeIcon style={{ color: '#E86229', fontSize: '4.5rem' }} icon={faHtml5} />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#FFAFA0" }} icon={faCheck} />{language === false ?' Basic Knowledge of HTML' : ' A HTML alapjai'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#FFAFA0" }} icon={faCheck} />{language === false ?' Structure construction' : ' Struktúra építése'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#FFAFA0" }} icon={faCheck} />{language === false ?' Froms and Validation' : ' Űrlapk és validációk'}</p>


                        </Content>
                    </Card>
                </Wrapper>

                <Wrapper>
                    <Card>
                        <ImgWrapper style={{ background: "#8cd7f7" }}>
                            <FontAwesomeIcon style={{ color: '#0396DE', fontSize: '4.5rem' }} icon={faCss3} />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> {language === false ?' Basic Knowledge of CSS' : ' A CSS alapjai'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> {language === false ?' Responsive desing and Media Queries' : ' Reszponzív desing'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> {language === false ?' Floats Positioning' : ' Elemek pozícionálása'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> {language === false ?' CSS Grid, Flex Box' : ' CSS Grid, Flex Box'}</p>
                        </Content>
                    </Card>
                </Wrapper>
                <Wrapper>
                    <Card>
                        <ImgWrapper style={{ background: "#ede28e" }}>
                            <FontAwesomeIcon style={{ color: '#EFD81D', fontSize: '4.5rem' }} icon={faJs} />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#f2f268" }} icon={faCheck} /> {language === false ?' Syntax and Basic Construct' : ' Javascript szintaktika'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#f2f268" }} icon={faCheck} /> {language === false ?' DOM Manipulation with Vanilla JS, React JS and jQuery' : ' A DOM manipulálása vanilla JS, react JS és jQuery segítségével'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#f2f268" }} icon={faCheck} /> {language === false ?' CSS in JS' : ' CSS írása, manipulálása Javascriptben'}</p>
                        </Content>
                    </Card>
                </Wrapper>

                <Wrapper>
                    <Card>
                        <ImgWrapper style={{ background: "#222222" }}>
                            <FontAwesomeIcon style={{ color: '#57D2F3', fontSize: '4.5rem' }} icon={faReact} />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#222222" }} icon={faCheck} /> {language === false ?' JSX, Installing and use dependencies' : ' Telepítés és használat, JSX ismerete'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#222222" }} icon={faCheck} /> {language === false ?' Create, manipulate and lifting components' : ' Komponensek létrehozása, és props-ok átadása'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#222222" }} icon={faCheck} /> {language === false ?' Styled-components, basics of Sass,framer-motion' : ' Styled-components, framer-motion, Sass alapjai,'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#222222" }} icon={faCheck} /> {language === false ?' Using hooks' : ' Hook-ok használata'}</p>
                        </Content>
                    </Card>
                </Wrapper>

                <Wrapper>
                    <Card>
                        <ImgWrapper style={{ background: "#201E1E" }}>
                            <FontAwesomeIcon style={{ color: '#F7F7F7', fontSize: '4.5rem' }} icon={faGithub} />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#222222" }} icon={faCheck} /> {language === false ?' Create and fork repository' : ' Repositorik létrehozása és másolása'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#222222" }} icon={faCheck} /> {language === false ?' Basic git commands' : ' Gyakori git parancsok'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#222222" }} icon={faCheck} /> {language === false ?' Using commits, push and pull datas' : ' Commitok használata, adatok fel-és letöltése'}</p>
   
                        </Content>
                    </Card>
                </Wrapper>

                <Wrapper>
                    <Card>
                        <ImgWrapper style={{ background: "#450135" }}>
                            <p style={{ color: '#F75EEE', fontSize: "2rem" }}>Adobe Xd</p>
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#F75EEE" }} icon={faCheck} /> {language === false ?' Testing design ideas' : ' Design tervezés'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#F75EEE" }} icon={faCheck} /> {language === false ?' Using Adobe xD to implement a design' : ' A program használata egy design leprogramozásához'}</p>
                            <p> <FontAwesomeIcon style={{ color: "#F75EEE" }} icon={faCheck} /> {language === false ?' Learning design principles, which makes me a better developer' : ' A tervezési elvek elsajátítása, amely jobb fejlesztővé tesz'}</p>
                        </Content>
                    </Card>
                </Wrapper>


            </Slider>
        </Container>

    );


};





export default ProgrammingSkills;

const Container = styled.div`
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
                
                color:#696981 ;
                opacity:0.6;
            
            }
        }

        .cv{
            margin-top:35px;
            text-align:center;
            text-shadow:black;
            width:auto;

            a{
                color:#696981;
            }
        }
`;


const Wrapper = styled.div`
    display:flex;
    margin: 10px auto 0 auto ;
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
   text-align:start;
    &:hover{
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   transform:scale(1.05);
   }
   @media screen and (max-width: 1300px) {
    width:270px;
    height:370px;
  }

   @media screen and (max-width: 900px) {
    width:250px;
    height:350px;
  }
   @media screen and (max-width: 600px) {
    width:220px;
    height:320px;
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
