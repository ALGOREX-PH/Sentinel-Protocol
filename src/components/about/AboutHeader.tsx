import React from 'react';
import { Shield } from 'lucide-react';

export default function AboutHeader() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-sentinel-white">Empowering Crypto with</span>{' '}
          <span className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
            Security, Transparency, and Trust
          </span>
        </h1>
        <p className="text-lg text-sentinel-white/70 mb-8 max-w-3xl mx-auto">
          In the rapidly expanding world of cryptocurrency and decentralized finance, trust is everything. 
          We exist to protect the people who believe in the promise of Web3.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
            Learn More
          </button>
          <button className="px-8 py-4 bg-sentinel-dark-800/50 text-sentinel-white rounded-lg font-medium hover:bg-sentinel-dark-700/50 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}