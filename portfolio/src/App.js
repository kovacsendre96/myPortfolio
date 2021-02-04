import React, {useState} from "react";
import Header from "./components/Header"
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Switch, Router, Route} from "react-router-dom";






function App() {
  return (
    <div className="App">
      <Switch/>
        <Route exact path="/nav" component={Nav}/>
        <Route exact path="/header" component={Header}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/footer" component={Footer}/>
      
    </div>
  );
}

{/* <GlobalStyle />
<Nav />
<Header />
<About />
<Projects />
<Contact />
<Footer /> */}


export default App;
