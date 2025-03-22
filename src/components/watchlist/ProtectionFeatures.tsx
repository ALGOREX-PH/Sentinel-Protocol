import React from 'react';
import { Brain, Users, Bell } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    description: 'Advanced algorithms continuously scan for suspicious patterns and potential threats',
  },
  {
    icon: Users,
    title: 'Community Reports',
    description: 'Crowdsourced intelligence from thousands of crypto users worldwide',
  },
  {
    icon: Bell,
    title: 'Real-time Alerts',
    description: 'Instant notifications about suspicious activities and potential threats',
  },
];

export default function ProtectionFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <h2 className="text-2xl font-bold text-center text-sentinel-white mb-12">
        Powerful Protection Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sentinel-cyan/10 mb-6">
              <feature.icon className="h-8 w-8 text-sentinel-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-sentinel-white mb-3">
              {feature.title}
            </h3>
            <p className="text-sentinel-white/60">
              {feature.description}
            </p>
            <button className="mt-4 px-4 py-2 bg-sentinel-dark-700 hover:bg-sentinel-dark-600 text-sentinel-white rounded-lg transition-colors text-sm">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}