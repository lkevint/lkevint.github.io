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
                <a href="https://github.com/lkevint/OCR_CRNN" target="_blank" rel="noopener noreferrer">
                    CRNN for Optical Character Recognition
                </a>
            </li>
            <li>
                <a href="https://github.com/DevvyDont/toontown-ranked" target="_blank" rel="noopener noreferrer">
                    Ranked Toontown
                </a>
            </li>
          </ul>
        </div>

        <div className="card full-width">
          <h2 className="card-title">Publications and Abstracts</h2>
          <ul>
            <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/38919220/" target="_blank" rel="noopener noreferrer">
                    Serum Creatinine as an Independent Predictor of Moderate to Severe Fibrosis in Chinese American Non-Obese MASLD
                </a>
            </li>
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
