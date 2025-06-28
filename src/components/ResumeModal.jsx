// src/components/ResumeModal.jsx
import React, { useState } from 'react';
import './ResumeModal.css';
import { Eye, EyeOff } from 'lucide-react'; // Optional: use emoji if you prefer

function ResumeModal({ onClose }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle

  const correctPassword = 'UXResearch@14';

  const handleDownload = () => {
    if (password === correctPassword) {
      const link = document.createElement('a');
      link.href = '/Vivek_Gopinath_2025_Combined.pdf';
      link.download = 'Vivek_Gopinath_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal">
        <h3>Protected Download</h3>
        <p>Please enter the password to download the resume.</p>

        {/* 👁️ Password Input with Toggle */}
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />
          <button
            className="toggle-visibility"
            onClick={() => setShowPassword(prev => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="modal-actions">
          <button onClick={handleDownload}>Download</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
