import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BugBountyHeader from './BugBountyHeader';
import BountyFeatures from './BountyFeatures';
import SecurityToolkit from './SecurityToolkit';
import JoinMission from './JoinMission';

export default function BugBounty() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <BugBountyHeader />
        <BountyFeatures />
        <SecurityToolkit />
        <JoinMission />
      </div>
      <Footer />
    </div>
  );
}