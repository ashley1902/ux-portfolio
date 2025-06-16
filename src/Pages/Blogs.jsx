import React from 'react';
import BlogCard from '../components/BlogCard';
import './Blogs.css';

function Blogs() {
  const blogPosts = [
    {
      title: 'Bridging the Gap – Why We Need Both CPM-GOMS and Behavioral Science in UX',
      subtitle: 'A framework combining task modeling with behavior analysis',
      category: 'Research Framework',
      route: '/blogs/cpm-goms',
      date: '2025-06-14',
      readTime: '9 min read'
    },
    {
      title: 'Modeling Emotional Drift in AI Interactions with ValTEx',
      subtitle: 'Tracking the emotional shifts in user-AI interactions, enabling responsive design changes or real-time agent adaptation.',
      category: 'Research Framework',
      route: '/blogs/valtex',
      date: '2025-06-08',
      readTime: '9 min read'
    },
    {
      title: 'Designing Feedback Loops for Adaptive AI Agents Using Drift Detection and Sentiment Signal Maps',
      subtitle: 'Detecting emotional drift and mapping sentiment signals enables AI agents to personalize responses, enhance engagement, and foster emotionally intelligent, adaptive user experiences.',
      category: 'Research Framework',
      route: '/blogs/feedback-loops',
      date: '2025-06-08',
      readTime: '8 min read'
    },
    {
      title: 'Loop Response Modeling',
      subtitle: 'Detecting friction and modeling recovery loops enables AI to restore trust through empathetic interventions, sentiment tracking, and adaptive user experience repair strategies.',
      category: 'Research Framework',
      route: '/blogs/loop-response',
      date: '2025-06-04',
      readTime: '7 min read'
    },
    {
      title: 'Temporal Sentiment Modeling',
      subtitle: 'Tracking emotional valence over time, Temporal Sentiment Modeling helps identify friction points, measure recovery speed, and model emotional resilience for more adaptive, human-centered AI experiences.',
      category: 'Research Framework',
      route: '/blogs/temporal-sentiment',
      date: '2025-06-04',
      readTime: '7 min read'
    },
    {
      title: 'SPICE, SPIDER & ECLIPSE Frameworks',
      subtitle: 'Asking powerful UX research questions',
      category: 'Research Frameworks',
      route: '/blogs/research-frameworks',
      date: '2025-06-04',
      readTime: '7 min read'
    },
    {
      title: 'ELO Scoring in Usability Testing',
      subtitle: 'Using competitive ranking models in UX',
      category: 'Evaluation Methods',
      route: '/blogs/elo-usability',
      date: '2025-06-04',
      readTime: '7 min read'
    },
    {
      title: 'Whisper + GPT for UX Transcription',
      subtitle: 'AI pipelines for qualitative analysis at scale',
      category: 'AI Tools',
      route: '/blogs/whisper-pipeline',
      date: '2025-06-04',
      readTime: '7 min read'
    },
    {
      title: 'Sentiment Loops in Agentic AI',
      subtitle: 'Designing emotion-aware feedback cycles',
      category: 'Agent UX',
      route: '/blogs/sentiment-loops',
      date: '2025-06-04',
      readTime: '7 min read'
    },
    {
      title: 'Drift Detection in UX Telemetry',
      subtitle: 'Monitoring behavioral changes over time',
      category: 'Product Analytics',
      route: '/blogs/ux-drift',
      date: '2025-06-04',
      readTime: '7 min read'
    }
  ];

  return (
    <section className="blog-page">
      <div className="blog-container">
        <h1 className="blog-main-title">UX & AI Research Blog Series</h1>
        <p className="blog-subtext">
          Curated long-form blog series explaining scientific UX methods, cognitive models, and design research thinking in a rigorous yet approachable tone.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
