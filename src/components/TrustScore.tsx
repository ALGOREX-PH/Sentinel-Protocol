import React from 'react';
import { Shield, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

const trustLevels = [
  {
    icon: AlertTriangle,
    color: 'text-sentinel-secondary',
    bgColor: 'bg-sentinel-secondary/10',
    title: 'High-Risk Alert',
    description: 'Major red flags, high scam probability',
  },
  {
    icon: HelpCircle,
    color: 'text-sentinel-gold',
    bgColor: 'bg-sentinel-gold/10',
    title: 'Cautionary Project',
    description: 'Needs further review, mixed signals',
  },
  {
    icon: CheckCircle,
    color: 'text-sentinel-teal',
    bgColor: 'bg-sentinel-teal/10',
    title: 'Community Verified',
    description: 'Trusted by a large number of analysts',
  },
  {
    icon: Shield,
    color: 'text-sentinel-cyan',
    bgColor: 'bg-sentinel-cyan/10',
    title: 'Sentinel Approved',
    description: 'Fully vetted, transparent, passed all security checks',
  },
];

export default function TrustScore() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trust Score System</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Our comprehensive verification system helps you make informed decisions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustLevels.map((level) => (
            <div
              key={level.title}
              className={`p-6 rounded-xl ${level.bgColor} border border-sentinel-dark-800`}
            >
              <level.icon className={`h-12 w-12 ${level.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
              <p className="text-sentinel-white/60">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}