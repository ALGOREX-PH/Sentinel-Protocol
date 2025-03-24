import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Don't Just Track the Market. Outsmart It.</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto mb-8">
            Sign up for real-time alerts and make smarter, safer decisions in crypto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Enable Alerts
            </button>
            <button className="px-8 py-4 bg-sentinel-dark-800/50 text-sentinel-white rounded-lg font-medium hover:bg-sentinel-dark-700/50 transition-all flex items-center gap-2">
              Learn More <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}