import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Left: Branding */}
        <div className="footer-brand">
          <h3>UX Guy</h3>
          <p>
            Senior UX Researcher specializing in mixed-method research, cognitive science, and machine learning applications
            in user experience design.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/podcasts">Podcasts</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Connect */}
        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="icon-group">
            <a href="mailto:uxguy.in@gmail.com" target="_blank" rel="noopener noreferrer">
              <span className="icon">📧</span>
            </a>
            <a href="https://www.linkedin.com/in/gopinathvivek" target="_blank" rel="noopener noreferrer">
              <span className="icon">💼</span>
            </a>
            <a href="https://github.com/uxguy-in" target="_blank" rel="noopener noreferrer">
              <span className="icon">🐙</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 UX Guy. All rights reserved. | uxguy.in
      </div>
    </footer>
  );
}

export default Footer;
