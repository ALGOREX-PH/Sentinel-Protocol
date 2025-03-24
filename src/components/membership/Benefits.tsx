import React from 'react';
import { Shield, Brain, Bell } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Immediate Access to Free Features',
    description: 'Scan and review smart contracts using AI-enhanced detection, read basic project reviews, and join our community of watchdogs.',
    features: [
      'Scan and review smart contracts using AI-enhanced detection',
      'Read basic project reviews and scam signals',
      'Join a decentralized force of watchdogs',
    ],
  },
  {
    icon: Brain,
    title: 'Personalized Scam Intelligence Dashboard',
    description: 'Get timely updates on suspicious projects and monitor your watchlist in one centralized hub.',
    features: [
      'Receive timely updates on suspicious projects',
      'Save your contract scans and flagged wallets',
      'Monitor risk scores and activity logs',
    ],
  },
  {
    icon: Bell,
    title: 'Premium Upgrades & NFT Benefits',
    description: 'One-click upgrade to premium tier or activate NFT-based memberships for enhanced features.',
    features: [
      'One-click upgrade to premium tier',
      'Sentinel Guardian NFT for lifetime access',
      'Access to private reports and elite features',
    ],
  },
];

export default function Benefits() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Why Create an Account?</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Creating a Sentinel Protocol account is more than just gaining access—it's becoming part of a next-generation ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700"
            >
              <benefit.icon className="h-12 w-12 text-sentinel-cyan mb-6" />
              <h3 className="text-xl font-semibold text-sentinel-white mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sentinel-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-sentinel-cyan mt-2" />
                    <span>{feature}</span>
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