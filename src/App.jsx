import React from "react";
import { useState } from "react";
import "./App.css";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
    const [showDropdown, setShowDropdown] = React.useState(false);
    return (
    <main className="main">
      <section className="intro-section">
        <h1 className="title">My Portfolio</h1>
        <p className="subtitle">Subtitle Placeholder.</p>
        <div className="social-links">
            <div className="github-wrapper">
              <div
                className="button github-button"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <Github className="icon" /> GitHub
              </div>
              {showDropdown && (
                <div className="dropdown">
                    <a href="https://github.com/lkevint" target="_blank" rel="noopener noreferrer">
                      lkevint
                    </a>
                    <a href="https://github.com/magicianmathematician" target="_blank" rel="noopener noreferrer">
                      magicianmathematician
                    </a>
                </div>
              )}
            </div>
          <a className="button" href="mailto:liukevint2001@gmail.com">
            <Mail className="icon" /> Contact
          </a>
        </div>
      </section>

      <section className="grid-section">
        <div className="card full-width">
          <h2 className="card-title">Projects</h2>
          <ul>
            <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                    CRNN for Optical Character Recognition
                </a>
            </li>
            <li>Ranked Toontown Developer</li>
          </ul>
        </div>

        <div className="card full-width">
          <h2 className="card-title">Publications</h2>
          <ul>
            <li>CRNN for Optical Character Recognition</li>
            <li>Ranked Toontown Developer</li>
          </ul>
        </div>

        <div className="card full-width">
          <h2 className="card-title">About Me</h2>
          <p>
            I'm a mathematics enthusiast.
          </p>
        </div>
      </section>
    </main>
  );
}
