import React from 'react';
import { Route, FileText, Download, ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { PROJECT_METADATA } from '../../data/teamData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05081A] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1A237E] border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-md">
                <Route className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white font-display">ProTransit</span>
            </div>
            <p className="text-sm text-cyan-400 font-medium">
              Connecting Cities. Moving Goods Smarter.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An urban logistics coordination platform utilizing existing, permitted public transit capacity (bus, metro, rail) and designated transit hubs for sustainable parcel movement.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Smart India Hackathon 2026 Prototype
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
              <li><a href="#product" className="hover:text-cyan-400 transition-colors">Product Showcase</a></li>
              <li><a href="#network" className="hover:text-cyan-400 transition-colors">Hub Network</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">Technology</a></li>
              <li><a href="#demo" className="hover:text-cyan-400 transition-colors">Interactive Demo</a></li>
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors">Impact & Benefits</a></li>
            </ul>
          </div>

          {/* Project Downloads */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-display">
              Deliverables
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#downloads" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  Android APK ({PROJECT_METADATA.apkSizeMb})
                </a>
              </li>
              <li>
                <a href="/downloads/ProTransit_SIH2026_Idea_Presentation.pdf" download className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-rose-400" />
                  Presentation (PDF)
                </a>
              </li>
              <li>
                <a href="/downloads/ProTransit_SIH2026_Idea_Presentation.pptx" download className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-orange-400" />
                  Presentation (PPTX)
                </a>
              </li>
              <li>
                <a href="/downloads/walkthrough.md" download className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  Walkthrough Document
                </a>
              </li>
            </ul>
          </div>

          {/* Repository & Open Source */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-display">
              Open Source
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={PROJECT_METADATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  GitHub Repository
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About SIH 2026</a></li>
              <li><a href="#team" className="hover:text-cyan-400 transition-colors">Project Team</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Prototype Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} ProTransit. Smart India Hackathon 2026 Project.</p>
            <p className="text-slate-400">
              * Prototype demonstration platform. All rates, routes, and operational partner integrations are simulated for presentation purposes.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
