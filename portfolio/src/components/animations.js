

export const titleAnim = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
      transition: { duration: 1}},
    };  
  
export const head = {
    hidden:{x:100},
    visible:{
        x:10,
         transition:{
             duration: 0.75,
              ease:"easeOut",
              staggerChildren:1,
              when:"afterChildren",
            },
           
        }
};