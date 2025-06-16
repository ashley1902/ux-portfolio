import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import CaseStudiesPage from './Pages/CaseStudiesPage';
import CaseStudyProtected from './Pages/CaseStudyProtected';
import Podcast from './Pages/Podcast';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';

import BlogCPMGOMS from './Pages/BlogCPMGOMS';
import ValTExBlog from './Pages/ValTExBlog';
import FeedbackLoopsBlog from './Pages/FeedbackLoopsBlog';
import LoopResponseModelingBlog from './Pages/LoopResponseModelingBlog';
import TemporalSentimentBlog from './Pages/TemporalSentimentBlog';
import BehavioralDriftBlog from './Pages/BehavioralDriftBlog';
import SegmentationBlog from './Pages/SegmentationBlog';  
import WhisperPipelineBlog from './Pages/WhisperPipelineBlog';
import LongitudinalResearchBlog from './Pages/LongitudinalResearchBlog';
import SummativeMethodsBlog from './Pages/SummativeMethodsBlog';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyProtected />} />
        <Route path="/podcasts" element={<Podcast />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/cpm-goms" element={<BlogCPMGOMS />} />
        <Route path="/blogs/valtex" element={<ValTExBlog />} />
        <Route path="/blogs/feedback-loops" element={<FeedbackLoopsBlog />} />
        <Route path="/blogs/loop-response" element={<LoopResponseModelingBlog />} />
        <Route path="/blogs/temporal-sentiment" element={<TemporalSentimentBlog />} />
        <Route path="/blogs/behavioral-drift" element={<BehavioralDriftBlog />} />
        <Route path="/blogs/segmentation" element={<SegmentationBlog />} />
        <Route path="/blogs/whisper-pipeline" element={<WhisperPipelineBlog />} />
        <Route path="/blogs/longitudinal-research" element={<LongitudinalResearchBlog />} />
        <Route path="/blogs/summarative-methods" element={<SummativeMethodsBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
