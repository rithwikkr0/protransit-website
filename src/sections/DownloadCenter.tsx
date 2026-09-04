import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Download, Smartphone, FileText, BookOpen, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';
import { PROJECT_METADATA } from '../data/teamData';

export const DownloadCenter: React.FC = () => {
  const downloads = [
    {
      icon: Smartphone,
      badge: 'Release APK',
      title: 'ProTransit Android Prototype',
      desc: 'Complete native Android application package tested on API 34. Features the full 14-screen interactive SIH demo flow with QR verification and OTP handover.',
      meta: `${PROJECT_METADATA.apkSizeMb} • Android 8.0+ • Release Build`,
      primaryBtn: {
        text: 'DOWNLOAD APK',
        href: `/downloads/${PROJECT_METADATA.releaseApkName}`,
        download: true
      },
      secondaryBtn: {
        text: 'GitHub Release Mirror',
        href: `${PROJECT_METADATA.githubUrl}/releases`,
        external: true
      },
      border: 'border-cyan-500/30',
      bg: 'bg-gradient-to-b from-[#10174A] to-[#0A0F33]'
    },
    {
      icon: FileText,
      badge: 'Presentation Deck',
      title: 'SIH 2026 Idea Presentation',
      desc: 'Official slide deck detailing the problem statement, multimodal transit architecture, graph routing formulation, economic modeling, and implementation roadmap.',
      meta: '12 Slides • Available in PDF & PPTX formats',
      primaryBtn: {
        text: 'DOWNLOAD PDF',
        href: '/downloads/ProTransit_SIH2026_Idea_Presentation.pdf',
        download: true
      },
      secondaryBtn: {
        text: 'DOWNLOAD PPTX',
        href: '/downloads/ProTransit_SIH2026_Idea_Presentation.pptx',
        download: true
      },
      border: 'border-purple-500/30',
      bg: 'bg-[#0B1033]'
    },
    {
      icon: GithubIcon,
      badge: 'Source Code',
      title: 'ProTransit GitHub Repository',
      desc: 'Explore the full open-source codebase including Flutter Android application source, state management providers, mock routing services, and the companion web platform.',
      meta: 'Open Source • MIT License • React + Vite + Flutter',
      primaryBtn: {
        text: 'VIEW ON GITHUB',
        href: PROJECT_METADATA.githubUrl,
        external: true
      },
      secondaryBtn: {
        text: 'Clone Repository',
        href: `${PROJECT_METADATA.githubUrl}.git`,
        copy: true
      },
      border: 'border-emerald-500/30',
      bg: 'bg-[#0B1033]'
    },
    {
      icon: BookOpen,
      badge: 'Architecture Walkthrough',
      title: 'Technical Implementation Notes',
      desc: 'Comprehensive engineering walkthrough, system directory layout, data models, static analysis results, on-device test logs, and layout verification screenshots.',
      meta: 'Markdown Documentation • Verified on Android AVD',
      primaryBtn: {
        text: 'VIEW DOCUMENTATION',
        href: '/downloads/walkthrough.md',
        download: true
      },
      secondaryBtn: {
        text: 'View Online Doc',
        href: `${PROJECT_METADATA.githubUrl}/blob/main/walkthrough.md`,
        external: true
      },
      border: 'border-white/10',
      bg: 'bg-[#0B1033]'
    }
  ];

  return (
    <section id="downloads" className="py-20 md:py-28 relative bg-[#090E2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Project Deliverables"
          title="Project Downloads & Artifacts"
          subtitle="Direct access to verified application binaries, slide decks, technical documentation, and open-source code repositories."
        />

        {/* 4 Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {downloads.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className={`p-7 sm:p-8 rounded-3xl ${d.bg} border ${d.border} shadow-2xl flex flex-col justify-between transition-all hover:border-cyan-400/40`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-cyan-300 border border-white/10">
                      {d.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 font-sans">
                    {d.desc}
                  </p>

                  <div className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{d.meta}</span>
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={d.primaryBtn.href}
                    download={d.primaryBtn.download ? '' : undefined}
                    target={d.primaryBtn.external ? '_blank' : undefined}
                    rel={d.primaryBtn.external ? 'noopener noreferrer' : undefined}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#1A237E] hover:bg-[#283593] border border-cyan-400/40 shadow-md transition-all text-center"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{d.primaryBtn.text}</span>
                    {d.primaryBtn.external && <ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
                  </a>

                  {d.secondaryBtn && (
                    <a
                      href={d.secondaryBtn.href}
                      download={d.secondaryBtn.download ? '' : undefined}
                      target={d.secondaryBtn.external ? '_blank' : undefined}
                      rel={d.secondaryBtn.external ? 'noopener noreferrer' : undefined}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
                    >
                      <span>{d.secondaryBtn.text}</span>
                      {d.secondaryBtn.external && <ExternalLink className="w-3 h-3 text-slate-500" />}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Guarantee */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 max-w-2xl mx-auto flex items-center justify-center gap-3 text-center">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs text-emerald-300 font-medium">
            All files are built, verified, and hosted statically. No dead buttons or external redirection loops.
          </p>
        </div>

      </div>
    </section>
  );
};
