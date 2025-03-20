import React from 'react';
import { FormStep } from './submit/types';
import Header from './submit/Header';
import ProgressSteps from './submit/ProgressSteps';
import Navigation from './submit/Navigation';
import BasicInfo from './submit/steps/BasicInfo';
import TechnicalInfo from './submit/steps/TechnicalInfo';
import TeamSocial from './submit/steps/TeamSocial';
import Verification from './submit/steps/Verification';
import AIFeatures from './submit/AIFeatures';

const steps: FormStep[] = [
  {
    title: 'Basic Info',
    description: 'Project details and identification',
  },
  {
    title: 'Technical',
    description: 'Smart contract and documentation',
  },
  {
    title: 'Team & Social',
    description: 'Team information and social presence',
  },
  {
    title: 'Verification',
    description: 'Final review and submission',
  },
];

export default function SubmitProject() {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Header />
      <ProgressSteps steps={steps} currentStep={currentStep} />

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-sentinel-dark-800/50 rounded-xl p-6 sm:p-8 border border-sentinel-dark-700">
          {currentStep === 0 && <BasicInfo />}
          {currentStep === 1 && <TechnicalInfo />}
          {currentStep === 2 && <TeamSocial />}
          {currentStep === 3 && <Verification />}

          <Navigation
            currentStep={currentStep}
            totalSteps={steps.length}
            onPrevious={() => setCurrentStep(Math.max(0, currentStep - 1))}
            onNext={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          />
        </div>

        <AIFeatures />
      </div>
    </div>
  );
}