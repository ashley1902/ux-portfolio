// src/Pages/Podcast.jsx
import React from 'react';
import './Podcast.css';
import { CalendarDays, Clock } from 'lucide-react';

function Podcast() {
  return (
    <section className="podcast-wrapper">
      <div className="podcast-container">
        <h1 className="podcast-title">Podcast Hosting</h1>
        <p className="podcast-subtitle">
          Hosting conversations about UX research, cognitive science, and the future of user-centered design
        </p>

        <h2 className="section-heading">Upcoming Episodes</h2>

        <div className="episode-card">
          <div className="episode-meta-row">
            <span className="episode-status">Upcoming</span>
            <span className="episode-announcement">To be announced</span>
          </div>

          <h3 className="episode-title">UX Research Podcast</h3>
          <a href="#" className="episode-subtitle">
            Advanced UX Research Methodologies and Cognitive Science Applications
          </a>

          <p className="episode-description">
            Join me as I host an insightful discussion about the intersection of cognitive science and UX research,
            exploring advanced methodologies and machine learning applications in user experience design.
          </p>

          <p className="episode-guests">Guests: Mohsen Rafei and Bahareh</p>

          <div className="episode-info-icons">
            <div><CalendarDays size={16} /> TBA</div>
            <div><Clock size={16} /> TBA</div>
          </div>
        </div>

        <div className="collab-box">
          <h3>Collaborate on My Podcast</h3>
          <p>
            Interested in being a guest on my podcast? Let's discuss UX research, cognitive science,
            and the future of user-centered design together.
          </p>
          <button>Get In Touch</button>
        </div>
      </div>
    </section>
  );
}

export default Podcast;
