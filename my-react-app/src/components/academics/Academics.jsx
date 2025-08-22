import React from "react";
import "./Academics.css";

const Academics = () => {
  const cards = [
    {
      title: "Career Overview:",
      paragraphs: [
        "Dr. Karad began her career as an enthusiastic professor, earning admiration from students and peers alike for her innovative teaching methodologies and student-centric approach. Her academic journey has seen her rise through key leadership positions—including Head of Department, Director, Dean, President of MIT Art, Design and Technology University, and Chancellor of MIT World Peace University.",
        "In every role, Dr. Karad has demonstrated transformative leadership. She has spearheaded curriculum reforms, integrated advanced technological tools into teaching, and emphasized experiential learning to bridge the gap between theoretical knowledge and real-world applications—setting new benchmarks in higher education."
      ]
    },
    {
      title: "Notable Projects & Research:",
      paragraphs: [
        "Dr. Karad’s research spans across diverse domains, from computer engineering to the integration of technology in education. She has led and contributed to several innovative projects that have advanced both academic knowledge and institutional growth. Her scholarly work is reflected in multiple publications and patents, underscoring her dedication to research and development.",
        "Beyond her own research pursuits, Dr. Karad is a passionate mentor. She actively guides students, researchers, and faculty members, inspiring them to pursue inquiry, innovation, and excellence in their respective fields."
      ]
    },
    {
      title: "Global Collaborations & Impact:",
      paragraphs: [
        "Dr. Karad has been instrumental in establishing academic collaborations with reputed national and international universities, expanding the global footprint of the institutions she serves.",
        "These collaborations have facilitated student exchange programs, joint research projects, and knowledge-sharing platforms—fostering innovation and cultural diversity in education."
      ]
    }
  ];

  return (
    <div className="Aca-container">
      {/* Top Section */}
      <div className="Aca-intro">
        <h2 className="Aca-title">
          A Journey of Academic Excellence and Leadership
        </h2>
        <p className="Aca-text">
          Prof. Dr. Sunita M. Karad’s professional journey is a testament to her unwavering commitment to education and her remarkable leadership in academia. With a distinguished career marked by innovation and impact, she has played a pivotal role in shaping educational practices and policies at MIT Art, Design and Technology University.
        </p>
        <p className="Aca-text">
          She has been instrumental in establishing academic collaborations with reputed national and international universities, expanding the global footprint of the institutions she serves. In addition to her academic contributions, Dr. Karad has actively supported numerous socio-economic development initiatives, including village adoption programs aimed at uplifting rural communities.
        </p>
      </div>

      {/* Bottom Section - Cards */}
      <div className="Aca-cards">
        {cards.map((card, index) => (
          <div className="Aca-card" key={index}>
            <h3 className="Aca-card-title">{card.title}</h3>
            {card.paragraphs.map((para, idx) => (
              <p className="Aca-card-text" key={idx}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;


