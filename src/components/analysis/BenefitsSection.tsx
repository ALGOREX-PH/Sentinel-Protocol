import React from 'react';
import { Zap, Shield, Heart, Star } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get scan results within seconds',
  },
  {
    icon: Shield,
    title: 'Scam Prevention',
    description: 'Avoid costly investment mistakes',
  },
  {
    icon: Heart,
    title: 'Peace of Mind',
    description: 'Invest with confidence & security',
  },
  {
    icon: Star,
    title: 'Trustworthy',
    description: 'Regular updates & improvements',
  },
];

export default function BenefitsSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Benefits to Users</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Why thousands of investors trust our analysis tools
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sentinel-cyan/10 mb-6">
                <benefit.icon className="h-8 w-8 text-sentinel-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-sentinel-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-sentinel-white/60">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}