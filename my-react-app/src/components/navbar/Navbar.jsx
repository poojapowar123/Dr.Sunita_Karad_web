// import React from "react";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Academic</li>
//         <li>Awards</li>
//         <li>Conferences</li>
//         <li>Educational</li>
//         <li>Publications</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }

import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Desktop Menu */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Academic & Professional Experience">Academic & Professional Experience</a></li>
          <li><a href="/Awards & Recognitions">Awards & Recognitions</a></li>
          <li><a href="/Conferences & Events">Conferences & Events</a></li>
          <li><a href="/Educational Initiatives">Educational Initiatives</a></li>
          <li><a href="/Publications">Publications</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>

        {/* Hamburger */}
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}
