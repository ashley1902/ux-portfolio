import './CaseStudies.css';
import case1 from '../assets/cs-1.jpg';
import case2 from '../assets/cs-2.jpg';
import case3 from '../assets/cs-3.jpg';
import { Link } from 'react-router-dom'; // ✅ Import Link

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
          <Link to="/case-studies/b2b-redesign" className="case-card-link">
            <div className="case-card">
              <img src={case1} alt="Coke Buddy" />
              <div className="tags">
                <span>FMCG</span>
                <span>B2B</span>
              </div>
              <h4>Behavioral Redesign of a B2B Ordering App for Indian Retailers</h4>
              <p>
                Improve discoverability, personalization, and reorder efficiency in a B2B app for small and medium-sized retailers across India. Deep dive into persona-driven UX redesign, research methods, impact metrics, and key insights.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <div className="case-card">
            <img src={case2} alt="Watchlist" />
            <div className="tags">
              <span>Quantitative</span>
              <span>Clustering Analysis</span>
            </div>
            <h4>Personalizing the Watchlist Experience through Behaviorally Clustered Insights</h4>
            <p>
              Using K-Prototypes clustering and Fogg's Behavioral Model to analyze user behavior and optimize watchlist features in trading platform.
            </p>
          </div>

          {/* Card 3 */}
          <Link to="/case-studies/ott-redesign" className="case-card-link">
            <div className="case-card">
              <img src={case3} alt="OTT Redesign" />
              <div className="tags">
                <span>Qualitative</span>
                <span>Entertainment</span>
              </div>
              <h4>Redesigning Discovery for an OTT Aggregator</h4>
              <p>
                Turning Scrolling Fatigue into Confident Choices through Behavioral UX Research.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;


