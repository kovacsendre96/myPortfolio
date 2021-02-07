import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`



 

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Yusei Magic', sans-serif;
};
h2{
    font-weight: lighter;
    font-size: 4rem;
    padding: 1rem;
}
h1,h2,h3,h4,h6{
    font-family: 'Caudex', serif;
    color:#329555;
    text-transform:uppercase;
    @media screen and (max-width: 900px) {
        font-size:2rem;
       
  }
}
p,a{
    color:#696969;
    
}

h1{

    font-size: 4rem; 
    text-shadow: 9px 8px 10px rgba(90, 150, 60, 0.5);
    padding-top:30px;
    text-align:center;
       @media screen and (max-width: 900px) {
        font-size:2rem;
  }
}
    `;

    






export default GlobalStyle ;