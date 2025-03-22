import React from 'react';
import { Shield, Activity, Brain } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Smart Contract Security Analysis',
    description: 'Real-time code scanning to evaluate smart contract safety and identify potential vulnerabilities.',
  },
  {
    icon: Activity,
    title: 'Wallet Behavior Tracking',
    description: 'Monitor associated wallets and track suspicious transaction patterns.',
  },
  {
    icon: Brain,
    title: 'Code Pattern Comparison',
    description: 'Compare against known scam contracts using AI pattern recognition.',
  },
];

export default function CoreFeatures() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Our comprehensive security suite combines multiple layers of protection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700 hover:border-sentinel-cyan/50 transition-all"
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