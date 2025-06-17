import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CaseStudyProtected.css';

import CaseStudy1 from './CaseStudy1'; // ✅ import your actual case study component
import CaseStudy3 from './CaseStudy3'; // ✅ import your OTT redesign case study
import CaseStudy2 from './CaseStudy2'; 

function CaseStudyProtected() {
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleAccess = () => {
    if (password === 'UXResearch@14') {
      setAccessGranted(true);
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  const renderCaseStudy = () => {
    switch (id) {
      case 'b2b-redesign':
        return <CaseStudy1 />;
      // You can add more cases like:
      // case 'stock-watchlist':
      //   return <CaseStudy2 />;
      case 'watchlist':
        return<CaseStudy2 />;
      case 'ott-redesign':
        return <CaseStudy3 />;
      default:
        return <p>Case study not found.</p>;
    }
  };

  return (
    <section className="protected-wrapper">
      <Link to="/case-studies" className="back-link">← Back to Case Studies</Link>

      {accessGranted ? (
        <div className="unlocked-content">
          {renderCaseStudy()}
        </div>
      ) : (
        <div className="protected-box">
          <div className="lock-icon">🔒</div>
          <h3>Protected Case Study</h3>
          <p>This case study contains confidential research insights. Please enter the password to access.</p>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-box">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button className="access-btn" onClick={handleAccess}>
            Access Case Study
          </button>

          <p className="note">
            <strong>Note:</strong> Case studies contain proprietary research methodologies and business insights.
            Access is restricted to maintain confidentiality agreements with clients.
          </p>
        </div>
      )}
    </section>
  );
}

export default CaseStudyProtected;
