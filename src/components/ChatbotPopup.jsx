import React, { useState } from 'react';
import './ChatbotPopup.css';

function ChatbotPopup({ isOpen, onClose }) {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hey! I'm Vaia. Ask me about Vivek's UX research, case studies, or methods!" }
  ]);

  const handleSend = () => {
    if (userInput.trim() === '') return;
    setMessages([...messages, { type: 'user', text: userInput }]);
    setUserInput('');
    // Placeholder for bot response logic
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: "Thanks for your message! (API coming soon)" }]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-popup">
      <div className="chatbot-header">
        <h4>Vaia - Vivek's Voice</h4>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="chatbot-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chatbot-message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Ask something..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  );
}

export default ChatbotPopup;
