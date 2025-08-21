import React from "react";
import "./EduInitiatives.css";

const Card = ({ logo, title, paragraph }) => {
  return (
    <div className="eduInit-card">
      <img src={logo} alt="logo" className="card-logo" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{paragraph}</p>
    </div>
  );
};

const EduInitiatives = () => {
  return (
    <section className="eduInit-section">
      <h1 className="eduInitiatives-heading">Pioneering Educational Initiatives</h1>
      <p>
        Prof. Dr. Sunita M. Karad's commitment to education extends beyond
        conventional teaching. She is a pioneer in educational initiatives that
        have significantly transformed the learning experience for students.
      </p>

      <div className="eduInit-container">
        <Card
          logo="assets/biography.svg"
          title="Teaching Philosophy:"
          paragraph="Dr. Karad's teaching philosophy centers around the empowerment of students. She believes in fostering an environment where students are encouraged to think critically, engage in creative problem-solving, and apply their knowledge practically. Her approach is student-centric, aiming to develop not just academic skills but also life skills essential for success in the real world."
        />

        <Card
          logo="assets/philosophy.svg"
          title="Curriculum Development:"
          paragraph="A significant part of Dr. Karad's legacy is her contribution to curriculum development. She has been instrumental in designing curricula that are contemporary, industry-relevant, and infused with the latest technological advancements. Her initiatives ensure that students are well-equipped to meet the challenges of the ever-evolving global landscape."
        />
      </div>
    </section>
  );
};

export default EduInitiatives;
