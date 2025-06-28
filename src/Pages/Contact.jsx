import React from 'react';
import './Contact.css';

function Contact({ toggleChat }) {
  return (
    <section className="contact-wrapper">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Let's discuss UX research, cognitive science, and innovative methodologies
      </p>

      <div className="contact-grid">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="contact-item">
            <span className="icon">📧</span>
            <div className="contact-details">
              <h4>Email</h4>
              <a href="mailto:uxguy.in@gmail.com">uxguy.in@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">💼</span>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/in/gopinathvivek" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/gopinathvivek
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">👨‍💻</span>
            <div className="contact-details">
              <h4>GitHub</h4>
              <a href="https://github.com/uxguy-in" target="_blank" rel="noopener noreferrer">
                github.com/uxguy-in
              </a>
            </div>
          </div>

          <div className="expertise-box">
            <h3>Areas of Expertise</h3>
            <ul>
              <li>Mixed-Method UX Research</li>
              <li>Cognitive Science Applications</li>
              <li>Machine Learning in UX</li>
              <li>Behavioral Persona Development</li>
              <li>Clustering & Statistical Analysis</li>
              <li>Research Operations (ResearchOps)</li>
            </ul>
          </div>
        </div>

        {/* Right: Assistant */}
        <div className="ai-assistant">
          <h2>Ask Vaia – My AI Assistant</h2>

          <div className="ai-box">
            <div className="ai-header">
              <div className="ai-icon">💬</div>
              <div>
                <strong>Vaia AI Assistant</strong>
                <div className="sub">Trained on my resume & work</div>
              </div>
            </div>

            <div className="ai-knowledge">
              <p><strong>📋 What Vaia knows:</strong></p>
              <ul>
                <li>My 10+ years of UX research experience</li>
                <li>Current role at Angel One & previous positions</li>
                <li>Research methodologies & case studies</li>
                <li>Tools, skills & educational background</li>
                <li>Mixed-method research approaches</li>
              </ul>
            </div>

            <div className="ai-try">
              <p><strong>Try asking:</strong></p>
              <div className="chips">
                <span>"What's your experience?"</span>
                <span>"Tell me about clustering"</span>
                <span>"Describe the watchlist study"</span>
              </div>
            </div>

            <button className="start-btn" onClick={toggleChat}>
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
