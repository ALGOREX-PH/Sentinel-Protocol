import React from 'react';
import { Mail, Lock, BrainCog as BrandGoogle, DiscIcon as BrandDiscord, Twitter as BrandTwitter, Wallet } from 'lucide-react';

export default function SignupForm() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Sign Up in 60 Seconds</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Choose your preferred method to join our security-first ecosystem
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700">
            <h3 className="text-lg font-medium text-sentinel-white mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5 text-sentinel-cyan" />
              Email & Password
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
              />
              <input
                type="password"
                placeholder="Create password"
                className="w-full px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
              />
              <button className="w-full py-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90">
                Create Account
              </button>
            </form>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-sentinel-dark-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-sentinel-dark-900 text-sentinel-white/40">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button className="w-full px-4 py-3 bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-lg text-sentinel-white hover:bg-sentinel-dark-700/50 transition-all flex items-center justify-center gap-2">
              <BrandGoogle className="h-5 w-5" />
              Google
            </button>
            <button className="w-full px-4 py-3 bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-lg text-sentinel-white hover:bg-sentinel-dark-700/50 transition-all flex items-center justify-center gap-2">
              <BrandDiscord className="h-5 w-5" />
              Discord
            </button>
            <button className="w-full px-4 py-3 bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-lg text-sentinel-white hover:bg-sentinel-dark-700/50 transition-all flex items-center justify-center gap-2">
              <BrandTwitter className="h-5 w-5" />
              Twitter
            </button>
            <button className="w-full px-4 py-3 bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-lg text-sentinel-white hover:bg-sentinel-dark-700/50 transition-all flex items-center justify-center gap-2">
              <Wallet className="h-5 w-5" />
              Web3 Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}