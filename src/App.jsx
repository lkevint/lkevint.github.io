import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;