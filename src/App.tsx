import React from 'react';
import { Shield, AlertTriangle, Vote, Brain, Database, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import TrustScore from './components/TrustScore';
import CommunitySection from './components/CommunitySection';
import AISection from './components/AISection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800 text-sentinel-white">
      <Hero />
      <Features />
      <TrustScore />
      <CommunitySection />
      <AISection />
    </div>
  );
}

export default App;
