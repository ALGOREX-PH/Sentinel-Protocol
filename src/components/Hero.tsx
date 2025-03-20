import React from 'react';
import { Shield, ArrowRight, AlertTriangle, Globe } from 'lucide-react';

const LiveStats = () => (
  <div className="absolute top-0 left-0 w-full h-full -z-20">
    <div className="relative w-full h-full">
      <div className="animate-pulse absolute top-1/4 left-1/4 bg-sentinel-secondary/20 w-2 h-2 rounded-full" />
      <div className="animate-pulse absolute top-1/2 right-1/3 bg-sentinel-cyan/20 w-3 h-3 rounded-full" />
      <div className="animate-pulse absolute bottom-1/3 right-1/4 bg-sentinel-gold/20 w-2 h-2 rounded-full" />
    </div>
  </div>
);

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="relative inline-block">
            <Shield className="h-16 w-16 text-sentinel-cyan mx-auto mb-8" />
            <Globe className="absolute -right-2 -bottom-2 h-8 w-8 text-sentinel-secondary animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block text-sentinel-cyan">Sentinel Protocol</span>
            <span className="block">Protecting Your Crypto:</span>
            <span className="block text-2xl sm:text-4xl mt-2">
              <span className="text-sentinel-cyan">AI-Powered Scam Detection</span>
              {" & "}
              <span className="text-sentinel-secondary">Community-Driven Security</span>
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-sentinel-white/80 mb-8">
            Secure your investments with real-time threat detection and community-verified insights.
            Join thousands of investors protecting their portfolios today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <button className="bg-sentinel-secondary hover:bg-sentinel-crimson text-sentinel-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors flex-1">
              Submit a Project <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-sentinel-dark-700 hover:bg-sentinel-dark-800 border border-sentinel-cyan px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 flex-1">
              Explore Scam Reports <AlertTriangle className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-sentinel-dark-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-sentinel-cyan mb-2">$12.5B</div>
              <div className="text-sentinel-white/60">Lost to crypto scams in 2023</div>
            </div>
            <div className="bg-sentinel-dark-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-sentinel-gold mb-2">10,000+</div>
              <div className="text-sentinel-white/60">Projects reviewed</div>
            </div>
            <div className="bg-sentinel-dark-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-sentinel-secondary mb-2">2,891</div>
              <div className="text-sentinel-white/60">Scams flagged</div>
            </div>
          </div>
        </div>
      </div>
      <LiveStats />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.sentinel.cyan),transparent)] opacity-20" />
    </div>
  );
}