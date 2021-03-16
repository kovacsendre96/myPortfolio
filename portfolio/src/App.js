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
    <div className="App">

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
      />
    </div>
  );
}









export default App;
