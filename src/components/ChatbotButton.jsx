import React from 'react';
import './ChatbotButton.css';

function ChatbotButton({ onClick }) {
  return (
    <button className="chatbot-floating-btn" onClick={onClick}>
      💬
    </button>
  );
}

export default ChatbotButton;
