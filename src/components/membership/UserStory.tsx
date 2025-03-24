import React from 'react';

export default function UserStory() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-sentinel-white mb-8">Sophia's Story</h2>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
              alt="Sophia"
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <p className="text-lg text-sentinel-white/80 italic mb-6">
              "After losing funds in a rug pull, Sentinel Protocol helped me monitor new tokens and receive real-time alerts about suspicious activities. It saved my portfolio—and my peace of mind."
            </p>
            <div className="text-sentinel-white/60">Crypto Investor</div>
          </div>
        </div>
      </div>
    </div>
  );
}