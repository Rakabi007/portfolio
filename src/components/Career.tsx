import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Compliance Analyst</h4>
                <h5>Amazon</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Leveraged SQL and Microsoft SQL Server for compliance analytics
              at scale. Analyzed large datasets to ensure regulatory compliance
              across multiple business verticals in a fast-paced environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / NLP Engineer</h4>
                <h5>OptimumAI</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Led development of AI-powered document analysis systems for Pharma
              and Finance. Built FastAPI backends handling 100K+ daily requests,
              architected RAG pipelines with FAISS and hybrid search, and
              developed responsive frontends with React.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer</h4>
                <h5>Omdena</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Collaborating on a global project detecting mental health issues
              caused by FOMO on social media. Building ML models and NLP
              pipelines for sentiment analysis and behavioral pattern detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
