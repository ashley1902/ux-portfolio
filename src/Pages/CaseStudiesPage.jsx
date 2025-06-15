import { useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';
import './CaseStudiesPage.css';

const filters = ['All Studies', 'Qualitative', 'Quantitative', 'Mixed Methods'];

function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All Studies');

  const filteredStudies =
    activeFilter === 'All Studies'
      ? caseStudies
      : caseStudies.filter(study => study.type === activeFilter);

  return (
    <section className="case-page">
      <div className="case-header">
        <h2>Case Studies</h2>
        <p>
          Exploring user behavior through diverse research methodologies and data-driven insights
        </p>
        <div className="filters">
          {filters.map(label => (
            <button
              key={label}
              className={label === activeFilter ? 'active' : ''}
              onClick={() => setActiveFilter(label)}
            >
              🔍 {label}
            </button>
          ))}
        </div>
      </div>

      <div className="case-grid">
        {filteredStudies.map(study => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}

export default CaseStudiesPage;
