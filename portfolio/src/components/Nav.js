import React from 'react';
import styled from 'styled-components';




const Nav =()=>{


const ScrollHandler = ()=>{
    window.scroll({
        top: 700,
        behavior: 'smooth'
    })
};

const ScrollHandler2 = ()=>{
    window.scroll({
        top: 2900,
        behavior: 'smooth'
    })
};

const ScrollHandler3 = ()=>{
    window.scroll({
        top: 4500,
        behavior: 'smooth'
    })
};



return(
    <NavContainer>
            <a onClick={ScrollHandler}>About</a>
            <a onClick={ScrollHandler2} >Prjoects</a>
            <a onClick={ScrollHandler3}>Contact</a>
        </NavContainer>

);
};





export default Nav;



const NavContainer = styled.nav`
display:flex;
width:100%;
background:#329555;
align-items:center;
justify-content:space-around;
position:fixed;
z-index:1;
a{

color: white;
text-transform:uppercase;
font-size:1.5rem;
padding:10px 15px 10px 15px;
    transition:0.5s;


&:hover{
    
    
    border-bottom: 1px solid whitesmoke;
   
    

  
    cursor:pointer;

}

@media screen and (max-width: 600px) {
            font-size:1rem;
  

}
}
`;