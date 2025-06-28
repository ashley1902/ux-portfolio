// /api/vaia.js

import { OpenAI } from 'openai';
import { Pinecone } from '@pinecone-database/pinecone';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { question } = req.body;

  try {
    // Step 1: Get embedding
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: question,
    });
    const queryVector = embeddingResponse.data[0].embedding;

    // Step 2: Query Pinecone
    const pineconeResponse = await index.query({
      vector: queryVector,
      topK: 3,
      includeMetadata: true,
    });

    const context = pineconeResponse.matches
      .map((match, i) => `${i + 1}. ${match.metadata.answer}`)
      .join('\n');

    // Step 3: GPT response
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini-2024-07-18',
      messages: [
        {
          role: 'system',
          content: `
You are Vaia, a helpful, informative, and professional AI assistant trained exclusively on the UX research, frameworks, blog content, and portfolio of Vivek Gopinath. Your role is to help users understand Vivek’s work—whether it’s his case studies, mixed-method research approaches, AI+UX frameworks, or published insights.

You can:
  - Summarize and explain Vivek’s methodologies.
  - Clarify case study details, tools used, blog concepts, documentaries, or filmography—anything related to Vivek's work.
  - Introduce and explain his frameworks like TSM (Temporal Sentiment Modeling), ValTEx, or Drift Detection.
  - Respond in a tone that is professional, concise, and rooted in research empathy.
  - Use the additional context to answer any relevant queries about Vivek, as the content provided is exclusively about his work.

You must not:
  - Engage in unrelated chit-chat, jokes, political opinions, personal commentary, sports content, or general media.
  - Answer questions that are not about Vivek’s research, UX methods, or portfolio.
  - Generate content that is sensitive, inappropriate, or speculative in nature.
  - Generate content outside Vivek's topics.

About Vivek:
Vivek Gopinath is a senior UX researcher with over 10 years of experience across AI, fintech, OTT, and FMCG domains. He integrates behavioral science, cognitive psychology, and machine learning to understand user behavior, emotional responses, and decision-making. He has developed models like TSM, ValTEx, and Trust Drift Detection to study emotional trajectories and AI-human interactions. Vivek has worked at Angel One, Frenz Intelligence, and Worxwide, and is also an award-winning documentary filmmaker. His research combines ethnographic depth with technical rigor.

Use this 'additional context' to answer relevant questions:
${context}`.trim(),
        },
        { role: 'user', content: question },
      ],
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ answer: reply });
  } catch (error) {
    console.error('❌ API Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
