import React from 'react';
import { AlertTriangle, TrendingDown, ArrowRight } from 'lucide-react';

const alerts = [
  {
    type: 'High Risk',
    title: 'Liquidity Pool Drain Detected',
    description: 'Unusual activity detected in connected DeFi protocol',
    time: '2 minutes ago',
    severity: 'high',
  },
  {
    type: 'Warning',
    title: 'Suspicious Transaction Pattern',
    description: 'Multiple micro-transactions detected from unknown source',
    time: '15 minutes ago',
    severity: 'medium',
  },
];

export default function AlertCenter() {
  return (
    <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-sentinel-white">Alert Center</h2>
        <button className="text-sentinel-cyan hover:text-sentinel-teal transition-colors text-sm">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className={`p-4 rounded-lg ${
              alert.severity === 'high'
                ? 'bg-sentinel-secondary/10'
                : 'bg-sentinel-gold/10'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {alert.severity === 'high' ? (
                <AlertTriangle className="h-5 w-5 text-sentinel-secondary" />
              ) : (
                <TrendingDown className="h-5 w-5 text-sentinel-gold" />
              )}
              <span className={`text-sm font-medium ${
                alert.severity === 'high'
                  ? 'text-sentinel-secondary'
                  : 'text-sentinel-gold'
              }`}>
                {alert.type}
              </span>
            </div>
            <h3 className="font-medium text-sentinel-white mb-1">{alert.title}</h3>
            <p className="text-sm text-sentinel-white/60 mb-2">{alert.description}</p>
            <div className="text-xs text-sentinel-white/40">{alert.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}