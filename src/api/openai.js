// src/api/openai.js
import axios from 'axios';

export async function sendMessageToOpenAI(userMessage) {
  try {
    const response = await axios.post('/api/vaia', {
      question: userMessage,
    });
    return response.data.answer;
  } catch (error) {
    console.error('Vaia RAG API Error:', error);
    return "Sorry, I couldn't access Vaia's brain just now.";
  }
}
