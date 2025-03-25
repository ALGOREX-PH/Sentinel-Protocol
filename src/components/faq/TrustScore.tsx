import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle, Shield } from 'lucide-react';

const scores = [
  {
    range: '0-30',
    label: 'High Risk',
    icon: AlertTriangle,
    color: 'text-sentinel-secondary',
    bgColor: 'bg-sentinel-secondary/10',
    borderColor: 'border-sentinel-secondary/20',
    meaning: 'Strong indicators of fraud or failure',
    action: 'Avoid Investing',
  },
  {
    range: '31-60',
    label: 'Proceed with Caution',
    icon: AlertCircle,
    color: 'text-sentinel-gold',
    bgColor: 'bg-sentinel-gold/10',
    borderColor: 'border-sentinel-gold/20',
    meaning: 'Risk factors present; deeper research needed',
    action: 'Investigate Further',
  },
  {
    range: '61-80',
    label: 'Community Verified',
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    meaning: 'Solid fundamentals and reputation',
    action: 'Reasonably Safe',
  },
  {
    range: '81-100',
    label: 'Sentinel Approved',
    icon: Shield,
    color: 'text-sentinel-cyan',
    bgColor: 'bg-sentinel-cyan/10',
    borderColor: 'border-sentinel-cyan/20',
    meaning: 'Fully vetted and actively monitored',
    action: 'Considered Secure & Trustworthy',
  },
];

export default function TrustScore() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Understanding the Trust Score</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Our proprietary AI-powered credibility ranking system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scores.map((score) => (
            <div
              key={score.range}
              className={`${score.bgColor} rounded-xl p-6 border ${score.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <score.icon className={`h-6 w-6 ${score.color}`} />
                <span className={`font-medium ${score.color}`}>{score.range}</span>
              </div>
              <h3 className="text-xl font-semibold text-sentinel-white mb-2">{score.label}</h3>
              <p className="text-sentinel-white/60 mb-4">{score.meaning}</p>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${score.bgColor} ${score.color}`}>
                {score.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}