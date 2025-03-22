import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WatchlistHeader from './WatchlistHeader';
import WatchlistStats from './WatchlistStats';
import WatchlistEntries from './WatchlistEntries';
import ProtectionFeatures from './ProtectionFeatures';

export default function Watchlist() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <WatchlistHeader />
        <WatchlistStats />
        <WatchlistEntries />
        <ProtectionFeatures />
      </div>

      <Footer />
    </div>
  );
}