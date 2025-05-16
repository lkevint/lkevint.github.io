import React from "react";
import "./App.css";
import { Github, Mail, FileText } from "lucide-react";

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
                <a
                  href="https://github.com/lkevint"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lkevint
                </a>
                <a
                  href="https://github.com/magicianmathematician"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  magicianmathematician
                </a>
              </div>
            )}
          </div>
          <a className="button" href="mailto:liukevint2001@gmail.com">
            <Mail className="icon" /> Contact
          </a>
          <a className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FileText className="icon" /> Resume
          </a>
        </div>
      </section>

      <section className="grid-section">
        <h2 className="section-header">Projects</h2>
        <a
          href="https://github.com/lkevint/OCR_CRNN"
          target="_blank"
          rel="noopener noreferrer"
          className="item-box-link"
        >
          <h3 className="item-title">CRNN for Optical Character Recognition</h3>
        </a>
        <a
          href="https://github.com/DevvyDont/toontown-ranked"
          target="_blank"
          rel="noopener noreferrer"
          className="item-box-link"
        >
          <h3 className="item-title">Ranked Toontown</h3>
        </a>

        <h2 className="section-header">Publications and Abstracts</h2>
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/38919220/"
          target="_blank"
          rel="noopener noreferrer"
          className="item-box-link"
        >
          <h3 className="item-title">
            Serum Creatinine as an Independent Predictor of Moderate to Severe Fibrosis in Chinese American Non-Obese MASLD
          </h3>
        </a>

        <h2 className="section-header">About Me</h2>
        <div className="item-box">
          <p>I'm a mathematics enthusiast.</p>
        </div>
      </section>
    </main>
  );
}
