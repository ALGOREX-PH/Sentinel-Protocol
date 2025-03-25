import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AboutHeader from './AboutHeader';
import WhoWeAre from './WhoWeAre';
import OurVision from './OurVision';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <AboutHeader />
        <WhoWeAre />
        <OurVision />
        <TeamSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}