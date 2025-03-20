import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-sentinel-cyan" />
            <span className="text-lg font-semibold">Sentinel Protocol</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">Features</a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">How It Works</a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">Statistics</a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">News</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">Login</button>
            <button className="bg-sentinel-cyan hover:bg-sentinel-teal px-4 py-2 rounded-lg text-sentinel-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}