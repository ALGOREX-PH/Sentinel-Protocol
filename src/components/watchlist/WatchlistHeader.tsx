import React from 'react';
import { Search } from 'lucide-react';

export default function WatchlistHeader() {
  return (
    <div className="bg-sentinel-dark-800/50 border-b border-sentinel-dark-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-sentinel-white mb-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
            Crypto Scam Watchlist & Blacklist
          </h1>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Protect yourself from crypto scams with AI-powered detection and community-driven insights
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sentinel-white/40" />
            <input
              type="text"
              placeholder="Search by project name, token, or wallet address..."
              className="w-full pl-12 pr-24 py-4 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-md hover:opacity-90 transition-all">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}