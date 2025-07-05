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
          <span className="blue">Mixed Method UX Research</span> · {' '}
          <span>Cognitive Science</span> · {' '}
          <span className="blue">ML for Product Design</span>
        </h1>

        <p className="hero-sub">
          I'm Vivek Gopinath, a UX researcher who combines mixed methods, 
          cognitive science, and machine learning to understand human behaviour and design products that align with real user needs.
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
