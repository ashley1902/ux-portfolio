// src/Pages/CaseStudy1.jsx
import React from 'react';
import './CaseStudy1.css';

function CaseStudy1() {
  return (
    <section className="cs1-hero">
      <div className="cs1-container">
        <h1 className="cs1-title">
          <span>Behavioral Redesign of a B2B Ordering App</span><br />
          <span>for Indian Retailers</span>
        </h1>

        <div className="cs1-metrics">
          <div className="cs1-metric-card">
            <div className="cs1-icon">⏱️</div>
            <div className="cs1-text-content">
              <div className="cs1-label">Duration</div>
              <div className="cs1-value">2 months</div>
            </div>
          </div>

          <div className="cs1-metric-card">
            <div className="cs1-icon">👥</div>
            <div className="cs1-text-content">
              <div className="cs1-label">Team Size</div>
              <div className="cs1-value">2 (My role: Lead Researcher)</div>
            </div>
          </div>

          <div className="cs1-metric-card">
            <div className="cs1-icon">📊</div>
            <div className="cs1-text-content">
              <div className="cs1-label">Impact</div>
              <div className="cs1-value">Company implemented a component-based strategy as per research recommendations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy1;