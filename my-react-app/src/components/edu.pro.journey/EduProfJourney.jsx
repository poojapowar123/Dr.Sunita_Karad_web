import React from "react";
import "./EduProfJourney.css";

const EduProfJourney = () => {
  return (
    <div className="eduProf-wrapper">
      {/* Education & Career Card */}
      <div className="eduProf-card">
        {/* <img
          src="assets/education.jpg"
          alt="Education & Career"
          className="eduProf-img"
        /> */}
        <div className="eduProf-content">
          <h2>Education & Career</h2>
          <p>
            Dr. Karad's academic credentials are a testament to her commitment
            to lifelong learning and excellence. She holds a Ph.D. in Computer
            Engineering from Commonwealth Vocational University, Kingdom of
            Tonga, and another Ph.D. from Sant Gadage Baba Amravati University.
          </p>
          <p>
            She has completed an M.E. in Computer Engineering from PICT, Pune,
            and a B.E. in Computer Engineering from Marathwada University.
          </p>
          <p>
            She also undertook a Leadership Development Program on Effective
            Personal Productivity from Leadership Management International,
            Texas, showing her passion for growth and leadership ethos.
          </p>
        </div>
      </div>

      {/* NEW Middle Card (Image Only) */}
<div className="eduProf-card-img">
  <img  className="eduProf-img"
    src="assets/edcareer.png"
    alt="Leadership & Vision"   
  />
</div>

      {/* Professional Journey Card */}
      <div className="eduProf-card">
        <div className="eduProf-content">
          <h2>Professional Journey</h2>

          <div className="pro-item">
            <h3>President, MIT ADT University:</h3>
            <p>
              In her capacity as Executive Director, she has overseen numerous initiatives aimed at elevating the quality of education, infrastructure, and student outcomes at MIT ADT University.
            </p>
          </div>

          <div className="pro-item">
            <h3>Chancellor, MIT World Peace University:</h3>
            <p>
              She is instrumental in promoting peace education and a global perspective among students, embodying the ethos of MIT World Peace University.
            </p>
          </div>

          <div className="pro-item">
            <p>
              Establishment of the Private State University across Alandi campus and Deccan Education Society campus
            </p>
          </div>

          <div className="pro-item">
            <p>
             Dean Engineering, Dean Management Dean Admissions, Director ICT MIT ADT University, Head Projects, Head ICT, Prof CSE department MIT Kothrud, Pune, Visiting Professor GCEA, Aerospace Engineering Dept IIT Bombay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduProfJourney;
