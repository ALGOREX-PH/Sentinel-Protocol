import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Ready to Secure Your Platform?</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto mb-8">
            Start protecting your users with Sentinel's powerful security tools today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" />
              View API Documentation
            </button>
            <button className="px-8 py-4 bg-sentinel-dark-800/50 text-sentinel-white rounded-lg font-medium hover:bg-sentinel-dark-700/50 transition-all flex items-center justify-center gap-2">
              <Download className="h-5 w-5" />
              Download Extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}