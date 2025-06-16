import React from 'react';
import BlogCard from '../components/BlogCard';
import './Blogs.css';

function Blogs() {
  const blogPosts = [
    {
      title: 'CPM-GOMS Meets Behavioral Science',
      subtitle: 'A framework combining task modeling with behavior analysis',
      category: 'UX Methods',
      route: '/blogs/cpm-goms'
    },
    {
      title: 'Signal-to-Noise in Interface Evaluation',
      subtitle: 'Improving clarity in high-cognitive-load environments',
      category: 'UX Metrics',
      route: '/blogs/signal-noise'
    },
    {
      title: 'Tree Testing Meets Machine Learning',
      subtitle: 'How decision trees improve IA and content findability',
      category: 'Information Architecture',
      route: '/blogs/tree-testing'
    },
    {
      title: 'Autoethnography in UX',
      subtitle: 'Turning self-observation into design data',
      category: 'Qualitative Research',
      route: '/blogs/autoethnography'
    },
    {
      title: 'Behavioral Personas Using NMF',
      subtitle: 'Task analysis meets unsupervised clustering',
      category: 'Quant UX',
      route: '/blogs/behavioral-personas'
    },
    {
      title: 'SPICE, SPIDER & ECLIPSE Frameworks',
      subtitle: 'Asking powerful UX research questions',
      category: 'Research Frameworks',
      route: '/blogs/research-frameworks'
    },
    {
      title: 'ELO Scoring in Usability Testing',
      subtitle: 'Using competitive ranking models in UX',
      category: 'Evaluation Methods',
      route: '/blogs/elo-usability'
    },
    {
      title: 'Whisper + GPT for UX Transcription',
      subtitle: 'AI pipelines for qualitative analysis at scale',
      category: 'AI Tools',
      route: '/blogs/whisper-pipeline'
    },
    {
      title: 'Sentiment Loops in Agentic AI',
      subtitle: 'Designing emotion-aware feedback cycles',
      category: 'Agent UX',
      route: '/blogs/sentiment-loops'
    },
    {
      title: 'Drift Detection in UX Telemetry',
      subtitle: 'Monitoring behavioral changes over time',
      category: 'Product Analytics',
      route: '/blogs/ux-drift'
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
