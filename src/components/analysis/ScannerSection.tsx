import React, { useState } from 'react';
import { Search, AlertTriangle } from 'lucide-react';

export default function ScannerSection() {
  const [address, setAddress] = useState('');

  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-sentinel-white font-bold mb-4">Try the Scanner</h2>
            <p className="text-sentinel-white/60">
              Enter a smart contract address to start your security analysis
            </p>
          </div>

          <div className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700">
            <div className="relative mb-6">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter contract address (0x...)"
                className="w-full px-4 py-3 pl-12 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sentinel-white/40" />
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
              Scan Now
            </button>

            <div className="mt-6 p-4 rounded-lg bg-sentinel-secondary/10 border border-sentinel-secondary/20">
              <div className="flex items-center gap-2 text-sentinel-secondary mb-2">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-medium">HIGH RISK DETECTED</span>
              </div>
              <ul className="space-y-2 text-sm text-sentinel-white/60">
                <li>• No liquidity lock detected</li>
                <li>• Unlimited minting enabled</li>
                <li>• Similar to known rug pull contract</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}