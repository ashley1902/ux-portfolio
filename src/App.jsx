import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import CaseStudiesPage from './Pages/CaseStudiesPage';
import CaseStudyProtected from './Pages/CaseStudyProtected';
import Podcast from './Pages/Podcast';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import ChatbotPopup from './components/ChatbotPopup';
import ChatbotButton from './components/ChatbotButton'

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
import ValTExAIBlog from './Pages/ValTExAIBlog';
import IntentModelingBlog from './Pages/IntentModelingBlog';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChat = () => setChatOpen(prev => !prev);
  const closeChat = () => setChatOpen(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyProtected />} />
        <Route path="/podcasts" element={<Podcast />} />
        <Route path="/contact" element={<Contact toggleChat={toggleChat} />} />
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
        <Route path="/blogs/agentic-ux" element={<ValTExAIBlog />} />
        <Route path="/blogs/intent-modeling" element={<IntentModelingBlog />} />
      </Routes>
      <ChatbotButton onClick={toggleChat} />
      <ChatbotPopup isOpen={chatOpen} onClose={closeChat} />
      <Footer />
    </>
  );
}

export default App;
