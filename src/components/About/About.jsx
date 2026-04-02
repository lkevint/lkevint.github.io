import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { about } from "../../data/portfolio";
import "./About.css";

const About = () => {
  const { title, description, cv, github, githubLinks = [], email } = about;

  const [isGithubMenuOpen, setIsGithubMenuOpen] = useState(false);
  const [isGithubMenuPinned, setIsGithubMenuPinned] = useState(false);
  const githubMenuRef = useRef(null);

  const [isMailMenuOpen, setIsMailMenuOpen] = useState(false);
  const [isMailMenuPinned, setIsMailMenuPinned] = useState(false);
  const mailMenuRef = useRef(null);

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

      if (
        mailMenuRef.current &&
        !mailMenuRef.current.contains(event.target)
      ) {
        setIsMailMenuOpen(false);
        setIsMailMenuPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeGithubMenu = () => {
    setIsGithubMenuOpen(false);
    setIsGithubMenuPinned(false);
  };

  const closeMailMenu = () => {
    setIsMailMenuOpen(false);
    setIsMailMenuPinned(false);
  };

  const handleGithubButtonClick = () => {
    if (isGithubMenuPinned) {
      closeGithubMenu();
    } else {
      closeMailMenu();
      setIsGithubMenuPinned(true);
      setIsGithubMenuOpen(true);
    }
  };

  const handleGithubMouseEnter = () => {
    if (!isGithubMenuPinned) {
      closeMailMenu();
      setIsGithubMenuOpen(true);
    }
  };

  const handleGithubMouseLeave = () => {
    if (!isGithubMenuPinned) {
      setIsGithubMenuOpen(false);
    }
  };

  const handleMailButtonClick = () => {
    if (isMailMenuPinned) {
      closeMailMenu();
    } else {
      closeGithubMenu();
      setIsMailMenuPinned(true);
      setIsMailMenuOpen(true);
    }
  };

  const handleMailMouseEnter = () => {
    if (!isMailMenuPinned) {
      closeGithubMenu();
      setIsMailMenuOpen(true);
    }
  };

  const handleMailMouseLeave = () => {
    if (!isMailMenuPinned) {
      setIsMailMenuOpen(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }

    setIsMailMenuOpen(false);
    setIsMailMenuPinned(false);
  };

  const handleMailtoClick = () => {
    setIsMailMenuOpen(false);
    setIsMailMenuPinned(false);
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
              className={`dropdown-trigger ${isGithubMenuOpen ? "is-open" : ""}`}
              aria-label="Open GitHub links"
              aria-haspopup="true"
              aria-expanded={isGithubMenuOpen}
              onClick={handleGithubButtonClick}
              onFocus={() => {
                if (!isGithubMenuPinned) {
                  closeMailMenu();
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

        {email && (
          <div
            className="github-dropdown"
            ref={mailMenuRef}
            onMouseEnter={handleMailMouseEnter}
            onMouseLeave={handleMailMouseLeave}
          >
            <button
              type="button"
              className={`dropdown-trigger ${isMailMenuOpen ? "is-open" : ""}`}
              aria-label="Open email options"
              aria-haspopup="true"
              aria-expanded={isMailMenuOpen}
              onClick={handleMailButtonClick}
              onFocus={() => {
                if (!isMailMenuPinned) {
                  closeGithubMenu();
                  setIsMailMenuOpen(true);
                }
              }}
            >
              <FaEnvelope className="icon" size={28} />
            </button>

            {isMailMenuOpen && (
              <div className="github-dropdown-menu" role="menu">
                <button
                  type="button"
                  role="menuitem"
                  className="dropdown-menu-button"
                  onClick={handleCopyEmail}
                >
                  Copy email
                </button>

                <a
                  href={`mailto:${email}`}
                  role="menuitem"
                  onClick={handleMailtoClick}
                >
                  Open mail app
                </a>
              </div>
            )}
          </div>
        )}

        <a href={cv} target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
    </section>
  );
};

export default About;