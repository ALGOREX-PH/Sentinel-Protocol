import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-sentinel-cyan" />
            <span className="text-lg font-semibold">Sentinel Protocol</span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">Features</a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">How It Works</a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">Statistics</a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">News</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sentinel-white/60 hover:text-sentinel-white transition-colors">Login</button>
            <button className="bg-sentinel-cyan hover:bg-sentinel-teal px-4 py-2 rounded-lg text-sentinel-white transition-colors">
              Get Started
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-sentinel-white/60 hover:text-sentinel-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors px-2">Features</a>
              <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors px-2">How It Works</a>
              <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors px-2">Statistics</a>
              <a href="#" className="text-sentinel-white/60 hover:text-sentinel-white transition-colors px-2">News</a>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <button className="text-sentinel-white/60 hover:text-sentinel-white transition-colors px-2">Login</button>
                <button className="bg-sentinel-cyan hover:bg-sentinel-teal px-4 py-2 rounded-lg text-sentinel-white transition-colors mx-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}