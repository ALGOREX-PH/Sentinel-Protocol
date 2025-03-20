import React from 'react';
import { Shield, AlertTriangle, Vote, Brain, Database } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Crowdsourced Intelligence',
    description: 'Investors review and vote on project legitimacy, creating a trusted network of verification.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Scam Detection',
    description: 'Smart contract auditing and sentiment analysis to identify potential risks.',
  },
  {
    icon: Database,
    title: 'Blockchain Transparency',
    description: 'Real-time tracking of wallets and fund movements for complete visibility.',
  },
  {
    icon: Vote,
    title: 'Verified Trust Scores',
    description: 'Projects earn reputation scores based on multiple factors and community validation.',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Protecting investors through advanced technology and community collaboration
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-4 sm:p-6 rounded-xl bg-sentinel-dark-800/50 hover:bg-sentinel-dark-700/50 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-sentinel-cyan mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sentinel-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}