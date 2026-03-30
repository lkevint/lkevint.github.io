<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
=======
import React from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
>>>>>>> Stashed changes
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Contact from "./components/Contact/Contact";
const App = () => {

  return (
    <div className="app">
      <main>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
