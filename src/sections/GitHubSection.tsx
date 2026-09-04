import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Copy, Check, ExternalLink, Terminal } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';
import { PROJECT_METADATA } from '../data/teamData';

export const GitHubSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const cloneCmd = `git clone ${PROJECT_METADATA.githubUrl}.git`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const badges = [
    { label: 'Platform', value: 'Android (Flutter) + Web (React)' },
    { label: 'Language', value: 'Dart • TypeScript • CSS3' },
    { label: 'Build', value: 'Vite 8 • Tailwind v4 • Gradle' },
    { label: 'License', value: 'MIT Open Source' },
    { label: 'Edition', value: 'Smart India Hackathon 2026' }
  ];

  return (
    <section id="github" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Open Source Codebase"
          title="Open Project Repository"
          subtitle="ProTransit is developed transparently with clean, production-grade code across mobile and web platforms."
        />

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1033] border border-white/10 shadow-2xl p-6 sm:p-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">rithwikkr0 /</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  protransit-website
                </h3>
              </div>
            </div>

            <a
              href={PROJECT_METADATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#1A237E] hover:bg-[#283593] border border-cyan-400/40 shadow-md transition-all"
            >
              <span>VIEW SOURCE CODE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tech Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 my-6">
            {badges.map((b) => (
              <div key={b.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  {b.label}
                </span>
                <span className="text-xs font-semibold text-slate-200 mt-0.5 block truncate">
                  {b.value}
                </span>
              </div>
            ))}
          </div>

          {/* Clone Command Box */}
          <div className="p-4 rounded-2xl bg-[#060A22] border border-white/10 flex items-center justify-between gap-3 font-mono text-xs text-cyan-300">
            <div className="flex items-center gap-2 overflow-x-auto">
              <Terminal className="w-4 h-4 text-slate-500 shrink-0" />
              <span className="text-slate-500">$</span>
              <span className="select-all">{cloneCmd}</span>
            </div>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Project Structure Preview */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-display">
              Repository Architecture
            </span>
            <pre className="p-4 rounded-2xl bg-[#060A22] border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto custom-scrollbar">
{`protransit/
├── android-prototype/        # Flutter Android Mobile Application (Release APK built)
│   ├── lib/                  # Models, mock data, services, widgets, 14 screens
│   └── test/                 # Automated smoke tests & 14-screen flow tests
├── protransit-website/       # Official Companion Website (React + Vite + Tailwind)
│   ├── src/sections/         # Hero, Problem, Solution, Network, Demo, Downloads
│   ├── public/downloads/     # Verified APK, SIH Presentation PDF & PPTX
│   └── scripts/              # Automated document generation utilities
└── documentation/            # Architecture walkthrough, API contracts & SIH specs`}
            </pre>
          </div>

        </div>
      </div>
    </section>
  );
};
