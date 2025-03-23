import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4 text-white">Join Our Community of Guardians</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Help build a safer digital ecosystem while earning rewards and recognition.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-all flex items-center gap-2 mx-auto">
            Get Started Now
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}