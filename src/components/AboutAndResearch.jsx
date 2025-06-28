import React, { useState } from 'react';
import './AboutAndResearch.css';
import { UserRound, Brain, BarChart2 } from 'lucide-react'; // ✅ modern icons
import ResumeModal from './ResumeModal';

function AboutAndResearch() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="about-research-section">
      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
      <div className="container about-research-grid">
        {/* LEFT COLUMN */}
        <div className="about-left">
          <h2>Leading UX Research & Innovation</h2>
          <p>
            With over 10 years of experience in UX research, design, and testing, I specialize in Mixed Method Research,
            blending qualitative and quantitative approaches with Machine Learning integration. My expertise spans heuristic
            analysis, eye tracking, behavioral studies, cognitive psychology, and applied statistics.
          </p>
          <p>
            Currently leading a team of researchers at Angel One working on a Stock Broking Application, I build tailored
            research frameworks to drive business and user-focused insights. I'm skilled in design research methodologies,
            usability testing, surveys, clustering, benchmarking, and UX metrics with a strong focus on accessibility and
            research operations (ResearchOps).
          </p>
          <p>
            Beyond UX research, I have a background in documentary filmmaking and visual storytelling. My creative practice
            has directly enriched my ethnographic and qualitative research skills, enhancing my ability to observe, interpret,
            and represent user behavior with depth and empathy.
          </p>

          <div className="about-buttons">
            <button onClick={() => setShowModal(true)} className="btn primary">Download Resume</button>
            <a
              href="https://www.linkedin.com/in/gopinathvivek"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="research-right">
          <div className="research-feature">
            <div className="icon"><UserRound /></div>
            <div>
              <h4>Mixed Method Research</h4>
              <p>
                Conducting comprehensive qualitative and quantitative research using Thematic Analysis, PCA,
                and psychological behavior models with statistical rigor.
              </p>
            </div>
          </div>

          <div className="research-feature">
            <div className="icon"><Brain /></div>
            <div>
              <h4>Cognitive Psychology & UX</h4>
              <p>
                Applying cognitive psychology principles, Dual Process Theory, and behavioral frameworks to understand user
                decision patterns and mental models in digital interfaces.
              </p>
            </div>
          </div>

          <div className="research-feature">
            <div className="icon"><BarChart2 /></div>
            <div>
              <h4>ML & Advanced Analytics</h4>
              <p>
                Leveraging machine learning techniques including EFA, K-Means clustering, NMF, and LLMs for sentiment analysis
                to enhance UX through predictive modeling and behavioral analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAndResearch;
