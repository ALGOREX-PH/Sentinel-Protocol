import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function DemoSection() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">See Sentinel in Action</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Follow Max's journey exploring a new DeFi platform
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64"
                alt="Max"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium text-sentinel-white">Max's Journey</h3>
                <p className="text-sm text-sentinel-white/60">Exploring a new DeFi platform</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sentinel-cyan/10 flex items-center justify-center text-sentinel-cyan">
                  1
                </div>
                <p className="text-sentinel-white/60">Site domain and SSL certificate scan</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sentinel-cyan/10 flex items-center justify-center text-sentinel-cyan">
                  2
                </div>
                <p className="text-sentinel-white/60">Smart contract analysis and pattern detection</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sentinel-cyan/10 flex items-center justify-center text-sentinel-cyan">
                  3
                </div>
                <p className="text-sentinel-white/60">Social signals and community reports check</p>
              </div>

              <div className="mt-8 p-4 bg-sentinel-secondary/10 rounded-lg border border-sentinel-secondary/20">
                <div className="flex items-center gap-2 text-sentinel-secondary mb-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span className="font-medium">High Risk Alert</span>
                </div>
                <p className="text-sentinel-white/60">
                  This DeFi project has been flagged as high-risk due to suspicious contract behavior and multiple community-reported incidents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}