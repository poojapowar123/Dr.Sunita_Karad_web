
import "./Publication.css";

const Publication = () => {
  return (
    <section className="publication-section">
      <div className="publication-container">
        
        {/* Left Image */}
        <div className="publication-image">
          <img src="assets/legacy.png" alt="Publications" />
        </div>

        {/* Right Content */}
        <div className="publication-content">
          <h1 className="publication-title">A Legacy Of Knowledge – Publications</h1>
          <p>
            Prof. Dr. Sunita M. Karad's extensive research and expertise are reflected 
            in her wide range of publications. These works not only contribute to the 
            academic community but also serve as valuable resources for students and educators alike.
          </p>
          <h3 className="publication-subtitle">Research Papers:</h3>
          <p>
            Dr. Karad's publications encompass a variety of topics within computer 
            engineering and education technology. Her papers are renowned for their 
            insightful analysis, innovative approaches, and practical applications.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Publication;
