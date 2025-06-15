import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import CaseStudiesPage from './Pages/CaseStudiesPage';
import CaseStudyProtected from './Pages/CaseStudyProtected';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyProtected />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
