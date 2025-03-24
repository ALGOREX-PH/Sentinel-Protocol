import React from 'react';
import { AlertTriangle, TrendingDown, Wallet, Shield } from 'lucide-react';

const alerts = [
  {
    type: 'High Risk',
    icon: AlertTriangle,
    title: 'Potential Rug Pull Detected',
    project: 'MoonBase Token',
    time: '10 minutes ago',
    description: 'Large liquidity removal detected. Developer wallet moving funds to CEX.',
    severity: 'high',
  },
  {
    type: 'Suspicious Activity',
    icon: TrendingDown,
    title: 'Market Manipulation Alert',
    project: 'GLO Finance',
    time: '1 hour ago',
    description: 'Coordinated pump detected with bot activity on social media.',
    severity: 'medium',
  },
  {
    type: 'Wallet Alert',
    icon: Wallet,
    title: 'Developer Wallet Movement',
    project: 'Yield Farm X',
    time: '2 hours ago',
    description: 'Multiple large transfers to Tornado Cash detected.',
    severity: 'high',
  },
];

export default function AlertsSection() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Real-Time Scam Alerts</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Stay ahead of scams with intelligent alerts as they happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alerts.map((alert) => (
            <div
              key={alert.title}
              className={`bg-sentinel-dark-800/50 rounded-xl p-6 border ${
                alert.severity === 'high'
                  ? 'border-sentinel-secondary'
                  : 'border-sentinel-gold'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <alert.icon className={`h-5 w-5 ${
                  alert.severity === 'high'
                    ? 'text-sentinel-secondary'
                    : 'text-sentinel-gold'
                }`} />
                <span className={`text-sm font-medium ${
                  alert.severity === 'high'
                    ? 'text-sentinel-secondary'
                    : 'text-sentinel-gold'
                }`}>{alert.type}</span>
              </div>

              <h3 className="text-lg font-semibold text-sentinel-white mb-2">{alert.title}</h3>
              <p className="text-sentinel-white/60 mb-4">{alert.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-sentinel-white/40">{alert.project}</span>
                <span className="text-sentinel-white/40">{alert.time}</span>
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-sentinel-dark-700 hover:bg-sentinel-dark-600 text-sentinel-white rounded-lg transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
            View All Alerts <Shield className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}