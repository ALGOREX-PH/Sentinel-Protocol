import React from 'react';
import { Network, Brain, ShieldCheck } from 'lucide-react';

const visionPoints = [
  {
    icon: Network,
    title: 'Verified Network',
    description: 'A network of verified fraud indicators maintained by users and analysts alike.',
  },
  {
    icon: Brain,
    title: 'Real-time Detection',
    description: 'Scam detection powered by machine learning and on-chain pattern analysis.',
  },
  {
    icon: ShieldCheck,
    title: 'Reputation System',
    description: 'Clear reputation metrics for wallets, tokens, and DeFi platforms.',
  },
];

export default function OurVision() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Our Vision</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            We envision a world where every crypto transaction is secured by intelligence, and where 
            every investor has the tools to confidently navigate the digital frontier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPoints.map((point) => (
            <div
              key={point.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700"
            >
              <point.icon className="h-12 w-12 text-sentinel-cyan mb-6" />
              <h3 className="text-xl font-semibold text-sentinel-white mb-4">{point.title}</h3>
              <p className="text-sentinel-white/60">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}