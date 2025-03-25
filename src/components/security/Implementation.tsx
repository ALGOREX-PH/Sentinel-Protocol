import React from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react';

const features = [
  'U.S. & EU Registered Entity',
  'Multiple Security Audits',
  'Multi-sig Implementation',
  'Verified Partnerships',
];

export default function Implementation() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-sentinel-white mb-16">
          Real World Implementation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700">
            <h3 className="text-xl font-semibold text-sentinel-white mb-6">
              DeFi Protocol Example
            </h3>
            
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sentinel-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-500 rounded-xl p-6 text-white">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Security Score</h3>
              <div className="text-6xl font-bold mb-2">95%</div>
              <p className="text-white/80 mb-6">High Confidence Rating</p>
              <button className="px-6 py-2 bg-white text-blue-500 rounded-lg font-medium hover:bg-white/90 transition-colors">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}