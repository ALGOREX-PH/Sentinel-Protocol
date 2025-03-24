import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import ApiSection from './ApiSection';
import ExtensionSection from './ExtensionSection';
import DemoSection from './DemoSection';
import CallToAction from './CallToAction';

export default function ApiExtension() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <ApiSection />
        <ExtensionSection />
        <DemoSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}