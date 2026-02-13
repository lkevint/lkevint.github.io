import React, { useState } from "react";
import "./Navbar.css";
import { MdMenu, MdClose } from "react-icons/md";

/** Mobile menu*/
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <header className="mobile-menu">
      <button
        className="mobile-menu-toggle"
        onClick={toggle}
        aria-label="Open menu"
        type="button"
      >
        <MdMenu size={30} />
      </button>

      {isOpen && (
        <div className="mobile-menu-content" onClick={toggle}>
          <ul>
            <li>
              <button
                className="mobile-menu-toggle-close"
                aria-label="Close menu"
                type="button"
              >
                <MdClose size={30} />
              </button>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const Navbar = () => {
  const logo = "{SS}.";

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>{logo}</h1>
        </div>

        {/* mobile menu */}
        <MobileMenu />

        {/* desktop menu */}
        <ul className="nav-list">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
