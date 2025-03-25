import React from 'react';
import { Rocket } from 'lucide-react';

export default function RoadmapHeader() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-sentinel-white">Roadmap &</span>{' '}
          <span className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
            Future Updates
          </span>
        </h1>
        <p className="text-lg text-sentinel-white/70 mb-8 max-w-3xl mx-auto">
          A living blueprint of Sentinel Protocol's evolution, combining technical insights, user-driven feedback,
          and interactive visualizations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <Rocket className="h-5 w-5" />
            Submit Feature Request
          </button>
        </div>
      </div>
    </div>
  );
}