import React from 'react';
import { TrendingDown, Bot, Users } from 'lucide-react';

const manipulations = [
  {
    title: 'Pump & Dump Detection',
    description: 'AI-powered detection of coordinated price manipulation schemes.',
    metrics: [
      { label: 'Price Spike', value: '+70%' },
      { label: 'Real Wallets', value: '<10' },
      { label: 'Bot Activity', value: 'High' },
    ],
  },
  {
    title: 'Fake Engagement',
    description: 'Analysis of artificial social media engagement and bot networks.',
    metrics: [
      { label: 'Bot Accounts', value: '2,450' },
      { label: 'Fake Posts', value: '12K+' },
      { label: 'Risk Level', value: 'High' },
    ],
  },
  {
    title: 'Insider Trading',
    description: 'Tracking of suspicious wallet activity before major announcements.',
    metrics: [
      { label: 'Linked Wallets', value: '15' },
      { label: 'Volume Spike', value: '300%' },
      { label: 'Time Frame', value: '24h' },
    ],
  },
];

export default function MarketManipulation() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Market Manipulation Reports</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Real-time detection of artificial market movements and coordinated manipulation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {manipulations.map((item, index) => (
            <div
              key={item.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700"
            >
              <div className="flex items-center gap-3 mb-6">
                {index === 0 && <TrendingDown className="h-8 w-8 text-sentinel-secondary" />}
                {index === 1 && <Bot className="h-8 w-8 text-sentinel-gold" />}
                {index === 2 && <Users className="h-8 w-8 text-sentinel-cyan" />}
                <h3 className="text-xl font-semibold text-sentinel-white">{item.title}</h3>
              </div>
              
              <p className="text-sentinel-white/60 mb-6">{item.description}</p>

              <div className="space-y-4">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-sentinel-white/40">{metric.label}</span>
                    <span className="font-medium text-sentinel-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}