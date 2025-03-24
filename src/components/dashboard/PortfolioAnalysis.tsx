import React from 'react';
import { Bitcoin, Feather as Ethereum } from 'lucide-react';

const assets = [
  {
    name: 'Bitcoin',
    icon: Bitcoin,
    percentage: 45,
    color: 'text-orange-500',
  },
  {
    name: 'Ethereum',
    icon: Ethereum,
    percentage: 30,
    color: 'text-blue-500',
  },
  {
    name: 'Other Assets',
    percentage: 25,
    color: 'text-gray-500',
  },
];

export default function PortfolioAnalysis() {
  return (
    <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700">
      <h2 className="text-xl font-bold text-sentinel-white mb-6">Portfolio Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium text-sentinel-white mb-4">Risk Distribution</h3>
          <div className="h-48 bg-sentinel-dark-700/50 rounded-lg"></div>
        </div>

        <div>
          <h3 className="font-medium text-sentinel-white mb-4">Asset Breakdown</h3>
          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {asset.icon && <asset.icon className={`h-5 w-5 ${asset.color}`} />}
                  <span className="text-sentinel-white">{asset.name}</span>
                </div>
                <span className={`font-medium ${asset.color}`}>{asset.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}