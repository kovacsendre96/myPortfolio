
import styled from 'styled-components';
import { motion } from "framer-motion";
import blackWallpaper from "../img/black-wallpaper-4.jpg";





export const Head = styled.div`

width:100%;
height: 100vh;
display: flex;
align-items: center;
justify-content:center;
background:url(${blackWallpaper}); 
overflow:hidden;
@media screen and (max-width: 900px) {
       flex-direction:column;

  }







`;




export const Header__left = styled(motion.div)`

width:50%;
display: flex;
align-items: center;
justify-content:center;
flex-direction:column;



h2{
    color: #ffffff;
    font-size:2.5rem;
    @media screen and (max-width: 1200px) {
       font-size:1.9rem;
} 
    @media screen and (max-width: 600px) {
       font-size:0.9rem;
} 
 }
  



span{
    color:#329555;
}

`;


export const Header__right = styled(motion.div)`

width:50%;
display: flex;
align-items: center;
justify-content:center;
@media screen and (max-width: 900px) {
        height:40%;
} 

 img{
    width:100%;
@media screen and (max-width: 900px) {
        width:300px;
} 
 }


`;







export const Line = styled.div`
        width:70%;
        height:3px;
        background:#329555;
        margin: 20px auto 20px auto;
    `;