import React from 'react';
import { Building2, Globe2, MapPin } from 'lucide-react';

const regions = [
  {
    icon: Building2,
    title: 'United States',
    items: [
      { text: 'SEC Compliance', status: 'complete' },
      { text: 'FinCEN Registration', status: 'complete' },
      { text: 'CFTC Guidelines', status: 'complete' },
    ],
  },
  {
    icon: Globe2,
    title: 'European Union',
    items: [
      { text: 'MiCA Compliance', status: 'complete' },
      { text: 'AML Directives', status: 'complete' },
      { text: 'GDPR Alignment', status: 'complete' },
    ],
  },
  {
    icon: MapPin,
    title: 'Asia-Pacific',
    items: [
      { text: 'MAS Singapore', status: 'complete' },
      { text: 'JFSA Japan', status: 'complete' },
      { text: 'Hong Kong SFC', status: 'pending' },
    ],
  },
];

export default function ComplianceCheck() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-sentinel-white mb-16">
          Global Regulatory Compliance Check
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div
              key={region.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <region.icon className="h-6 w-6 text-sentinel-cyan" />
                <h3 className="text-xl font-semibold text-sentinel-white">
                  {region.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {region.items.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      item.status === 'complete' ? 'bg-green-500' : 'bg-sentinel-gold'
                    }`} />
                    <span className="text-sentinel-white/70">{item.text}</span>
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