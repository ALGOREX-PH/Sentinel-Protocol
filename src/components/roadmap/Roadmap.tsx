import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RoadmapHeader from './RoadmapHeader';
import DevelopmentMilestones from './DevelopmentMilestones';
import FeatureRequests from './FeatureRequests';

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <RoadmapHeader />
        <DevelopmentMilestones />
        <FeatureRequests />
      </div>
      <Footer />
    </div>
  );
}