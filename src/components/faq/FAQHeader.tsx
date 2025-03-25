import React from 'react';
import { Search } from 'lucide-react';

export default function FAQHeader() {
  return (
    <div className="relative overflow-hidden bg-blue-50/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-sentinel-white">Sentinel Protocol</span>{' '}
          <span className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
            FAQ & Support Center
          </span>
        </h1>
        <p className="text-lg text-sentinel-white/70 mb-12 max-w-3xl mx-auto">
          Your central hub for guidance, insights, and support in the world of secure crypto investments.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sentinel-white/40" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-sentinel-dark-800/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}