import React from 'react';
import { Bug, Coins, Shield } from 'lucide-react';

const features = [
  {
    icon: Bug,
    title: 'Submit Vulnerabilities',
    description: 'Report technical vulnerabilities in Web3 projects—including smart contracts, dApps, and infrastructure.',
  },
  {
    icon: Coins,
    title: 'Earn Crypto Bounties',
    description: 'Get rewarded with cryptocurrency for submissions based on severity and impact.',
  },
  {
    icon: Shield,
    title: 'Protect Web3',
    description: 'Contribute directly to a safer ecosystem through immediate notification and remediation support.',
  },
];

export default function BountyFeatures() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700 hover:border-sentinel-cyan/50 transition-all"
            >
              <feature.icon className="h-12 w-12 text-sentinel-cyan mb-6" />
              <h3 className="text-xl font-semibold text-sentinel-white mb-4">{feature.title}</h3>
              <p className="text-sentinel-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}