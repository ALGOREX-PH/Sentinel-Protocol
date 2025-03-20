import React from 'react';
import { FileText, Globe, GitBranch, Users, Shield, AlertTriangle, Brain, ArrowLeft, ArrowRight } from 'lucide-react';

interface FormStep {
  title: string;
  description: string;
}

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
      {/* Header */}
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

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-sentinel-dark-800/50 rounded-xl p-4 border border-sentinel-dark-700">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col items-center flex-1 ${
                  index !== steps.length - 1
                    ? 'border-r border-sentinel-dark-700'
                    : ''
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

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-sentinel-dark-800/50 rounded-xl p-6 sm:p-8 border border-sentinel-dark-700">
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-sentinel-white mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sentinel-white mb-2">
                  Website URL
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
                    <Globe className="h-5 w-5" />
                  </span>
                  <input
                    type="url"
                    className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
                    placeholder="https://"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-sentinel-white mb-2">
                  Blockchain Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all">
                  <option value="">Select blockchain</option>
                  <option value="ethereum">Ethereum</option>
                  <option value="bsc">BSC</option>
                  <option value="solana">Solana</option>
                  <option value="polygon">Polygon</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
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
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white hover:opacity-90 transition-all"
            >
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'} <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* AI Analysis Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Feature
            icon={Brain}
            title="AI-Powered Analysis"
            description="Automated risk assessment and fraud detection for comprehensive project evaluation."
          />
          <Feature
            icon={Shield}
            title="Security First"
            description="Thorough smart contract analysis and vulnerability detection systems."
          />
          <Feature
            icon={Users}
            title="Community Validation"
            description="Transparent review process with community-driven evaluation system."
          />
        </div>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-sentinel-dark-800/50 border border-sentinel-dark-700">
      <Icon className="h-8 w-8 text-sentinel-cyan mb-4" />
      <h3 className="text-lg font-semibold text-sentinel-white mb-2">{title}</h3>
      <p className="text-sm text-sentinel-white/60">{description}</p>
    </div>
  );
}