import React from 'react';
import { GitBranch, FileText, Upload } from 'lucide-react';

export default function TechnicalInfo() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-sentinel-white mb-2">
          Smart Contract Address
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
            <GitBranch className="h-5 w-5" />
          </span>
          <input
            type="text"
            className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            placeholder="0x..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sentinel-white mb-2">
          GitHub Repository
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
            <GitBranch className="h-5 w-5" />
          </span>
          <input
            type="url"
            className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            placeholder="https://github.com/..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sentinel-white mb-2">
          Whitepaper
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-sentinel-dark-700 border-dashed rounded-lg cursor-pointer bg-sentinel-dark-700/30 hover:bg-sentinel-dark-700/50 transition-all">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-3 text-sentinel-cyan" />
              <p className="mb-2 text-sm text-sentinel-white">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-sentinel-white/40">PDF or DOC (MAX. 10MB)</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sentinel-white mb-2">
          Roadmap
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-sentinel-dark-700 border-dashed rounded-lg cursor-pointer bg-sentinel-dark-700/30 hover:bg-sentinel-dark-700/50 transition-all">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-3 text-sentinel-cyan" />
              <p className="mb-2 text-sm text-sentinel-white">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-sentinel-white/40">PDF or Image (MAX. 10MB)</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" />
          </label>
        </div>
      </div>
    </div>
  );
}