import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Shield className="h-16 w-16 text-indigo-500 mx-auto mb-8" />
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block text-indigo-500">Sentinel Protocol</span>
            <span className="block">The Future of Trust in Crypto</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8">
            The ultimate vetting platform for crypto projects, combining community-driven reviews,
            AI-powered risk assessment, and blockchain transparency.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
              Start Exploring <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),transparent)]" />
    </div>
  );
}