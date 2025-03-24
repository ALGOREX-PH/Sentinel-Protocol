import React from 'react';
import { Shield, Key, Settings } from 'lucide-react';

const recommendations = [
  {
    icon: Shield,
    title: 'Enable 2FA for connected wallets',
    description: 'Add an extra layer of security to your wallet connections',
    action: 'Enable Now',
  },
  {
    icon: Key,
    title: 'Review smart contract permissions',
    description: 'Check and revoke unnecessary contract approvals',
    action: 'Review',
  },
  {
    icon: Settings,
    title: 'Update transaction monitoring settings',
    description: 'Customize your alert preferences and thresholds',
    action: 'Update',
  },
];

export default function SecurityRecommendations() {
  return (
    <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700">
      <h2 className="text-xl font-bold text-sentinel-white mb-6">Security Recommendations</h2>
      
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.title}
            className="p-4 rounded-lg bg-sentinel-dark-700/30 hover:bg-sentinel-dark-700/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <rec.icon className="h-5 w-5 text-sentinel-cyan mt-1" />
              <div className="flex-1">
                <h3 className="font-medium text-sentinel-white mb-1">{rec.title}</h3>
                <p className="text-sm text-sentinel-white/60 mb-3">{rec.description}</p>
                <button className="text-sm text-sentinel-cyan hover:text-sentinel-teal transition-colors">
                  {rec.action} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}