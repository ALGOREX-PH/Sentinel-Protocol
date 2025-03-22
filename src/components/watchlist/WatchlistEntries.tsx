import React from 'react';
import { ArrowRight, AlertTriangle, Clock, XCircle } from 'lucide-react';

const entries = [
  {
    type: 'High Risk',
    icon: AlertTriangle,
    iconColor: 'text-sentinel-secondary',
    bgColor: 'bg-sentinel-secondary/10',
    name: 'SafeMoon Clone #248',
    contract: '0x1234...5678',
    status: 'Honeypot Contract Detected',
    reports: 147,
    timeAgo: '2 hours ago',
  },
  {
    type: 'Under Investigation',
    icon: Clock,
    iconColor: 'text-sentinel-gold',
    bgColor: 'bg-sentinel-gold/10',
    name: 'Meta DeFi Protocol',
    contract: '0x9876...4321',
    status: 'Suspicious Liquidity Movements',
    reports: 89,
    timeAgo: '5 hours ago',
  },
  {
    type: 'Blacklisted',
    icon: XCircle,
    iconColor: 'text-sentinel-secondary',
    bgColor: 'bg-sentinel-secondary/10',
    name: 'Yield Farm X',
    contract: '0x5432...8765',
    status: 'Confirmed Rug Pull',
    reports: 312,
    timeAgo: '1 day ago',
  },
];

export default function WatchlistEntries() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-sentinel-white">Latest Watchlist Entries</h2>
        <div className="flex items-center gap-4">
          <select className="bg-sentinel-dark-800 text-sentinel-white border border-sentinel-dark-700 rounded-lg px-4 py-2">
            <option>All Networks</option>
          </select>
          <select className="bg-sentinel-dark-800 text-sentinel-white border border-sentinel-dark-700 rounded-lg px-4 py-2">
            <option>All Risk Levels</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <div key={entry.name} className="bg-sentinel-dark-800/50 rounded-xl border border-sentinel-dark-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <entry.icon className={`h-5 w-5 ${entry.iconColor}`} />
              <span className={`text-sm font-medium ${entry.iconColor}`}>{entry.type}</span>
            </div>

            <h3 className="text-lg font-semibold text-sentinel-white mb-2">{entry.name}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <code className="text-sm text-sentinel-white/60">{entry.contract}</code>
              </div>
              <div className="text-sm text-sentinel-white/60">{entry.status}</div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-sentinel-white/40">{entry.reports} reports</span>
              <span className="text-sentinel-white/40">{entry.timeAgo}</span>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-sentinel-dark-700 hover:bg-sentinel-dark-600 text-sentinel-white rounded-lg transition-colors flex items-center justify-center gap-2">
              View Details
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          View All Entries
        </button>
      </div>
    </div>
  );
}