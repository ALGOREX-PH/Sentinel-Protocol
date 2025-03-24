import React from 'react';
import { Bell, Shield, Activity, Eye } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Get immediate notifications for suspicious websites and contracts.',
  },
  {
    icon: Shield,
    title: 'Phishing Detection',
    description: 'Identify fake domains and wallet-draining pages instantly.',
  },
  {
    icon: Activity,
    title: 'Trust Score Overlays',
    description: 'See reputation scores and security indicators at a glance.',
  },
  {
    icon: Eye,
    title: 'Social and On-Chain Analysis',
    description: 'Comprehensive scanning incorporating public sentiment and smart contract behavior.',
  },
];

export default function ExtensionSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Shield className="h-8 w-8 text-sentinel-cyan" />
          <h2 className="text-2xl font-bold text-sentinel-white">Browser Extension</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-sentinel-white/70 mb-8">
              Real-time protection as you browse the decentralized web. Our extension works silently in the background, scanning each site for signs of fraud or deception.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-sentinel-dark-800/50 rounded-xl border border-sentinel-dark-700"
                >
                  <feature.icon className="h-6 w-6 text-sentinel-cyan mb-4" />
                  <h3 className="font-medium text-sentinel-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-sentinel-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=800"
                alt="Browser Extension"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sentinel-dark-900/80 via-transparent to-sentinel-cyan/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-32 w-32 text-sentinel-cyan opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}