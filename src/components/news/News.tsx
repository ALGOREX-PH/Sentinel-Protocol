import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import NewsHeader from './NewsHeader';
import AlertsSection from './AlertsSection';
import FraudReports from './FraudReports';
import MarketManipulation from './MarketManipulation';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <NewsHeader />
        <AlertsSection />
        <FraudReports />
        <MarketManipulation />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}