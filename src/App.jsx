import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import CaseStudiesPage from './Pages/CaseStudiesPage';
import CaseStudyProtected from './Pages/CaseStudyProtected';
import Podcast from './Pages/Podcast';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
