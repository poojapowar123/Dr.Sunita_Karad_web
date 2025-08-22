import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">Follow Us</h3>
      <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
