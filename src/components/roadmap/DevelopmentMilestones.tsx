import React from 'react';
import { FileText, Brain, Wallet, Code } from 'lucide-react';

const milestones = [
  {
    quarter: 'Q1 2025',
    title: 'AI-Powered Whitepaper Scanner',
    description: 'Automates the audit of tokenomics and business claims.',
    status: 'completed',
    icon: FileText,
  },
  {
    quarter: 'Q2 2025',
    title: 'Smart Contract Security Scanner',
    description: 'Analyzes contract bytecode and logic in real-time.',
    status: 'in-progress',
    icon: Brain,
  },
  {
    quarter: 'Q3 2025',
    title: 'Wallet Risk Tracking System',
    description: 'Sends alerts based on wallet behaviors and anomalies.',
    status: 'planned',
    icon: Wallet,
  },
  {
    quarter: 'Q4 2025',
    title: 'Sentinel Developer API',
    description: 'Provides security insights to external dApps.',
    status: 'planned',
    icon: Code,
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'completed':
      return {
        badge: 'bg-green-500/10 text-green-500',
        border: 'border-green-500/20',
      };
    case 'in-progress':
      return {
        badge: 'bg-blue-500/10 text-blue-500',
        border: 'border-blue-500/20',
      };
    default:
      return {
        badge: 'bg-sentinel-gold/10 text-sentinel-gold',
        border: 'border-sentinel-gold/20',
      };
  }
};

export default function DevelopmentMilestones() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Development Milestones</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Track our progress as we build the future of crypto security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone) => {
            const styles = getStatusStyles(milestone.status);
            return (
              <div
                key={milestone.title}
                className={`bg-sentinel-dark-800/50 rounded-xl p-6 border ${styles.border}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <milestone.icon className="h-8 w-8 text-sentinel-cyan" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles.badge}`}>
                    {milestone.quarter}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-sentinel-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sentinel-white/60 mb-4">
                  {milestone.description}
                </p>
                <div className={`text-sm font-medium ${styles.badge} capitalize`}>
                  {milestone.status.replace('-', ' ')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}