import React from 'react';
import styled from 'styled-components';
import blackWallpaper from "../img/black-wallpaper-4.jpg";





const Footer = () => {

    return (
        
            <FooterStyle>
               <p>© <a href="mailto:kovacsendre96@gmail.com">Endre Kovács</a> 2021</p>

            </FooterStyle>
       

    );

};



export default Footer;

const FooterStyle = styled.div`
    width:100%;
    background:url(${blackWallpaper});
    background-size:cover;
    text-align:center;
    font-size:1.2rem;
    padding:15px;
    a{
        color:#329555
    }

`;