import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Navigation({ currentStep, totalSteps, onPrevious, onNext }: NavigationProps) {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onPrevious}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
          currentStep === 0
            ? 'opacity-50 cursor-not-allowed bg-sentinel-dark-700 text-sentinel-white/40'
            : 'bg-sentinel-dark-700 text-sentinel-white hover:bg-sentinel-dark-600'
        }`}
        disabled={currentStep === 0}
      >
        <ArrowLeft className="h-5 w-5" /> Previous
      </button>
      <button
        onClick={onNext}
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white hover:opacity-90 transition-all"
      >
        {currentStep === totalSteps - 1 ? 'Submit' : 'Next'} <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}