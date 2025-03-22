import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Start Securing Your Investments Today</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto mb-8">
            Don't fall victim to crypto scams. Use our AI-powered scanner to verify smart contracts before investing.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
            Launch Scanner Now
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}