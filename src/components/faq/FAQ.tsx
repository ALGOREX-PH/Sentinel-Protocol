import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FAQHeader from './FAQHeader';
import GettingStarted from './GettingStarted';
import TrustScore from './TrustScore';
import SecurityTips from './SecurityTips';
import Support from './Support';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <FAQHeader />
        <GettingStarted />
        <TrustScore />
        <SecurityTips />
        <Support />
      </div>
      <Footer />
    </div>
  );
}