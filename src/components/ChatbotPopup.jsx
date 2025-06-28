import React, { useState, useEffect, useRef } from 'react'; // ⬅️ add useEffect and useRef
import './ChatbotPopup.css';
import { sendMessageToOpenAI } from '../api/openai';

function ChatbotPopup({ isOpen, onClose }) {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hey! I'm Vaia. Ask me about Vivek's UX research, case studies, or methods!" }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { type: 'bot', text: "Hey! I'm Vaia. Ask me about Vivek's UX research, case studies, or methods!" }
      ]);
      setUserInput('');
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    const input = userInput;
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setUserInput('');
    setLoading(true);

    const botReply = await sendMessageToOpenAI(input);
    setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
    setLoading(false);
  };

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="chatbot-popup">
      <div className="chatbot-header">
        <h4>Vaia – Vivek's Voice</h4>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="chatbot-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chatbot-message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="chatbot-message bot">Typing…</div>}
        <div ref={messagesEndRef} />
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
