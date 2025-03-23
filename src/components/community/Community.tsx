import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import ReputationSystem from './ReputationSystem';
import ReputationTiers from './ReputationTiers';
import GamificationSection from './GamificationSection';
import CallToAction from './CallToAction';

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <ReputationSystem />
        <ReputationTiers />
        <GamificationSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}