import React from 'react';
import { Code, Shield, Database, AlertTriangle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Smart Contract Risk Evaluation',
    description: 'AI-powered risk scores and detailed analysis of smart contracts.',
  },
  {
    icon: Database,
    title: 'Project Reputation Data',
    description: 'Query metadata for domain trustworthiness and verified identities.',
  },
  {
    icon: AlertTriangle,
    title: 'Phishing & Scam Detection',
    description: 'Identify malicious URLs and impersonation attacks in real-time.',
  },
];

const useCases = [
  {
    title: 'Crypto Wallets',
    description: 'Integrate protection layer that alerts users before approving suspicious transactions.',
  },
  {
    title: 'Crypto Exchanges',
    description: 'Enhance listing due diligence by screening smart contracts and project metadata.',
  },
  {
    title: 'DeFi Platforms',
    description: 'Embed contract screening into lending and staking services.',
  },
];

export default function ApiSection() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-sentinel-cyan" />
              <h2 className="text-2xl font-bold text-sentinel-white">Sentinel API</h2>
            </div>
            <p className="text-sentinel-white/60 mb-8">
              Embed real-time scam detection directly into your platform with our powerful API.
            </p>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-6 bg-sentinel-dark-800/50 rounded-xl border border-sentinel-dark-700"
                >
                  <feature.icon className="h-6 w-6 text-sentinel-cyan shrink-0" />
                  <div>
                    <h3 className="font-medium text-sentinel-white mb-2">{feature.title}</h3>
                    <p className="text-sentinel-white/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-sentinel-white mb-6">Popular Use Cases</h3>
            <div className="space-y-6">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-6 bg-sentinel-dark-800/50 rounded-xl border border-sentinel-dark-700"
                >
                  <h4 className="font-medium text-sentinel-white mb-2">{useCase.title}</h4>
                  <p className="text-sentinel-white/60">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}