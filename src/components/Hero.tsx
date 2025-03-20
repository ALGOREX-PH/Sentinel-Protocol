import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Shield className="h-16 w-16 text-sentinel-cyan mx-auto mb-8" />
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block text-sentinel-cyan">Sentinel Protocol</span>
            <span className="block">The Future of Trust in Crypto</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-sentinel-white/80 mb-8">
            The ultimate vetting platform for crypto projects, combining community-driven reviews,
            AI-powered risk assessment, and blockchain transparency.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-sentinel-secondary hover:bg-sentinel-crimson text-sentinel-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              Start Exploring <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-sentinel-gray hover:border-sentinel-cyan px-8 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.sentinel.cyan),transparent)]" />
    </div>
  );
}