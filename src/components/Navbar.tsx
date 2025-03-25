import React from 'react';
import { Shield, ChevronDown, Activity, Lock, Users, Bell, Code, FileText, Wallet, Brain, Bug } from 'lucide-react';

const navItems = [
  {
    text: 'Products',
    items: [
      { href: '/projects', text: 'Explore Projects', icon: Activity },
      { href: '/analysis', text: 'Analysis', icon: Brain },
      { href: '/security', text: 'Security & Compliance', icon: Lock },
      { href: '/bugbounty', text: 'Bug Bounty', icon: Bug },
    ]
  },
  {
    text: 'Community',
    items: [
      { href: '/community', text: 'Community Voting', icon: Users },
      { href: '/watchlist', text: 'Watchlist', icon: Bell },
      { href: '/news', text: 'News', icon: FileText },
    ]
  },
  {
    text: 'Tools',
    items: [
      { href: '/api', text: 'API & Extension', icon: Code },
      { href: '/dashboard', text: 'Dashboard', icon: Activity },
      { href: '/wallet', text: 'Wallet Scanner', icon: Wallet },
    ]
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

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
            {navItems.map((item) => (
              <div key={item.text} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.text)}
                  className="flex items-center gap-2 text-sentinel-white/70 hover:text-sentinel-white transition-all"
                >
                  {item.text}
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === item.text ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === item.text && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-sentinel-dark-800 rounded-xl border border-sentinel-dark-700 shadow-lg backdrop-blur-lg py-2 animate-in fade-in slide-in-from-top-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.text}
                        href={subItem.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-sentinel-dark-700/50 text-sentinel-white/70 hover:text-sentinel-white transition-all"
                      >
                        <subItem.icon className="h-5 w-5" />
                        {subItem.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
              {navItems.map((item) => (
                <div key={item.text} className="space-y-2">
                  <div className="px-4 text-sm font-medium text-sentinel-white/40">
                    {item.text}
                  </div>
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.text}
                      href={subItem.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sentinel-dark-800/50 hover:bg-sentinel-dark-700/50 text-sentinel-white/70 hover:text-sentinel-white transition-all border border-sentinel-dark-700"
                    >
                      <subItem.icon className="h-5 w-5" />
                      {subItem.text}
                    </a>
                  ))}
                </div>
              ))}
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