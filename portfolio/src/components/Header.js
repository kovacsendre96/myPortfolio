import React from 'react';
import profile from "../img/profil.png";
import { titleAnim, head } from "./animations";
import { motion } from "framer-motion";
import { Head, Header__left, Header__right } from "./styles";



const Header = ({ language, setLanguage }) => {








    return (


        <Head>

            <Header__left
                variants={head}
                initial="hidden"
                animate="visible"

            >

                <motion.h2
                    variants={titleAnim}


                >{
                        language === false ?
                            'Welcome' : 'Üdvözölöm'
                    }
                </motion.h2>


                <motion.h2
                    variants={titleAnim}


                >
                    {
                        language === false ?
                       ' I am Endre': 'Az oldalamon'
                    }

                </motion.h2>


                <motion.h2
                    variants={titleAnim}


                >
                    {
                        language === false ?
                       ' This is my page': 'Endre vagyok'
                    }
                </motion.h2>

              

            </Header__left>



            <Header__right>
                <img src={profile} />


            </Header__right>


        </Head>

    );
};











export default Header