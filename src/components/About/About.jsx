import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { about } from "../../data/portfolio";
import "./About.css";

const About = () => {
  const { title, description, cv, github, githubLinks = [], linkedin } = about;
  const [isGithubMenuOpen, setIsGithubMenuOpen] = useState(false);
  const [isGithubMenuPinned, setIsGithubMenuPinned] = useState(false);
  const githubMenuRef = useRef(null);

  const resolvedGithubLinks =
    githubLinks.length > 0
      ? githubLinks
      : github
      ? [{ label: "GitHub", url: github }]
      : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        githubMenuRef.current &&
        !githubMenuRef.current.contains(event.target)
      ) {
        setIsGithubMenuOpen(false);
        setIsGithubMenuPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGithubButtonClick = () => {
    if (isGithubMenuPinned) {
      setIsGithubMenuPinned(false);
      setIsGithubMenuOpen(false);
    } else {
      setIsGithubMenuPinned(true);
      setIsGithubMenuOpen(true);
    }
  };

  const handleGithubMouseEnter = () => {
    if (!isGithubMenuPinned) {
      setIsGithubMenuOpen(true);
    }
  };

  const handleGithubMouseLeave = () => {
    if (!isGithubMenuPinned) {
      setIsGithubMenuOpen(false);
    }
  };

  return (
    <section className="about" id="about">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="about-links">
        {resolvedGithubLinks.length > 0 && (
          <div
            className="github-dropdown"
            ref={githubMenuRef}
            onMouseEnter={handleGithubMouseEnter}
            onMouseLeave={handleGithubMouseLeave}
          >
            <button
              type="button"
              className={`icon-button ${isGithubMenuOpen ? "is-open" : ""}`}
              aria-label="Open GitHub links"
              aria-haspopup="true"
              aria-expanded={isGithubMenuOpen}
              onClick={handleGithubButtonClick}
              onFocus={() => {
                if (!isGithubMenuPinned) {
                  setIsGithubMenuOpen(true);
                }
              }}
>
              <FaGithub className="icon" size={30} />
            </button>

            {isGithubMenuOpen && (
              <div className="github-dropdown-menu" role="menu">
                {resolvedGithubLinks.map((link) => (
                  <a
                    key={`${link.label}-${link.url}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    role="menuitem"
                    onClick={() => {
                      setIsGithubMenuOpen(false);
                      setIsGithubMenuPinned(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        <a href={linkedin} target="_blank" rel="noreferrer">
          <FaLinkedinIn className="icon" size={30} />
        </a>

        <a href={cv} target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
    </section>
  );
};

export default About;