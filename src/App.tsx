import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;
