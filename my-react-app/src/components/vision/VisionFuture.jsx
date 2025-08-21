import React from "react";
import "./VisionFuture.css";

const VisionFuture = () => {
  return (
    <div className="vision-container">
      {/* Left Image */}
      <div className="vision-image">
        <img src="assets/ftvi.png" alt="Vision for Future" />
      </div>

      {/* Right Content */}
      <div className="vision-content">
        <h2 className="vision-title">A Vision for Future Education</h2>
        <p className="vision-text">
          Dr. Sunita M. Karad’s passion for education transcends the development
          of universities. She is a visionary dedicated to democratizing
          education through the thoughtful integration of technology, innovation,
          and values. A firm advocate of accessible, flexible, and future-ready
          learning, she envisions ecosystems that not only impart knowledge but
          also instill values, resilience, and a sense of global responsibility
          among students. She actively promotes sustainability, the Indic
          Knowledge System, and innovation in modern pedagogy.
        </p>
      </div>
    </div>
  );
};

export default VisionFuture;
