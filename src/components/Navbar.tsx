import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-sentinel-dark-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Shield className="h-7 w-7 text-sentinel-cyan transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-sentinel-cyan/20 blur-xl rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
              Sentinel Protocol
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <NavLink href="/projects" text="Explore Projects" />
            <NavLink href="/analysis" text="Analysis" />
            <NavLink href="/community" text="Community Voting" />
            <NavLink href="/watchlist" text="Watchlist" />
            <NavLink href="#" text="Statistics" />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sentinel-white/60 hover:text-sentinel-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
              Login
            </button>
            <button className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal hover:opacity-90 px-6 py-2.5 rounded-lg text-sentinel-white font-medium transition-all hover:shadow-lg hover:shadow-sentinel-cyan/20 hover:scale-105">
              Get Started
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-sentinel-white/60 hover:text-sentinel-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-6 px-2 border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-6">
              <MobileNavLink href="/projects" text="Explore Projects" />
              <MobileNavLink href="/analysis" text="Analysis" />
              <MobileNavLink href="/community" text="Community Voting" />
              <MobileNavLink href="/watchlist" text="Watchlist" />
              <MobileNavLink href="#" text="Statistics" />
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <button className="text-sentinel-white/60 hover:text-sentinel-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5">
                  Login
                </button>
                <button className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal hover:opacity-90 px-6 py-3 rounded-lg text-sentinel-white font-medium transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="relative group"
    >
      <span className="text-sentinel-white/70 group-hover:text-sentinel-white transition-colors">
        {text}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sentinel-cyan group-hover:w-full transition-all duration-300" />
    </a>
  );
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-white/5 text-sentinel-white/70 hover:text-sentinel-white transition-all"
    >
      <span>{text}</span>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </a>
  );
}