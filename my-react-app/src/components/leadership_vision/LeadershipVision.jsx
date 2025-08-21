import React, { useState } from "react";
import "./LeadershipVision.css";   // import CSS file
// import leaderImg from "./assets/leader.jpg"; 

export default function LeadershipVision() {
  const [expanded, setExpanded] = useState(false);

  // All text paragraphs in array
  const paragraphs = [
    "She began her professional journey as a Visiting Professor at Government College of Engineering, Aurangabad, under the mentorship of Prof Pasalkar, former Director of the Directorate of Technical Education (DTE), Maharashtra.",
    "She was later selected as a Project Engineer in the Aerospace Engineering Department at IIT Bombay, Powai, gaining hands-on experience in advanced research and innovation.",
    "In 1994, she joined MIT Kothrud as a Professor in the Department of Computer Science and Engineering. She is a Graduate of Govt. College of Engineering Aurangabad with Distinction.",
    "She completed her MTech (Pune Institute of Computer Technology) and enrolled as a PhD candidate of Saint Gadge Maharaj Amravati University, marking the beginning of a long and impactful association with the MIT Group of Institutions.",
    "Over 30+ years, she has held several key academic and leadership positions, contributing significantly to education and research."
  ];

  return (
    <section className="leadership-section">
      <div className="leadership-container">

        {/* Left Side Content */}
        <div className="leadership-text">
          <h2>Leadership & Vision</h2>

          {/* Always show first two paragraphs */}
          <p>{paragraphs[0]}</p>
          <p>{paragraphs[1]}</p>

          {/* Show remaining if expanded */}
          {expanded &&
            paragraphs.slice(2).map((para, index) => (
              <p key={index}>{para}</p>
            ))}

          {/* Read More / Read Less */}
          <button
            className="read-toggle"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less..." : "Read More..."}
          </button>
        </div>

        {/* Right Side Image */}
        <div className="leadership-image">
          <img src="assets/leadernvision.png" alt="Leadership" />
        </div>
      </div>
    </section>
  );
}
