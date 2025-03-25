import React from 'react';
import { Shield, Brain, Lock } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sentinel-white mb-6">Who We Are</h2>
            <p className="text-sentinel-white/70 mb-6">
              Sentinel Protocol is a decentralized threat intelligence platform combining the power of AI, 
              blockchain analytics, and crowdsourced insights to fight fraud, scams, and malicious actors 
              in the crypto space.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-sentinel-cyan shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-sentinel-white mb-2">Security First</h3>
                  <p className="text-sentinel-white/60">
                    Protecting crypto investors through advanced threat detection and prevention.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="h-6 w-6 text-sentinel-cyan shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-sentinel-white mb-2">AI-Powered</h3>
                  <p className="text-sentinel-white/60">
                    Leveraging machine learning for predictive scam detection and analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-sentinel-cyan shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-sentinel-white mb-2">Trusted Platform</h3>
                  <p className="text-sentinel-white/60">
                    Building confidence through transparency and community-driven insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=800"
                alt="Team Working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sentinel-dark-900/80 via-transparent to-sentinel-cyan/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}