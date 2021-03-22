import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';



const Nav = ({ language, setLanguage }) => {



    const [toggle, setToggle] = useState(false);
    const [toggleSettings, setToggleSettings] = useState(false);



    const ToggleSettingsHandler = () => {
        setToggleSettings(!toggleSettings);

    };

    const ToggleHandler = () => {
        setToggle(!toggle);


    };

    return (
        <NavContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <div style={{ display: 'flex', color: 'white', width: '120px', marginLeft: '20px' }}>
                    <FontAwesomeIcon className='icon' onClick={ToggleSettingsHandler} icon={faCog} size="2x" />
                    <div className={toggleSettings ? `settings` : `none`}>
                        <button onClick={() => { setLanguage(true); setToggleSettings(!toggleSettings); }}>HUN</button>
                        <button onClick={() => { setLanguage(false); setToggleSettings(!toggleSettings); }} >ENG</button>
                    </div>
                </div>
                <MenuBar onClick={ToggleHandler}><FontAwesomeIcon icon={faBars} /> </MenuBar>

            </div>
            <div className='nav-links'>
                <Link
                    activeClass="active"
                    to="about"
                    spy="true"
                    smooth="true"
                    offset={-55}
                    duration={500}
                    className={toggle ? 'nav-links' : 'nav-links-hide'}
                    onClick={ToggleHandler}
                >
                    {
                        language === false ?
                            'About' : 'Rólam'
                    }

                </Link>

                <Link
                    activeClass="active"
                    to="projects"
                    spy="true"
                    smooth="true"
                    offset={-54}
                    duration={500}
                    className={toggle ? 'nav-links' : 'nav-links-hide'}
                    onClick={ToggleHandler}>
                    {
                        language === false ?
                            'Projects' : 'Projektek'
                    }
                </Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy="true"
                    smooth="true"
                    offset={-55}
                    duration={500}
                    className={toggle ? 'nav-links' : 'nav-links-hide'}
                    onClick={ToggleHandler}>
                    {
                        language === false ?
                            'Contact' : 'Kapcsolat'
                    }
                </Link>
            </div>

        </NavContainer>

    );
};





export default Nav;



const NavContainer = styled.nav`
display:flex;
width:100%;
background:rgb(50, 149, 85);
align-items:center;
justify-content:space-around;
position:fixed;
z-index:1;

@media screen and (max-width: 600px) {
    flex-direction:column;    

}


.none{
    display:none;
}

.nav-links{
    width:100%;
    display:flex;
    justify-content:space-around;
    @media screen and (max-width: 600px) {
    flex-direction:column;
    
  
  
   }
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

   .icon{
       cursor: pointer;
       transition:0.2s;
       &:active{
           padding-top:2px;
       }
   }  

      button{
       width:auto;
       height:auto;
       border:0;
       border-radius:2px;
       cursor:pointer;
       background-image:linear-gradient(#329555,#4cd37b);
       text-shadow:1px 2px 5px rgba(0,0,0,0.5);
       border-bottom:5px solid rgba(0,0,0,0.5);
       border-top:2px solid rgba(255,255,255,.5);
       color:#FDFDFD;
       outline:none;
       margin-left:5px;
&:hover{
background-image:linear-gradient(#21683a,#329555);
}
&:active{
    background-image:linear-gradient(#329555,#21683a);
    border-top:5px solid rgba(0,0,0,0.5);
       border-bottom:2px solid rgba(255,255,255,.5);
    
}

   }
 
`;


const MenuBar = styled.a`
   display:none;
   font-size:2.5rem !important;
   
   
   
  
   


   @media screen and (max-width: 600px) {
    display:flex;
    
  
  
   }

 
`;