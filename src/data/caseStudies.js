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
      'Improve discoverability, personalization, and reorder efficiency in a B2B app for small and medium-sized retailers across India. Deep dive into persona-driven UX redesign, research methods, impact metrics, and key insights.',
    duration: '2 months',
    outcome: 'Implemented a component-based strategy',
    type: 'Mixed Methods',
  },
  {
    id: 'watchlist',
    title: 'Personalizing the Watchlist Experience through Behaviorally Clustered Insights',
    tags: ['Quantitative', 'Clustering Analysis'],
    image: cs2,
    summary:
      "Using K-Prototypes clustering and Fogg's Behavioral Model to analyze user behavior and optimize watchlist features in trading platform.",
    duration: '3 months',
    outcome: 'Enhanced user segmentation & feature optimization',
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
      'Large-scale quantitative research with 400+ interviews analyzing booking behaviors and decision patterns.',
    duration: '5 months',
    outcome: '28% increase in booking conversion',
    type: 'Quantitative',
  },
  {
    id: 'insurance-dropout',
    title: 'First Trade Dropout Case Study',
    tags: ['Mixed Methods', 'Insurance'],
    image: cs6,
    summary:
      'Mixed-method research combining statistical validation and user journey mapping for digital insurance products.',
    duration: '3 months',
    outcome: '42% reduction in claim processing time',
    type: 'Mixed Methods',
  },
];
