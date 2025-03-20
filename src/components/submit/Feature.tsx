import React from 'react';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="p-6 rounded-xl bg-sentinel-dark-800/50 border border-sentinel-dark-700">
      <Icon className="h-8 w-8 text-sentinel-cyan mb-4" />
      <h3 className="text-lg font-semibold text-sentinel-white mb-2">{title}</h3>
      <p className="text-sm text-sentinel-white/60">{description}</p>
    </div>
  );
}