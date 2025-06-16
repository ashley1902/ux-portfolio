// src/Pages/TemporalSentimentBlog.jsx
import React from 'react';
import './TemporalSentimentBlog.css';

function TemporalSentimentBlog() {
  return (
    <section className="blog-post-section">
      <div className="blog-post-container">
        <h1 className="blog-post-title">Temporal Sentiment Modeling (TSM)</h1>
        <h2 className="blog-post-subtitle">
          Tracking emotional valence over time, Temporal Sentiment Modeling helps identify friction points, measure recovery speed, and model emotional resilience for more adaptive, human-centered AI experiences.
        </h2>
        <div className="blog-post-meta">June 4, 2025 · 7 min read</div>

        <div className="blog-post-content">
          <p><strong>TSM</strong> is a framework for measuring emotional valence as it changes over time.</p>
          <p>Instead of asking, “How did the user feel?”, we ask:</p>
          <ul>
            <li>When did their sentiment dip?</li>
            <li>How deep was the emotional low?</li>
            <li>How fast did they bounce back (if they did)?</li>
            <li>At what point did they decide to disengage?</li>
          </ul>
          <p>The result isn’t just a sentiment score—it’s a valence curve.</p>

          <h3>Valence Delta: Tracking Emotional Change Over Time</h3>
          <p>At the heart of TSM is a simple metric:</p>
          <pre className="code-block">
{`ΔVₜ = Vₜ - Vₜ₋₁

Vₜ = Valence at time t (typically scaled between -1 and +1)

A positive ΔV suggests emotional recovery
A negative ΔV suggests emotional decline or continued friction`}
          </pre>
          <p>Let’s say a user begins writing with a valence of +0.1 (neutral). The AI misinterprets input → valence drops to -0.4. But then, a correction kicks in → valence climbs back to +0.2. The final output is accepted → user ends at +0.8. The journey tells us more than any single number.</p>

          <h3>Modeling Emotional Recovery with Curves</h3>
          <p>With a time series of ΔV values, we can build recovery curves to analyze emotional resilience. A common fit:</p>
          <pre className="code-block">
{`R(t) = a(1 - e^(-bt))

Where:
R(t) = Recovered valence at time t
a = Final emotional recovery value
b = Rate of recovery (i.e., emotional rebound speed)`}
          </pre>
          <p>The steeper the curve, the more resilient the UX.</p>

          <h3>How to Implement TSM in Research</h3>
          <ol>
            <li><strong>Sentiment Tagging:</strong> Use sentiment classifiers on chat/voice logs, feedback text, and behavioral cues.</li>
            <li><strong>Timestamp Everything:</strong> Include time, user/session ID, and labels (e.g., “Upload started”).</li>
            <li><strong>Smooth the Signal:</strong> Apply moving averages or exponential decay.</li>
            <li><strong>Analyze the Trajectory:</strong> Look for drops, flatlines, rebounds, and patterns.</li>
          </ol>

          <h3>What Temporal Sentiment Modeling Tells Us</h3>
          <ul>
            <li><strong>Avg ΔV:</strong> Emotional volatility</li>
            <li><strong>Recovery Time:</strong> UX resilience</li>
            <li><strong>Dip Depth:</strong> Friction severity</li>
            <li><strong>Bounce Rate Post Dip:</strong> User retention or loss</li>
          </ul>

          <h3>Toolchain for TSM</h3>
          <ul>
            <li><strong>Sentiment Models:</strong> OpenAI/GPT-4, BERT, IBM Tone Analyzer</li>
            <li><strong>Data Handling:</strong> Python (Pandas, NumPy), Scikit-learn</li>
            <li><strong>Visualization:</strong> Plotly, Recharts, D3.js, Figma dashboards</li>
          </ul>

          <p>It’s a blend of ML, UX, and storytelling—quantifying human emotion in a temporal graph.</p>

          <h3>Example: A Financial Planning Assistant</h3>
          <p>User uploads tax documents. The system crashes mid-way. Valence dips sharply to -0.6. Auto-apology kicks in, but no action. Two minutes later, a human support agent takes over. Valence climbs to +0.3.</p>
          <p><strong>What TSM showed:</strong> the 2-min delay almost caused abandonment. Bots were retrained to escalate faster after dips of -0.5 or more.</p>

          <h3>From ValTEx to TSM: Full-Stack Emotional Modeling</h3>
          <pre className="code-block">
{`[Emotion Signal] 
       ↓
[ValTEx Drift Detection]
       ↓
[Temporal Sentiment Curve Builder]
       ↓
[Recovery Curve Model]
       ↓
[UX Dashboard & Intervention Timeline]`}
          </pre>

          <h3>Where TSM Applies</h3>
          <ul>
            <li>Health Apps: Track anxiety spikes</li>
            <li>Learning Platforms: Detect demotivation</li>
            <li>Banking/Finance: Measure hesitation</li>
            <li>Mental Health Tools: Spot flattening patterns</li>
          </ul>

          <h3>Design Implications</h3>
          <ul>
            <li>Time feedback and nudges based on recovery arcs</li>
            <li>Insert micro-surveys post-recovery</li>
            <li>Personalize agent behavior based on sentiment recovery</li>
            <li>Visualize TSM data alongside task data</li>
          </ul>

          <h3>Final Thought</h3>
          <p>
            Most systems ask: Did the user complete the task? TSM asks: Did the user feel better by the end?
            That’s a more human metric. And increasingly, it defines trust, satisfaction, and long-term engagement.
          </p>
          <p><strong>We’re not just designing for outcomes. We’re designing for emotional trajectories. And that changes everything.</strong></p>
        </div>
      </div>
    </section>
  );
}

export default TemporalSentimentBlog;
