import React from 'react';
import { Search } from 'lucide-react';

export default function WatchlistHeader() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Crypto Scam Watchlist & Blacklist
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Protect yourself from crypto scams with AI-powered detection and community-driven insights
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by project name, token, or wallet address..."
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}