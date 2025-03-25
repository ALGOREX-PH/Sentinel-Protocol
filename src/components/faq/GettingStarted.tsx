import React from 'react';
import { Search, Upload, Brain, Wallet } from 'lucide-react';

const guides = [
  {
    icon: Search,
    title: 'Search for Projects',
    description: 'Use our universal search to explore tokens, check Trust Scores, and review community feedback.',
    link: '#',
  },
  {
    icon: Upload,
    title: 'Submit Projects',
    description: 'Contribute to our database by submitting new or suspicious projects for community review.',
    link: '#',
  },
  {
    icon: Brain,
    title: 'AI Risk Reports',
    description: 'Understand our detailed AI-generated risk analysis and scoring system.',
    link: '#',
  },
  {
    icon: Wallet,
    title: 'Wallet Tracking',
    description: 'Connect your wallet to monitor risk exposure and receive alerts.',
    link: '#',
  },
];

export default function GettingStarted() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Getting Started with Sentinel Protocol</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Step-by-step guide for using our platform effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700 hover:border-sentinel-cyan/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-sentinel-cyan/10">
                  <guide.icon className="h-6 w-6 text-sentinel-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sentinel-white mb-2">{guide.title}</h3>
                  <p className="text-sentinel-white/60 mb-4">{guide.description}</p>
                  <a
                    href={guide.link}
                    className="text-sentinel-cyan hover:text-sentinel-teal transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}