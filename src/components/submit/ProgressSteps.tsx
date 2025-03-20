import React from 'react';
import { FormStep } from './types';

interface ProgressStepsProps {
  steps: FormStep[];
  currentStep: number;
}

export default function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0">
      <div className="bg-sentinel-dark-800/50 rounded-xl p-4 border border-sentinel-dark-700">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col items-center flex-1 ${
                index !== steps.length - 1 ? 'border-r border-sentinel-dark-700' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2 ${
                  index <= currentStep
                    ? 'bg-sentinel-cyan text-white'
                    : 'bg-sentinel-dark-700 text-sentinel-white/40'
                }`}
              >
                {index + 1}
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-sentinel-white">
                  {step.title}
                </div>
                <div className="text-xs text-sentinel-white/40 hidden sm:block">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}