import React from 'react';
import { Search, Code, BookOpen } from 'lucide-react';

const tools = [
  {
    icon: Search,
    title: 'Automated Vulnerability Scanners',
    description: 'Comprehensive scanning tools for Solidity smart contracts',
  },
  {
    icon: Code,
    title: 'Static Analysis Tools',
    description: 'Detect unsafe patterns before deployment',
  },
  {
    icon: BookOpen,
    title: 'Interactive Guides',
    description: 'Learn about common exploits and prevention techniques',
  },
];

export default function SecurityToolkit() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Developer Security Toolkit</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Comprehensive tools and resources for building secure smart contracts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="flex items-start gap-4 p-6 bg-sentinel-dark-800/50 rounded-xl border border-sentinel-dark-700"
              >
                <tool.icon className="h-6 w-6 text-sentinel-cyan shrink-0" />
                <div>
                  <h3 className="font-medium text-sentinel-white mb-2">{tool.title}</h3>
                  <p className="text-sentinel-white/60">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=800"
                alt="Security Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sentinel-dark-900/80 via-transparent to-sentinel-cyan/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}