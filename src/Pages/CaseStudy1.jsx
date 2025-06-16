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

        {/* Project Background Section */}
        <div className="cs1-content-section">
          <h2 className="cs1-section-title">Project Background</h2>
          <div className="cs1-background-box">
            <p className="cs1-content-text">
              In a rapidly digitizing FMCG landscape, a major global brand sought to improve its B2B ordering app experience for Indian retailers. While the app had strong backend logistics and a functional UI, usage data revealed significant friction — from poor adoption of offers and reorder features to late-night incomplete transactions.
            </p>
            
            <p className="cs1-content-text">
              As the lead UX researcher, I was tasked with uncovering what drives or hinders storekeepers from adopting digital workflows for restocking and managing inventory. The business wanted a measurable increase in:
            </p>
            
            <ul className="cs1-content-list">
              <li><strong>Engagement</strong> with personalized offers</li>
              <li><strong>Repeat orders</strong> and reorders</li>
              <li><strong>AOV (Average Order Value)</strong> and order completion rates</li>
            </ul>
            
            <p className="cs1-content-text" style={{marginBottom: 0}}>
              This wasn't just a usability fix. It demanded a behaviorally aligned, research-driven redesign.
            </p>
          </div>
        </div>

        {/* Research Objectives Section */}
        <div className="cs1-content-section">
          <h2 className="cs1-section-title">Research Objectives</h2>
          <ul className="cs1-content-list">
            <li>Diagnose friction in ordering flows through qualitative and quantitative data.</li>
            <li>Map distinct behavior-based personas using survey clusters and ethnography.</li>
            <li>Reposition UI components based on behavioral affinity matrices.</li>
            <li>Translate findings into a modular, scalable UX system.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy1;