import React from 'react';
import { AlertTriangle, Shield, Brain, Activity } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-sentinel-secondary/10 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-6 w-6 text-sentinel-secondary" />
            <h2 className="text-2xl font-bold text-sentinel-secondary">Crypto's Trust Deficit</h2>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">The Challenge</h3>
            <p className="text-sentinel-white/60">
              Crypto scams and fraudulent behaviors annually through rug pulls, phishing attacks, and fraudulent projects.
            </p>
          </div>
          <div className="bg-sentinel-dark-800/50 rounded-xl p-6">
            <div className="text-4xl font-bold text-sentinel-secondary mb-2">$12.5B</div>
            <div className="text-sentinel-white/60">Lost to crypto scams in 2023</div>
          </div>
        </div>
        
        <div className="bg-sentinel-cyan/10 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-sentinel-cyan" />
            <h2 className="text-2xl font-bold text-sentinel-cyan">How Sentinel Protocol Fixes It</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-sentinel-cyan shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Crowdsourced Intelligence</h3>
                <p className="text-sentinel-white/60">Investors contribute insights, verify projects, and vote on legitimacy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Brain className="h-6 w-6 text-sentinel-cyan shrink-0" />
              <div>
                <h3 className="font-medium mb-1">AI-Powered Scam Detection</h3>
                <p className="text-sentinel-white/60">Machine learning scans whitepapers, smart contracts, and social media for red flags.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Activity className="h-6 w-6 text-sentinel-cyan shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Blockchain Transparency</h3>
                <p className="text-sentinel-white/60">Monitors and tracks suspicious fund movements, making fraud easier to detect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}