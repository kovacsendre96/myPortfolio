import React from 'react';
import styled from 'styled-components';






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
    background-image: radial-gradient(circle, #000000, #181818, #292929, #3c3c3c, #4f4f4f);
    background-size:cover;
    text-align:center;
    font-size:1.2rem;
    padding:15px;
    a{
        color:#329555
    }

`;