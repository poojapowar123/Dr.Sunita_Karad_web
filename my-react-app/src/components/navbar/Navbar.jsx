import { Link as ScrollLink } from "react-scroll";
import React, { useState } from "react"; 
import "./Navbar.css";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo / Brand */}
        {/* <div className="nav-logo">
          Prof. Sunita M. Karad
        </div> */}

        {/* Navigation Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="academics" smooth={true} duration={500} onClick={closeMenu}>
              Academic & Professional Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="awards" smooth={true} duration={500} onClick={closeMenu}>
              Awards & Recognitions
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="conferences" smooth={true} duration={500} onClick={closeMenu}>
              Conferences & Events
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="education" smooth={true} duration={500} onClick={closeMenu}>
              Educational Initiatives
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="publications" smooth={true} duration={500} onClick={closeMenu}>
              Publications
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className={`nav-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}
