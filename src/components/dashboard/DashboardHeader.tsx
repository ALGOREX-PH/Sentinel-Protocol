import React from 'react';
import { TrendingUp, Bell, Wallet, ArrowUp } from 'lucide-react';

const stats = [
  {
    title: 'Portfolio Risk Score',
    value: '73/100',
    subtitle: 'Moderate Risk Level',
    trend: null,
    color: 'bg-blue-500',
    icon: TrendingUp,
  },
  {
    title: 'Active Alerts',
    value: '7',
    subtitle: '3 Critical Alerts',
    trend: null,
    color: 'bg-sentinel-secondary/10',
    icon: Bell,
  },
  {
    title: 'Monitored Assets',
    value: '24',
    subtitle: 'Across 3 Wallets',
    trend: null,
    color: 'bg-sentinel-cyan/10',
    icon: Wallet,
  },
  {
    title: 'Weekly Analysis',
    value: '+12%',
    subtitle: 'Risk Score Improvement',
    trend: 'up',
    color: 'bg-green-500/10',
    icon: ArrowUp,
  },
];

export default function DashboardHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`${stat.color} rounded-xl p-6 border border-sentinel-dark-700`}
        >
          <div className="flex items-center justify-between mb-4">
            <stat.icon className="h-6 w-6 text-sentinel-white" />
            {stat.trend === 'up' && (
              <span className="text-green-500">↑</span>
            )}
          </div>
          <div className="text-2xl font-bold text-sentinel-white mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-sentinel-white/60">
            {stat.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
}