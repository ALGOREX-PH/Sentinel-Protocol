import React from 'react';
import { AlertTriangle, TrendingUp, Users } from 'lucide-react';

const alerts = [
  {
    type: 'Trending',
    icon: TrendingUp,
    title: 'New Rug Pull Detected: CryptoMoon Token',
    time: '2 hours ago',
    color: 'text-sentinel-secondary'
  },
  {
    type: 'High Profile',
    icon: AlertTriangle,
    title: 'Major DeFi Protocol Exploit Analysis',
    time: '5 hours ago',
    color: 'text-sentinel-gold'
  },
  {
    type: 'Community',
    icon: Users,
    title: 'Suspicious Token Contract Flagged',
    time: '1 day ago',
    color: 'text-sentinel-cyan'
  }
];

export default function ScamAlerts() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Scam Alerts & News</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Stay informed about the latest threats and security incidents
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alerts.map((alert) => (
            <div
              key={alert.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-6 hover:bg-sentinel-dark-700/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <alert.icon className={`h-6 w-6 ${alert.color}`} />
                <span className={`text-sm font-medium ${alert.color}`}>
                  {alert.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{alert.title}</h3>
              <p className="text-sentinel-white/40 text-sm">{alert.time}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-sentinel-dark-700 hover:bg-sentinel-dark-800 text-sentinel-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
            View All Alerts <AlertTriangle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}