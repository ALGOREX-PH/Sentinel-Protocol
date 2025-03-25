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
import News from './components/news/News';
import Membership from './components/membership/Membership';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Security from './components/security/Security';
import ApiExtension from './components/api/ApiExtension';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
              </div>
              <ChatButton />
            </>
          }
        />
        <Route path="/submit" element={<><SubmitProject /><ChatButton /></>} />
        <Route path="/projects" element={<><ProjectDirectory /><ChatButton /></>} />
        <Route path="/projects/:id" element={<><ProjectDetails /><ChatButton /></>} />
        <Route path="/community" element={<><Community /><ChatButton /></>} />
        <Route path="/analysis" element={<><Analysis /><ChatButton /></>} />
        <Route path="/news" element={<><News /><ChatButton /></>} />
        <Route path="/watchlist" element={<><Watchlist /><ChatButton /></>} />
        <Route path="/membership" element={<><Membership /><ChatButton /></>} />
        <Route path="/login" element={<><Login /><ChatButton /></>} />
        <Route path="/api" element={<><ApiExtension /><ChatButton /></>} />
        <Route path="/dashboard" element={<><Dashboard /><ChatButton /></>} />
        <Route path="/security" element={<><Security /><ChatButton /></>} />
      </Routes>
    </Router>
  );
}

export default App;
