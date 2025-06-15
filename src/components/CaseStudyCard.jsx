import { Link } from 'react-router-dom';
import './CaseStudyCard.css';

function CaseStudyCard({ study }) {
  return (
    <Link to={`/case-studies/${study.id}`} className="case-card">
      <img src={study.image} alt={study.title} />
      <div className="card-content">
        <div className="tags">
          {study.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h4>{study.title}</h4>
        <p>{study.summary}</p>
        <div className="duration-outcome">
          <span>{study.duration}</span>
          <span className="green">{study.outcome}</span>
        </div>
        <p className="read-more">Read Case Study →</p>
      </div>
    </Link>
  );
}

export default CaseStudyCard;
