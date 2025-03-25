import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SecurityHeader from './SecurityHeader';
import ComplianceCheck from './ComplianceCheck';
import SecurityStandards from './SecurityStandards';
import Implementation from './Implementation';
import CallToAction from './CallToAction';

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <SecurityHeader />
        <ComplianceCheck />
        <SecurityStandards />
        <Implementation />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}