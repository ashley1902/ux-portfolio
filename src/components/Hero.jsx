import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="blue">Mixed Method UX Research</span>, Cognitive Science &{' '}
          <span className="blue">Applying ML in UX Research</span>
        </h1>
        <p className="hero-sub">
          I'm Vivek Gopinath, a UX researcher passionate about understanding human behavior through mixed-method research
          approaches, cognitive science principles, and innovative machine learning applications in user experience design.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">
            View My Work <span>→</span>
          </button>
          <button className="btn secondary">
            <span>💬</span> Ask Vaia <span style={{ fontSize: '0.85rem' }}>(Vivek’s AI Assistant)</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
