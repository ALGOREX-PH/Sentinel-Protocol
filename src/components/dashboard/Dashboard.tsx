import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DashboardHeader from './DashboardHeader';
import AlertCenter from './AlertCenter';
import PortfolioAnalysis from './PortfolioAnalysis';
import SecurityRecommendations from './SecurityRecommendations';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DashboardHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 space-y-6">
              <AlertCenter />
              <PortfolioAnalysis />
            </div>
            <div>
              <SecurityRecommendations />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}