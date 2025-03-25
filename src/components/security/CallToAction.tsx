import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-blue-500 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Verify Your Project?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Join the growing number of projects committed to transparency and security in the crypto space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-500 rounded-lg font-medium hover:bg-white/90 transition-colors">
            Start Verification
          </button>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}