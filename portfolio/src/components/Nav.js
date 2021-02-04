import React from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll"; 




const Nav =()=>{


return(
    <NavContainer>
        <Link 
        activeClass="active"
        to="about"
        spy="true"
        smooth="true"
        offset={-70}
        duration={500}
        >
        About
        </Link>

        <Link 
        activeClass="active"
        to="projects"
        spy="true"
        smooth="true"
        offset={-70}
        duration={500}
        >
        Projects
        </Link>

        <Link 
        activeClass="active"
        to="contact"
        spy="true"
        smooth="true"
        offset={-70}
        duration={500}
        >
        Contact
        </Link>

            
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