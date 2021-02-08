import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Nav = () => {

    const [toggle, setToggle] = useState(false);



    const ToggleHandler = () =>{
         setToggle(!toggle);
     };
    
    return (
        <NavContainer>
            <MenuBar onClick={ToggleHandler}><FontAwesomeIcon icon={faBars} /> </MenuBar>
            <>
                <Link
                    activeClass="active"
                    to="about"
                    spy="true"
                    smooth="true"
                    offset={-55}
                    duration={500}
                    className={toggle?'nav-links':'nav-links-hide'}>
                    About
                </Link>

                <Link
                    activeClass="active"
                    to="projects"
                    spy="true"
                    smooth="true"
                    offset={-54}
                    duration={500}
                    className={toggle?'nav-links':'nav-links-hide'}>
                    Projects
                </Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy="true"
                    smooth="true"
                    offset={-55}
                    duration={500}
                    className={toggle?'nav-links':'nav-links-hide'}>
                    Contact
                </Link>
            </>

        </NavContainer>

    );
};





export default Nav;



const NavContainer = styled.nav`
display:flex;
width:100%;
background:rgba(50, 149, 85,0.9);
align-items:center;
justify-content:space-around;
position:fixed;
z-index:1;

@media screen and (max-width: 600px) {
    flex-direction:column;    

}



a{

transition:0.5s;
color: white;
text-transform:uppercase;
font-size:1.5rem;
padding:10px 15px 10px 15px;
    


&:hover{
    background:#61bf77;
    
    
   
    

  
    cursor:pointer;

}


}

@media screen and (max-width: 600px) {
    
  .nav-links-hide{
    display:none;
    
}
.nav-links{
    width:100%;
    text-align:center;
    border-bottom:1px solid white;
    border-top:1px solid white;
}
   }     
`;


const MenuBar = styled.a`
   display:none;
   margin:0 -0.5% 0 auto;
   font-size:2.5rem !important;
  
   


   @media screen and (max-width: 600px) {
    display:flex;
  
   }

 
`;