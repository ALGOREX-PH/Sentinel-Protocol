import React from 'react';
import { Brain, ShieldCheck, Activity, AlertTriangle } from 'lucide-react';

export default function AISection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Brain className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">AI-Powered Scam Detection</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced machine learning algorithms working 24/7 to protect investors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-gray-800/50">
              <ShieldCheck className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Contract Analysis</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Vulnerability scanning</li>
                <li>• Rug-pull detection</li>
                <li>• Code similarity checks</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50">
              <Activity className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">On-Chain Analytics</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Wallet tracking</li>
                <li>• Transaction monitoring</li>
                <li>• Fund flow analysis</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50">
              <AlertTriangle className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Risk Assessment</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Social sentiment analysis</li>
                <li>• Developer behavior tracking</li>
                <li>• Community feedback analysis</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50">
              <Brain className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Pattern recognition</li>
                <li>• Risk prediction</li>
                <li>• Trend analysis</li>
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Real-Time Protection</h3>
            <p className="text-gray-400 mb-6">
              Our AI systems continuously monitor the crypto ecosystem, providing instant alerts and updates about potential threats.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium w-full">
              Try AI Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}