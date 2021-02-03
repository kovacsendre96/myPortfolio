import React, {useState} from "react";
import Header from "./components/Header"
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";






function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}




export default App;
