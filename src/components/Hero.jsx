import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatbotPopup from './ChatbotPopup';
import './Hero.css'; // Your existing styles

function Hero() {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChat = () => setChatOpen(prev => !prev);
  const closeChat = () => setChatOpen(false);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="blue">Mixed Method UX Research</span>,{' '}
          <span>Cognitive Science</span> &{' '}
          <span className="blue">Applying ML in UXR</span>
        </h1>

        <p className="hero-sub">
          I'm Vivek Gopinath, a UX researcher passionate about understanding human
          behavior through mixed-method research approaches, cognitive science principles,
          and innovative machine learning applications in user experience design.
        </p>

        <div className="hero-buttons">
          <Link to="/case-studies" className="btn primary">
            View My Work →
          </Link>

          <button className="btn secondary" onClick={toggleChat}>
            💬 Ask Vaia <span style={{ fontSize: '0.8rem', color: '#aaa' }}>(Vivek’s AI Assistant)</span>
          </button>
        </div>

        <ChatbotPopup isOpen={chatOpen} onClose={closeChat} />
      </div>
    </section>
  );
}

export default Hero;
