import React from 'react';
import { Shield } from 'lucide-react';

export default function MembershipHeader() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-sentinel-white">Begin Your Journey Toward Smarter</span>{' '}
          <span className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
            Web3 Protection
          </span>
        </h1>
        <p className="text-lg text-sentinel-white/70 mb-8 max-w-2xl mx-auto">
          In a decentralized world filled with opportunity, security should be your first move—not your last resort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
            Create Account Now
          </button>
          <button className="px-8 py-4 bg-sentinel-dark-800/50 text-sentinel-white rounded-lg font-medium hover:bg-sentinel-dark-700/50 transition-all">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}