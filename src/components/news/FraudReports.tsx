import React from 'react';
import { FileText, AlertTriangle, Users } from 'lucide-react';

const reports = [
  {
    icon: FileText,
    title: 'Project MoonBase: Anatomy of a $12M Rug Pull',
    description: 'Complete breakdown of how developers orchestrated a sophisticated exit scam.',
    category: 'Investigation',
    time: '2 days ago',
  },
  {
    icon: AlertTriangle,
    title: 'Fake KYC Ring Exposed',
    description: 'Investigation reveals network of fraudulent identity verification services.',
    category: 'Exposé',
    time: '3 days ago',
  },
  {
    icon: Users,
    title: 'Whistleblower Report: DeFi Platform X',
    description: 'Anonymous insider reveals planned exit strategy and hidden backdoors.',
    category: 'Whistleblower',
    time: '5 days ago',
  },
];

export default function FraudReports() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Crypto Fraud Intelligence Reports</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            In-depth investigations and analysis of major crypto fraud cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report) => (
            <div
              key={report.title}
              className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700 hover:border-sentinel-cyan/50 transition-all"
            >
              <report.icon className="h-12 w-12 text-sentinel-cyan mb-6" />
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sentinel-cyan/10 text-sentinel-cyan">
                  {report.category}
                </span>
                <span className="text-sentinel-white/40 text-sm">{report.time}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-sentinel-white">{report.title}</h3>
              <p className="text-sentinel-white/60 mb-6">{report.description}</p>
              <button className="text-sentinel-cyan hover:text-sentinel-teal transition-colors">
                Read Full Report →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}