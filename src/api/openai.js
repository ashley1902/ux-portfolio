// src/api/openai.js
import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function sendMessageToOpenAI(userMessage) {
  // Fallback if API key is missing
  if (!API_KEY) {
    console.warn('⚠️ OpenAI API key not found.');
    return "API key missing. Please check configuration.";
  }
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-4o-mini-2024-07-18',
        messages: [
          { role: 'system', content: "You are Vaia, Vivek's friendly UX research assistant." },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "Sorry, I couldn't reach Vaia's brain right now.";
  }
}