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
      title: 'Behavioral Drift as a Signal - Detecting Habit Breaks, Intention Shifts, and UX Anomalies',
      subtitle: 'Detecting behavioral drift—subtle deviations from user norms—helps identify early signs of disengagement, goal shifts, or friction, enabling proactive, context-aware design interventions before churn occurs.',
      category: 'Research Framework',
      route: '/blogs/behavioral-drift',
      date: '2025-05-29',
      readTime: '7 min read'
    },
    {
      title: 'Segment vs. Cohort vs. Cluster Analysis in UX and Product Research',
      subtitle: 'Segment, cohort, and cluster analysis offer unique lenses for UX research—segmenting uses predefined user attributes, cohorting tracks behavioral change over time, and clustering uncovers organic patterns from user data—enabling product teams to design with greater precision, adaptability, and insight into evolving user needs.',
      category: 'Research Framework',
      route: '/blogs/segmentation',
      date: '2025-06-14',
      readTime: '11 min read'
    },
    {
      title: 'Automated Qualitative Research Workflow Using Whisper, NLP, and Monte Carlo',
      subtitle: 'For UX researchers, design strategists, or behavioral scientists who are conducting semi-structured interviews and want to take their qualitative analysis further—automatically, efficiently, and with scientific depth.',
      category: 'AI Tools',
      route: '/blogs/whisper-pipeline',
      date: '2025-06-04',
      readTime: '7 min read'
    },
    {
      title: 'Tracking UX Over Time: A Deep Dive into Longitudinal Research for Product Teams',
      subtitle: 'Learn how longitudinal research methods can help product teams understand user behavior and satisfaction over weeks or months to build better experiences.',
      category: 'Research Framework',
      route: '/blogs/longitudinal-research',
      date: '2025-05-17',
      readTime: '14 min read'
    },
    {
      title: 'Designing with Evidence: 12 Summative UX Methods Every Fintech Researcher',
      subtitle: 'From usability testing to NPS, learn the top summative UX research methods to validate and improve core flows in high-impact fintech products.',
      category: 'UX Research',
      route: '/blogs/summarative-methods',
      date: '2024-02-16',
      readTime: '17 min read'
    },
    {
      title: 'ValTEx: Modeling Trust, Emotion, and Alignment in Agentic AI UX',
      subtitle: 'Learn how ValTEx, a composite UX metric combining sentiment, semantic alignment, and user behavior, helps AI teams detect trust loss and emotional drift in real time to design more empathetic and adaptive agent interactions.',
      category: 'UX Research',
      route: '/blogs/agentic-ux',
      date: '2025-03-11',
      readTime: '13 min read'
    },
    {
      title: 'Intent Modeling with Action Graphs and Drift-Aware Prompts in AI Interfaces',
      subtitle: 'Learn how intent modeling with Action Graphs and Drift-Aware Prompts enables AI interfaces to infer user goals, adapt to behavioral changes, and recover from interaction breakdowns for more resilient and user-aware experiences.',
      category: 'AI Tools',
      route: '/blogs/intent-modeling',
      date: '2025-03-11',
      readTime: '11 min read'
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
