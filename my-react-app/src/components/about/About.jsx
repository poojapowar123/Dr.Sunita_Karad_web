import React, { useState } from "react";
import "./About.css";

const Card = ({ logo, title, boldText, paragraphs }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <div className="about-card">
        <img src={logo} alt="logo" className="card-logo" />
        <h2 className="card-title">{title}</h2>
        <p className="card-bold">{boldText}</p>
  
        {paragraphs.slice(0, expanded ? paragraphs.length : 2).map((text, index) => (
          <p key={index} className="card-text">{text}</p>
        ))}
  
        <button className="read-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less..." : "Read More..."}
        </button>
      </div>
    );
  };
  
  
const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-heading">About Prof. Dr. Sunita M Karad</h1>

      <div className="about-container">
        <Card
          logo="assets/biography.svg"
          title="Biography"
          boldText= "Dr. Sunita Mangesh Karad is a distinguished leader in higher education—a strong academician, enthusiastic learner, and visionary in technology integration and institution-building. With a dynamic career spanning over three decades, she has significantly contributed to the transformation of the Indian education system."
          paragraphs={[
            "As a Trustee of the MIT Group of Institutions and Executive Director of MIT Art, Design and Technology University (MIT-ADT), she has played a pivotal role in shaping institutional excellence and innovation. She works as Chancellor Dr. Vishwanath Karad of MIT World Peace University, supporting academic and strategic initiatives at the highest levels. ",
            "In addition to her administrative leadership, Dr. Karad serves as an Independent Consultant, offering expert guidance in university strategy formulation, policy development, and academic governance. Her insights and mentorship are sought after by institutions aiming to align with global best practices and future-ready educational models. ",
            "At MIT ADT University she worked in various capacities as a Dean Engineering and Management, Academic Council member as well as Board of Management member and advisory board member in the various university and Institution. ",
            " Her academic and administrative expertise has been instrumental in founding and shaping several premier institutions, including the College of Management and Computer Application, School of Business and Computer Education, School of Engineering, School of Computing, and the School of Open and Distance Learning. Dr. Karad’s vision has consistently emphasized academic excellence, innovation, holistic education and the integration of emerging technologies into curriculum and institutional governance.",
            " As an Independent Director for ICT and a key technology strategist at MIT-ADT University, she has led the formulation and execution of a comprehensive IT vision. Her efforts in IT governance, ERP implementation, digital branding, social media strategy, and the establishment of multiple Centres of Excellence have positioned MIT-ADT University as a technology-driven, future-ready university.",
            " Establishment of Amazon Centre of Excellence, Coursera Campus, Salesforce Centre of Excellence, ICT Academy tie-up, and entire IT infrastructure establishment. Her vision of technology skills-aligned value-added programs since 2007 has helped many graduates to acquire job readiness and complete various technology certifications",
            "Her experience of over 20 years in institutional IT leadership ensures the seamless integration of technology into academic administration and policymaking. ",
            "Dr. Karad has been a pioneer in driving curriculum innovation, especially in emerging areas such as Artificial Intelligence (AI), Cybersecurity, IoT, Cloud Computing, etc., aligning academic programs with industry trends. ",
            "As the Director of a reputed B-School for over 15 years, she has mentored and nurtured more than 10,000 students, shaping countless careers through her visionary approach to management education. ",
            " Her dedication to excellence has earned her numerous accolades, including recognition for her contributions to higher education and academic leadership.",
            " Dr. Karad is also known for her contributions to university best practices, policy development, and promoting value-based education rooted in ethics, compassion, and social responsibility. Her gentle demeanour, spiritual values, and commitment to the noble cause of education continue to inspire educators and students alike .",
        
            "Through her relentless dedication and visionary leadership, Dr. Sunita Karad stands as a beacon of educational transformation and empowerment in 21st-century India ",
            "A person with gentle heart and spiritual kindness and a strong executor, she ensures that education is for the wellbeing of humanity, upholding humanitarian values, ethics, and the social cause of the noble society of educators and teachers. "
          ]}
        />

        <Card
          logo="assets/philosophy.svg"
          title="Professional Philosophy"
          boldText="Dr. Sunita Karad’s Professional Philosophy and Impact Dr. Karad’s professional philosophy is deeply rooted in the belief that education is a transformative force for societal change. She champions a learning environment that fosters inquiry, innovation, and the holistic development of students. Her leadership style is inclusive, future-focused, and driven by an unwavering commitment to excellence."
          paragraphs={[
            " Dr. Karad strongly believes in empowering both students and faculty. She fosters an academic culture grounded in collaboration, creativity, and continuous learning. Her efforts have led to the successful conduct of numerous Faculty Development Programs (FDPs), workshops, and initiatives that have significantly impacted teaching communities across disciplines. Her spontaneous engagement with the teaching staff, coupled with her motivational approach, has inspired many educators to pursue lifelong learning.",
            "A significant contributor to curriculum design and development, Dr. Karad has designed various university-level programs. She emphasizes the integration of emerging technologies and hands-on learning experiences, ensuring that the curriculum aligns with industry standards. Her visionary leadership has led to the introduction of cutting-edge programs and regular curriculum revisions to keep pace with global trends. ",
            " One of her core strengths lies in institutional development. She has been instrumental in establishing advisory boards, NAAC Accreditation, Ranking framework at International and National level for engineering and management institutions. Visited and Represented MIT Group at the International Level at National Association of Foreign student Advisors (NAFSA) launching international divisions and initiating online and distance learning platforms—paving the way for inclusive and accessible education.",
            "Dr. Karad envisions shaping future-ready leaders—individuals who are not only academically accomplished but also socially responsible and globally conscious. ",
            " Join us on this website as we explore the inspiring journey and achievements of a woman who is not only an educator but also a catalyst for meaningful and lasting change.",
          ]}
        />
      </div>
    </section>
  );
};

export default About;
