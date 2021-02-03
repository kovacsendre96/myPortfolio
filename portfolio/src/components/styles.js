
import styled from 'styled-components';
import { motion } from "framer-motion";
import blackWallpaper from "../img/black-wallpaper-4.jpg";




export const Head = styled.div`


background-image:url(${blackWallpaper});
background-size:cover;
height: 100vh;
display: flex;
align-items: center;
text-align:center;
padding: 1rem 5rem;
@media screen and (max-width: 900px) {
       flex-direction:column;
       padding-top:50px;
       height:110vh;
      
    
  }


`;




export const Header__left = styled(motion.div)`
flex: 1;
h2{
    color: #ffffff;
}


span{
    color:#329555;
}

`;


export const Header__right =styled(motion.div)`


flex: 1;
overflow: hidden;


img{
width: 350px;
border-radius:25px;
filter: grayscale(100%);

@media screen and (max-width: 1200px) {
       width:280px;
  }





}
`;

export const Line = styled.div`
        width:70%;
        height:2px;
        background:#329555;
        margin: 0px auto 20px auto;
    `;