import cs1 from '../assets/cs-1.jpg';
import cs2 from '../assets/cs-2.jpg';
import cs3 from '../assets/cs-3.jpg';
import cs4 from '../assets/cs-4.jpg';
import cs5 from '../assets/cs-5.jpg';
import cs6 from '../assets/cs-6.jpg';

export const caseStudies = [
  {
    id: 'b2b-redesign',
    title: 'Behavioral Redesign of a B2B Ordering App for Indian Retailers',
    tags: ['FMCG', 'B2B'],
    image: cs1,
    summary:
      'Improve discoverability, personalization, and reorder efficiency in a B2B app for small and medium-sized retailers.',
    duration: '2 months',
    outcome: 'Company implemented a component-based strategy',
    type: 'Mixed Methods',
  },
  {
    id: 'watchlist',
    title: 'Personalizing the Watchlist Experience through Behaviorally Clustered Insights',
    tags: ['Quantitative', 'Clustering Analysis'],
    image: cs2,
    summary:
      "Used K-Prototypes clustering and Fogg's Model to optimize watchlist features.",
    duration: '3 months',
    outcome: 'Enhanced user segmentation and feature optimization',
    type: 'Quantitative',
  },
  {
    id: 'ott-redesign',
    title: 'Redesigning Discovery for an OTT Aggregator',
    tags: ['Qualitative', 'Entertainment'],
    image: cs3,
    summary:
      'Turning scrolling fatigue into confident choices through behavioral UX research.',
    duration: '6 weeks',
    outcome: '35% increase in content engagement',
    type: 'Qualitative',
  },
  {
    id: 'alerts-usability',
    title: 'Alerts Usability Case Study',
    tags: ['Quantitative', 'Travel'],
    image: cs4,
    summary:
      'Large-scale research analyzing booking behaviors and decision patterns.',
    duration: '5 months',
    outcome: '28% increase in booking conversion',
    type: 'Quantitative',
  },
  {
    id: 'spa-usability',
    title: 'SPA Usability Case Study',
    tags: ['Mixed Methods', 'AR/VR'],
    image: cs5,
    summary:
      'Eye tracking + cognitive load assessment for educational gaming UX.',
    duration: '8 weeks',
    outcome: '60% improvement in learning retention',
    type: 'Mixed Methods',
  },
  {
    id: 'insurance-dropout',
    title: 'First Trade Dropout Case Study',
    tags: ['Mixed Methods', 'Insurance'],
    image: cs6,
    summary:
      'Statistical validation and journey mapping for digital insurance UX.',
    duration: '3 months',
    outcome: '42% reduction in claim processing time',
    type: 'Mixed Methods',
  },
];
