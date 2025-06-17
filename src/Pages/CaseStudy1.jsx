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
              <div className="cs1-value">Company accepted the personas and used it to frame a new digital strategy based on components usage</div>
            </div>
          </div>
        </div>

        <div className="cs1-content-section">
          <h2 className="cs1-section-title">Project Background</h2>
          <p className="cs1-content-text">
            In a rapidly digitizing FMCG landscape, a major global brand sought to improve its B2B ordering app experience for Indian retailers. While the app had strong backend logistics and a functional UI, usage data revealed significant friction — from poor adoption of offers and reorder features to late-night incomplete transactions.
            As the lead UX researcher, I was tasked with uncovering what drives or hinders storekeepers from adopting digital workflows for restocking and managing inventory. The business wanted a measurable increase in:
            Engagement with personalized offers
            Repeat orders and reorders
            AOV (Average Order Value) and order completion rates
            This wasn’t just a usability fix. It demanded a behaviorally aligned, research-driven redesign.
          </p>
        </div>

        <div className="cs1-content-section">
          <h2 className="cs1-section-title">Research Objectives</h2>
          <ul className="cs1-content-list">
            <li>Diagnose friction in ordering flows through qualitative and quantitative data.</li>
            <li>Map distinct behavior-based personas using survey clusters and ethnography.</li>
            <li>Reposition UI components based on behavioral affinity matrices.</li>
            <li>Translate findings into a modular, scalable UX system.</li>
          </ul>
        </div>

        <div className="cs1-content-section">
          <h2 className="cs1-section-title">Mixed Methods Research Process</h2>
          <h3>1. Qualitative Interviews + Thematic Analysis</h3>
          <p className="cs1-content-text">15 in-depth interviews across Mumbai, Bangalore, and Thane, with storekeepers in actual work contexts — often cramped back offices, ordering late at night, managing simultaneous customer queries. <br /><br />
            Open Coding: Annotated ~200 statements across 15 interviews using Atlas.ti-style method.<br />
            Axial Coding: Linked codes into categories like Offer Awareness, System Trust, Order Anxiety.
          </p>
          <p className="cs1-content-text"><strong>Themes:</strong></p>
          <ul className="cs1-content-list">
            <li>Time Pressure = Task Aversion</li>
            <li>Visible Deals Drive Action</li>
            <li>Repetition &gt; Exploration</li>
            <li>Emotional Risk of Error</li>
            <li>Tech as a Tool, Not a Destination</li>
          </ul>
          <p className="cs1-content-text">
            <em>This wasn’t research conducted in sterile labs or silent usability rooms. These were conversations that took place in the middle of everyday chaos—inside dimly lit backrooms of kirana shops, while the TV blared cricket commentary, and while storekeepers balanced ledger books, customer orders, and half-eaten snacks.
                I wasn’t just gathering quotes. I was witnessing behavior.
                After each interview, I returned to my notes and recordings not just to transcribe them, but to revisit the emotions I felt in the room. Sometimes it was a shrug. Sometimes it was fatigue in their voice when they said, “I place orders only after my shop closes.” That was more than a task detail—it was a behavioral signal.
                Starting Without a Framework
                I didn’t go in with a checklist. I went in with curiosity.
                I used an open coding process—similar to Atlas.ti—to annotate over 200 statements across 15 interviews. Many of the codes came directly from the users themselves:
            </em><br />
            <br />“Don’t make me think, just show me the bottle.”<br />
            “If I mess up the order, the customer won’t forgive me.”<br />
            “Offers come and go. I don’t trust them.”<br />
            “I use it when I have no other choice.”
          </p>
        </div>

        <div className="cs1-content-section">
          <h3>Eye Tracking Studies</h3>
          <img src="/eye-tracking-study.png" alt="Eye Tracking Studies" className="cs1-image" />
        </div>

        <div className="cs1-content-section">
          <h3>2. Quantitative Clustering + Survey Analysis</h3>
          <p className="cs1-content-text">Structured 31-question survey (Q1–Q31) across 55 retail users. Data points included ordering frequency, offer reliance, tech confidence, and satisfaction. Applied K-means clustering, pair plot analysis, and EFA (Cronbach’s α = 0.78; Guttman’s λ6 ≥ 0.965).</p>
          <img src="/cluster-study.png" alt="Cluster Study Chart" className="cs1-image" />
          <img src="/legend-image.png" alt="Legend Key" className="cs1-image" />

          <h4>Clusters → Personas Mapping</h4>
          <p className="cs1-content-text">
            C1 → Elton – Efficiency Expert<br />
            C2 → Dhiman – Deal Digger<br />
            C3 → Induben – Inventory Wizard<br />
            C4 → Charan – Comprehensive Browser<br />
            C5 → Riyaz – Reputation Reviewer
          </p>
          <img src="/persona-cards-grid.png" alt="Persona Cards" className="cs1-image" />
          <h3>How the Personas answered each question</h3>
          <img src="/question.png" alt="Persona Cards" className="cs1-image" />
        </div>

        <div className="cs1-content-section">
          <h3>Persona Snapshots</h3>
          <ul className="cs1-content-list">
            <li><strong>Dhiman:</strong> "I want to know the best deal first, not last."</li>
            <li><strong>Induben:</strong> "Just show me what I need to refill."</li>
            <li><strong>Riyaz:</strong> "I buy what others trust."</li>
            <li><strong>Elton:</strong> "If it fails, I don’t retry."</li>
            <li><strong>Charan:</strong> "I want to compare before I commit."</li>
          </ul>
          <img src="/dhiman.png" alt="Persona Cards" className="cs1-image" />
        </div>

        <div className="cs1-content-section">
          <h3>Persona–Feature Matrix</h3>
          <img src="/persona-feature-matrix.png" alt="Persona–Feature Fit Table" className="cs1-image" />
          <p className="cs1-content-text">
            Insight: Inventory Wizard aligns most broadly, suggesting UI defaults should optimize for reorder simplicity and speed.
          </p>
        </div>

        <div className="cs1-content-section">
          <h3>Analysis: Deep Dive into Persona–Component–Feature Fit</h3>
          <img src="/persona-component-matrix.png" alt="Persona to Component Matrix" className="cs1-image" />
        </div>

        <div className="cs1-content-section">
          <h3>Design & Personalization Strategy</h3>
          <ul className="cs1-content-list">
            <li>Efficiency Mode (Elton): Compact reorder + real-time tracking</li>
            <li>Deals Dashboard (Dhiman): Hero offers + coupon guide</li>
            <li>Smart Restock (Induben): Master widget + reorder recap</li>
            <li>Trust Feed (Riyaz): Reviews + trending + assurance badges</li>
            <li>Explore Mode (Charan): Filters, comparisons, bundle insights</li>
          </ul>
        </div>

        <div className="cs1-content-section">
          <h3>Outcome Metrics (3 Weeks Post-Launch)</h3>
          <ul className="cs1-content-list">
            <li>Avg. Order Time: Confidential</li>
            <li>Reorder Usage: Confidential</li>
            <li>Feature Adoption: Confidential</li>
            <li>14-day App Retention: Confidential</li>
          </ul>
          <img src="/insights.png" alt="insights" className="cs1-image" />
        </div>

        <div className="cs1-content-section">
          <h3>What Would I Have Done Differently Now?</h3>
          <ol className="cs1-content-list">
            <li>Deployed Telemetry-Driven Micro-Personalization</li>
            <li>Model UX Drift over Time</li>
            <li>AB-Test Modular Home Screens</li>
          </ol>
        </div>

        <div className="cs1-content-section">
          <h2 className="cs1-section-title">Final Reflection</h2>
          <p className="cs1-content-text">
            This case was a convergence of ethnography, behavioral science, cluster modeling, and matrix-based design. The matrix  was not just a UX artifact — it became a behavioral blueprint for design modularity, messaging, and micro-personalization.
            Working with both qual and quant lenses allowed me to not only diagnose issues but architect solutions grounded in real user needs. If I were to do it again, I’d double down on live signal modeling, cohort drift detection, and AI-powered dynamic journeys.
          </p>
        </div>

        <div className="cs1-content-section">
          <h3>Images from the study</h3>
          <img src="/study-screenshots.png" alt="Screens from Field" className="cs1-image" />
        </div>
      </div>
    </section>
  );
}

export default CaseStudy1;
