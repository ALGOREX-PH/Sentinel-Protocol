import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution.tsx';
import Features from './components/Features';
import TrustScore from './components/TrustScore';
import CommunitySection from './components/CommunitySection';
import AISection from './components/AISection';
import ScamAlerts from './components/ScamAlerts';
import Footer from './components/Footer.tsx';
import ChatButton from './components/ChatButton';
import SubmitProject from './components/SubmitProject';
import Community from './components/community/Community';
import Analysis from './components/analysis/Analysis';
import ProjectDetails from './components/projects/details/ProjectDetails';
import ProjectDirectory from './components/projects/ProjectDirectory';
import Watchlist from './components/watchlist/Watchlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800 text-sentinel-white">
              <Navbar />
              <Hero />
              <ProblemSolution />
              <Features />
              <TrustScore />
              <CommunitySection />
              <AISection />
              <ScamAlerts />
              <Footer />
              <ChatButton />
            </div>
          }
        />
        <Route path="/submit" element={<SubmitProject />} />
        <Route path="/projects" element={<ProjectDirectory />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
  );
}

export default App;
