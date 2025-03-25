import React from 'react';
import { AlertTriangle, FileCheck, TrendingUp, Wallet } from 'lucide-react';

const tips = [
  {
    icon: AlertTriangle,
    title: 'Spot Scams',
    description: 'Learn to identify red flags and protect yourself from fraudulent projects.',
    link: '#',
  },
  {
    icon: FileCheck,
    title: 'Verify Audits',
    description: 'How to authenticate security certifications and audit reports.',
    link: '#',
  },
  {
    icon: TrendingUp,
    title: 'Avoid Pump & Dumps',
    description: 'Recognize the patterns of market manipulation schemes.',
    link: '#',
  },
  {
    icon: Wallet,
    title: 'Secure Storage',
    description: 'Best practices for keeping your crypto assets safe.',
    link: '#',
  },
];

export default function SecurityTips() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Crypto Investment Security Tips</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Essential knowledge to protect your investments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700 hover:border-sentinel-cyan/50 transition-all"
            >
              <tip.icon className="h-8 w-8 text-sentinel-cyan mb-4" />
              <h3 className="text-lg font-semibold text-sentinel-white mb-2">{tip.title}</h3>
              <p className="text-sentinel-white/60 mb-4">{tip.description}</p>
              <a
                href={tip.link}
                className="text-sentinel-cyan hover:text-sentinel-teal transition-colors"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}