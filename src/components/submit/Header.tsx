import React from 'react';

export default function Header() {
  return (
    <div className="bg-sentinel-dark-900/50 border-b border-sentinel-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
            Submit Your Crypto Project
          </h1>
          <p className="text-sentinel-white/60 max-w-2xl">
            Streamline your project verification with our AI-powered security analysis and transparent review process.
          </p>
        </div>
      </div>
    </div>
  );
}