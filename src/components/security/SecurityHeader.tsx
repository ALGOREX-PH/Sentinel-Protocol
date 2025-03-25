import React from 'react';
import { Shield } from 'lucide-react';

export default function SecurityHeader() {
  return (
    <div className="relative bg-blue-50/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-sentinel-white">Security & Compliance</span>{' '}
          <span className="text-sentinel-cyan">in Crypto</span>
        </h1>
        <p className="text-lg text-sentinel-white/70 mb-8 max-w-3xl mx-auto">
          Your trusted resource for cryptocurrency project verification, regulatory compliance, and security assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
            Verify Project
          </button>
          <button className="px-8 py-4 bg-sentinel-dark-800/50 text-sentinel-white rounded-lg font-medium hover:bg-sentinel-dark-700/50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}