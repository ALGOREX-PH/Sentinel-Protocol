import React from 'react';
import { Search, MessageSquare, Brain } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Fraud Detection',
    description: 'Flag suspicious projects and earn reputation points for accurate detection.',
  },
  {
    icon: MessageSquare,
    title: 'Comment Verification',
    description: 'Share insights and earn recognition through community validation.',
  },
  {
    icon: Brain,
    title: 'AI Model Training',
    description: 'Help train our AI by labeling content and fast-track your reputation.',
  },
];

export default function ReputationSystem() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">How Our Reputation System Works</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Build your reputation through active participation and accurate fraud detection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all"
            >
              <feature.icon className="h-12 w-12 text-sentinel-cyan mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-sentinel-white">{feature.title}</h3>
              <p className="text-sentinel-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}