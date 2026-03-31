import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import "./App.css";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;