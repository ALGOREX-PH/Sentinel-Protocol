import React from 'react';
import { ThumbsUp, MessageCircle } from 'lucide-react';

const featureRequests = [
  {
    title: 'AI Sentiment Analysis',
    description: 'Predict market manipulation and rug-pull likelihood through community sentiment analysis.',
    votes: 500,
    comments: 32,
    status: 'under-review',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64',
    },
  },
  {
    title: 'Multi-Sig Integration',
    description: 'Enhanced wallet security with multi-signature support and team management.',
    votes: 324,
    comments: 28,
    status: 'planned',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64',
    },
  },
];

export default function FeatureRequests() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Community Feature Requests</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Vote on and submit new feature ideas to help shape the future of Sentinel Protocol
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700 mb-8">
            <h3 className="text-xl font-semibold text-sentinel-white mb-4">Submit New Feature Request</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Feature Title"
                className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50">
                <option value="">Select Category</option>
                <option value="security">Security</option>
                <option value="analytics">Analytics</option>
                <option value="integration">Integration</option>
              </select>
              <textarea
                placeholder="Detailed Description"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
              ></textarea>
              <button className="w-full py-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
                Submit Request
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {featureRequests.map((request) => (
              <div
                key={request.title}
                className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={request.author.avatar}
                      alt={request.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-sentinel-white">{request.title}</h4>
                      <p className="text-sm text-sentinel-white/40">by {request.author.name}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    request.status === 'under-review'
                      ? 'bg-sentinel-gold/10 text-sentinel-gold'
                      : 'bg-blue-500/10 text-blue-500'
                  }`}>
                    {request.status === 'under-review' ? 'Under Review' : 'Planned'}
                  </span>
                </div>
                <p className="text-sentinel-white/60 mb-4">{request.description}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sentinel-dark-700/50 text-sentinel-white hover:bg-sentinel-dark-700 transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{request.votes}</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sentinel-dark-700/50 text-sentinel-white hover:bg-sentinel-dark-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>{request.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}