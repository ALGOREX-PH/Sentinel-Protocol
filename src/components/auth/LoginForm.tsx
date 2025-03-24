import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Lock } from 'lucide-react';

export default function LoginForm() {
  return (
    <div className="bg-sentinel-dark-800/50 rounded-2xl p-8 border border-sentinel-dark-700">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield className="h-12 w-12 text-sentinel-cyan" />
            <div className="absolute inset-0 bg-sentinel-cyan/20 blur-xl rounded-full animate-pulse" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-sentinel-white mb-2">Welcome back</h1>
        <p className="text-sentinel-white/60">Please enter your details to sign in</p>
      </div>

      <div className="space-y-6">
        <button className="w-full px-4 py-3 bg-sentinel-dark-700/50 border border-sentinel-dark-700 rounded-lg text-sentinel-white hover:bg-sentinel-dark-700 transition-all flex items-center justify-center gap-2">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <button className="w-full px-4 py-3 bg-sentinel-dark-700/50 border border-sentinel-dark-700 rounded-lg text-sentinel-white hover:bg-sentinel-dark-700 transition-all flex items-center justify-center gap-2">
          <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
          Continue with Apple
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-sentinel-dark-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-sentinel-dark-800/50 text-sentinel-white/40">
              Or continue with
            </span>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-sentinel-white mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sentinel-white/40" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-sentinel-white mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sentinel-white/40" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-sentinel-dark-700 bg-sentinel-dark-700/50 text-sentinel-cyan focus:ring-sentinel-cyan/50"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-sentinel-white/60">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-sentinel-cyan hover:text-sentinel-teal transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-sentinel-white/60">
          Don't have an account?{' '}
          <Link
            to="/membership"
            className="text-sentinel-cyan hover:text-sentinel-teal transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}