import React from 'react';
import profile from "../img/profil.jpg";
import { titleAnim, head } from "./animations";
import { motion } from "framer-motion";
import {Head, Header__left, Header__right} from "./styles";


const Header = () => {








    return (


        <Head>

            <Header__left
                 variants={head} 
                 initial="hidden"
                 animate="visible"

            >

                <motion.h2
                    variants={titleAnim}
                    

                >Welcome!
                </motion.h2>


                <motion.h2
                    variants={titleAnim}
                    

                >I am <span>Endre</span>
                </motion.h2>


                <motion.h2
                    variants={titleAnim}
                    

                >This is my portfolio
                </motion.h2>

            </Header__left>



            <Header__right>
              
                 <div  ><img  src={profile} alt="a picture about me" /></div> 
            </Header__right>


        </Head>

    );
};











export default Header