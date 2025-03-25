import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-sentinel-dark-900/95 backdrop-blur-lg shadow-lg border-b border-sentinel-dark-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Shield className="h-8 w-8 text-sentinel-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-sentinel-cyan/20 blur-xl rounded-full animate-pulse group-hover:bg-sentinel-cyan/30" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sentinel-cyan via-blue-500 to-sentinel-teal bg-clip-text text-transparent">
              Sentinel Protocol
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <NavLink href="/projects" text="Explore Projects" />
            <NavLink href="/analysis" text="Analysis" />
            <NavLink href="/security" text="Security & Compliance" />
            <NavLink href="/community" text="Community Voting" />
            <NavLink href="/watchlist" text="Watchlist" />
            <NavLink href="/news" text="News" />
            <NavLink href="/api" text="API & Extension" />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/login"
              className="relative overflow-hidden text-sentinel-white/60 hover:text-sentinel-white transition-all px-4 py-2 rounded-lg hover:bg-white/5 before:absolute before:inset-0 before:border before:border-sentinel-cyan/0 hover:before:border-sentinel-cyan/50 before:rounded-lg before:transition-all"
            >
              Login
            </a>
            <a
              href="/membership"
              className="relative group bg-gradient-to-r from-sentinel-cyan via-blue-500 to-sentinel-teal hover:opacity-90 px-6 py-2.5 rounded-lg text-sentinel-white font-medium transition-all hover:shadow-lg hover:shadow-sentinel-cyan/20 hover:scale-105 before:absolute before:inset-0 before:bg-white/0 hover:before:bg-white/10 before:transition-all"
            >
              Get Started
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-sentinel-white/60 hover:text-sentinel-white relative group"
          >
            <svg className="h-6 w-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-6 px-2 border-t border-sentinel-dark-700 animate-in slide-in-from-top duration-300 backdrop-blur-lg">
            <div className="flex flex-col gap-6">
              <MobileNavLink href="/projects" text="Explore Projects" />
              <MobileNavLink href="/analysis" text="Analysis" />
             <MobileNavLink href="/security" text="Security & Compliance" />
              <MobileNavLink href="/community" text="Community Voting" />
              <MobileNavLink href="/watchlist" text="Watchlist" />
              <MobileNavLink href="/news" text="News" />
              <MobileNavLink href="/api" text="API & Extension" />
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <a
                  href="/login"
                  className="text-sentinel-white/60 hover:text-sentinel-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 text-center"
                >
                  Login
                </a>
                <a
                  href="/membership"
                  className="bg-gradient-to-r from-sentinel-cyan to-sentinel-teal hover:opacity-90 px-6 py-3 rounded-lg text-sentinel-white font-medium transition-all text-center"
                >
                  Get Started
                </a>
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
      className="relative group flex items-center gap-1"
    >
      <span className="text-sentinel-white/70 group-hover:text-sentinel-white transition-all">
        {text}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sentinel-cyan via-blue-500 to-sentinel-teal group-hover:w-full transition-all duration-300" />
    </a>
  );
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between py-3 px-4 rounded-lg bg-sentinel-dark-800/50 hover:bg-sentinel-dark-700/50 text-sentinel-white/70 hover:text-sentinel-white transition-all border border-sentinel-dark-700 hover:border-sentinel-dark-600"
    >
      <span>{text}</span>
      <ChevronDown className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" />
    </a>
  );
}