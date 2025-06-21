// src/components/AskVAIA.jsx
import React, { useState } from 'react';
import './AskVAIA.css';

function AskVAIA() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {role: 'bot', text: 'Hi! Im VAIA, your UX assistant. Ask me anything about Viveks work!'}
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('https://your-chatbot-api-endpoint.com/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();

      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I had trouble understanding that.' }]);
    }
  };

  return (
    <div className="askvaia-container">
      <button className="askvaia-button" onClick={toggleChat}>💬 Ask VAIA</button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Ask VAIA</span>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Ask something..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AskVAIA;
