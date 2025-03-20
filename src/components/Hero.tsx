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
    <div className="relative overflow-hidden pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-sentinel-white">Protecting Your Crypto:</span>
              <div className="mt-2">
                <span className="text-blue-500">AI-Powered Scam Detection</span>
                {" & "}
                <span className="text-blue-500">Community-Driven Security</span>
              </div>
            </h1>
            <p className="text-lg text-sentinel-white/80 mb-8">
              Secure your investments with real-time threat detection and community-verified insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                Submit a Project <ArrowRight className="h-5 w-5" />
              </button>
                Explore Scam Reports <AlertTriangle className="h-5 w-5" />
              </button>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                Join the Community
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
                alt="Blockchain Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}