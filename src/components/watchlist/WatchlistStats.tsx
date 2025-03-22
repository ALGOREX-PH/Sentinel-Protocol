import React from 'react';

const stats = [
  {
    value: '2,847',
    label: 'Scams Detected',
    color: 'text-sentinel-secondary',
  },
  {
    value: '456',
    label: 'Under Investigation',
    color: 'text-sentinel-gold',
  },
  {
    value: '$12.4M',
    label: 'Funds Protected',
    color: 'text-green-500',
  },
  {
    value: '24,129',
    label: 'Community Reports',
    color: 'text-blue-500',
  },
];

export default function WatchlistStats() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-xl p-6">
            <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2`}>
              {stat.value}
            </div>
            <div className="text-sentinel-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}