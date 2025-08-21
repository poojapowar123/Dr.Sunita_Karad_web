import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Left Side - Image */}
      <div className="home-image">
        <img
          src="/assets/sunita-karad.png"
          alt="Prof. Sunita M. Karad with Students"
        />
      </div>

      {/* Right Side - Content */}
      <div className="home-content">
        <h1>
          Welcome to the Official Website of <br /> Prof. Sunita M. Karad
        </h1>

        <p>
          Prof. Sunita M. Karad is a distinguished academician, visionary leader,
          and a driving force in the field of higher education. She has worked in
          various capacity at university level and helped to set the processes,
          policies and ecosystem of Entrepreneurship, Startup led
          Entrepreneurship and Promotion of Ethical practices and Emphasized on
          the techno driven education, Importance of Social Media, Blockchain
          technology, AI Skills for the university functioning and academic
          Practices. She exemplifies a unique blend of scholarly excellence and
          transformative leadership.
        </p>

        <p>
          Her journey—from a passionate teacher to a dynamic Leader —has been
          defined by unwavering dedication, pioneering initiatives, and a deep
          commitment to educational innovation. With a career spanning over 3
          decades, Dr. Karad has profoundly impacted the lives of students and
          educators alike through her visionary approach to academic
          administration.
        </p>

        <p>
          Renowned for her contributions to curriculum development, the
          implementation of innovative teaching methodologies, and her steadfast
          focus on student-centric education, Dr. Karad is a firm believer in the
          power of education to shape a better society.
        </p>

        <p>
          With her inspiring leadership, Prof. Karad continues to be a beacon of
          academic excellence, guiding future generations of students and
          educators toward success and innovation.
        </p>
      </div>
    </div>
  );
}
