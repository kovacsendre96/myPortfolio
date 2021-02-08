import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Html from '../img/html5.png'
import Css from '../img/css-logo.png'
import Js from '../img/js.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ProgrammingSkills = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
                            <img src={Html} alt="html logo" />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#FFAFA0" }} icon={faCheck} /> Basic Knowledge of HTML</p>
                            <p> <FontAwesomeIcon style={{ color: "#FFAFA0" }} icon={faCheck} /> Structure construction</p>
                            <p> <FontAwesomeIcon style={{ color: "#FFAFA0" }} icon={faCheck} /> Froms and Validation</p>


                        </Content>
                    </Card>
                </Wrapper>

                <Wrapper>
                    <Card>
                        <ImgWrapper style={{ background: "#8cd7f7" }}>
                            <img src={Css} alt="css logo" />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> Basic Knowledge of CSS</p>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> Responsive desing and Media Queries</p>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> Floats Positioning</p>
                            <p> <FontAwesomeIcon style={{ color: "#8CD7F7" }} icon={faCheck} /> CSS Grid, Flex Box</p>
                        </Content>
                    </Card>
                </Wrapper>
                <Wrapper>
                    <Card>
                        <ImgWrapper style={{ background: "#f2f268" }}>
                            <img src={Js} alt="javascript logo" />
                        </ImgWrapper>
                        <Content>
                            <p> <FontAwesomeIcon style={{ color: "#f2f268" }} icon={faCheck} /> Syntax and Basic Construct</p>
                            <p> <FontAwesomeIcon style={{ color: "#f2f268" }} icon={faCheck} /> DOM Manipulation with Vanilla JS and jQuery</p>
                            <p> <FontAwesomeIcon style={{ color: "#f2f268" }} icon={faCheck} /> Basics of React.js</p>
                            <p> <FontAwesomeIcon style={{ color: "#f2f268" }} icon={faCheck} /> CSS in JS</p>
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
