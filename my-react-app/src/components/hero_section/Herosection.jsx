import React from "react";
import "./HeroSection.css";



export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* Background Image from public folder */}
      <img
        src="/assets/home-banner-updated.png"
        alt="University Building"
        className="hero-bg"
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h2>Hi, I'm</h2>
          <h1>Prof. Dr. Sunita M Karad</h1>
        </div>

        {/* <div className="hero-profile">
          <img
            src="/profile.jpg"
            alt="Prof. Dr. Sunita M Karad"
          />
        </div> */}
      </div>
    </div>
  );
}
