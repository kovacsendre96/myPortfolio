import React, {useState} from "react";
import Header from "./components/Header"
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";







function App() {

  const [language, setLanguage] = useState(false);

  return (
    <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}} className="App">
{/* 
      <GlobalStyle />


      <Nav
        language={language}
        setLanguage={setLanguage}
      />
      <Header
        language={language}
        setLanguage={setLanguage}
      />
      <About
        language={language}
        setLanguage={setLanguage}
      />
      <Projects
        language={language}
        setLanguage={setLanguage}
      />
      <Contact
        language={language}
        setLanguage={setLanguage}
      />
      <Footer
        language={language}
        setLanguage={setLanguage}
      /> */}
     <a target="_blank" style={{color:"black",fontSize:"3rem",textDecoration:"underline"}} href="https://www.kovacsendre.com">https://www.kovacsendre.com/</a>
    </div>
  );
}









export default App;
