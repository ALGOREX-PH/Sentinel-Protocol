import React from 'react';
import { Globe } from 'lucide-react';

export default function BasicInfo() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-sentinel-white mb-2">
          Project Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
          placeholder="Enter project name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-sentinel-white mb-2">
          Website URL
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
            <Globe className="h-5 w-5" />
          </span>
          <input
            type="url"
            className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            placeholder="https://"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-sentinel-white mb-2">
          Blockchain Type
        </label>
        <select className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all">
          <option value="">Select blockchain</option>
          <option value="ethereum">Ethereum</option>
          <option value="bsc">BSC</option>
          <option value="solana">Solana</option>
          <option value="polygon">Polygon</option>
        </select>
      </div>
    </div>
  );
}