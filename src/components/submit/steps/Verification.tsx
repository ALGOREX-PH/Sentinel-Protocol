import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export default function Verification() {
  return (
    <div className="space-y-8">
      <div className="p-6 rounded-xl bg-sentinel-dark-700/30 border border-sentinel-dark-700">
        <h3 className="text-lg font-medium text-sentinel-white mb-4">Project Verification Summary</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sentinel-white">Basic Information</h4>
              <p className="text-sm text-sentinel-white/60">Project details and identification complete</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sentinel-white">Technical Documentation</h4>
              <p className="text-sm text-sentinel-white/60">Smart contract and documentation verified</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sentinel-white">Team & Social Presence</h4>
              <p className="text-sm text-sentinel-white/60">Team information and social links provided</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-sentinel-secondary/10 border border-sentinel-secondary/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-sentinel-secondary shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-medium text-sentinel-white mb-2">Important Notice</h3>
            <p className="text-sm text-sentinel-white/60 mb-4">
              By submitting your project, you acknowledge and agree to:
            </p>
            <ul className="space-y-2 text-sm text-sentinel-white/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sentinel-secondary" />
                A public and transparent review process
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sentinel-secondary" />
                AI and community-driven evaluations determining risk levels
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sentinel-secondary" />
                Public listing of flagged scam projects for investor protection
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          className="mt-1.5 h-4 w-4 rounded border-sentinel-dark-700 bg-sentinel-dark-700/50 text-sentinel-cyan focus:ring-sentinel-cyan/50"
        />
        <label htmlFor="terms" className="text-sm text-sentinel-white/60">
          I confirm that all provided information is accurate and I accept the{' '}
          <a href="#" className="text-sentinel-cyan hover:text-sentinel-teal">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-sentinel-cyan hover:text-sentinel-teal">
            Privacy Policy
          </a>
        </label>
      </div>
    </div>
  );
}