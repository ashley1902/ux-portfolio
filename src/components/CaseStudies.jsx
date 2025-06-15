import './CaseStudies.css';
import case1 from '../assets/cs-1.jpg';
import case2 from '../assets/cs-2.jpg';
import case3 from '../assets/cs-3.jpg';

function CaseStudies() {
  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <h3 className="section-title">Featured Case Studies</h3>
        <p className="section-sub">
          Exploring user behavior through diverse research methodologies
        </p>

        <div className="case-study-grid">
          {/* Card 1 */}
          <div className="case-card">
            <img src={case1} alt="Coke Buddy" />
            <div className="tags">
              <span>Mixed Methods</span>
              <span>Fintech</span>
            </div>
            <h4>Coke Buddy Case Study</h4>
            <p>
              Mixed-methods research combining behavioral analytics and user interviews to improve trading efficiency by 45%.
            </p>
          </div>

          {/* Card 2 */}
          <div className="case-card">
            <img src={case2} alt="Watchlist" />
            <div className="tags">
              <span>Quantitative</span>
              <span>Clustering Analysis</span>
            </div>
            <h4>Watchlist Case Study</h4>
            <p>
              Using K-Prototypes clustering and Fogg's Behavioral Model to analyze user behavior and optimize watchlist features.
            </p>
          </div>

          {/* Card 3 */}
          <div className="case-card">
            <img src={case3} alt="OTT Redesign" />
            <div className="tags">
              <span>Qualitative</span>
              <span>Entertainment</span>
            </div>
            <h4>OTT Redesign Case Study</h4>
            <p>
              User behavior analysis using thematic analysis and audience segmentation for content strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
