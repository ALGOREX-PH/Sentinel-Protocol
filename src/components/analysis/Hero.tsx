import React from 'react';
import { Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-sentinel-white">AI-Powered Risk Analysis &</span>{' '}
              <span className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
                Smart Contract Scanner
              </span>
            </h1>
            <p className="text-lg text-sentinel-white/70 mb-8">
              Your first line of defense against crypto scams and vulnerable smart contracts. Analyze before you invest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
                Start Scanning
              </button>
              <button className="px-8 py-4 bg-sentinel-dark-800/50 text-sentinel-white rounded-lg font-medium hover:bg-sentinel-dark-700/50 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
                alt="AI Analysis Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sentinel-dark-900/80 via-transparent to-sentinel-cyan/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-32 w-32 text-sentinel-cyan opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}