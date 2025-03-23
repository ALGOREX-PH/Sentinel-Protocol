import React from 'react';
import { User, Award, Shield, Check } from 'lucide-react';

const tiers = [
  {
    icon: User,
    title: 'New Member',
    features: [
      'Basic voting rights',
      'Community participation',
      'Learning resources access',
    ],
  },
  {
    icon: Award,
    title: 'Verified Analyst',
    features: [
      'Enhanced voting power',
      'AI training access',
      'Reward eligibility',
    ],
  },
  {
    icon: Shield,
    title: 'Sentinel',
    features: [
      'Maximum influence',
      'Mentorship rights',
      'Priority features',
    ],
  },
];

export default function ReputationTiers() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Reputation Tiers</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Progress through tiers as you contribute to community safety
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-sentinel-cyan/10">
                  <tier.icon className="h-6 w-6 text-sentinel-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-sentinel-white">{tier.title}</h3>
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sentinel-white/60">
                    <Check className="h-4 w-4 text-sentinel-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}