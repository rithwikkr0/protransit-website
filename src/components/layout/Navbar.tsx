import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Route, Sparkles } from 'lucide-react';
import { PROJECT_METADATA } from '../../data/teamData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Product', href: '#product' },
    { name: 'Network', href: '#network' },
    { name: 'Technology', href: '#technology' },
    { name: 'Impact', href: '#impact' },
    { name: 'Demo', href: '#demo' },
    { name: 'Downloads', href: '#downloads' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B24]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/40 shadow-md shadow-cyan-500/20 group-hover:border-cyan-400 group-hover:scale-105 transition-all shrink-0 bg-[#070B24]">
              <img src="/app-icon.png" alt="ProTransit App Icon" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-white tracking-tight font-display">
                  ProTransit
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                  SIH 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block font-sans">
                Connecting Cities. Moving Goods Smarter.
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Try Demo
            </a>
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] hover:from-[#283593] hover:to-[#3F51B5] border border-cyan-400/30 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Download className="w-3.5 h-3.5" />
              Download App
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#downloads"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-[#1A237E] border border-cyan-400/30 rounded-lg"
            >
              <Download className="w-3.5 h-3.5" />
              APK
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070B24]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-xl"
              >
                <Sparkles className="w-4 h-4" />
                Try Interactive Demo
              </a>
              <a
                href="#downloads"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] rounded-xl shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download Android Prototype ({PROJECT_METADATA.apkSizeMb})
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
