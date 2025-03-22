import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import CoreFeatures from './CoreFeatures';
import VulnerabilityEngine from './VulnerabilityEngine';
import ScannerSection from './ScannerSection';
import BenefitsSection from './BenefitsSection';
import CallToAction from './CallToAction';

export default function Analysis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <CoreFeatures />
        <VulnerabilityEngine />
        <ScannerSection />
        <BenefitsSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}