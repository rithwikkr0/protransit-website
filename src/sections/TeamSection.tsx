import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { TEAM_MEMBERS } from '../data/teamData';
import { Crown } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Builders"
          title="Project Team"
          subtitle="Smart India Hackathon 2026 development team collaborating on modern smart mobility solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.name}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                m.isLead
                  ? 'bg-gradient-to-b from-[#141C52] to-[#0A0F36] border-cyan-400/50 shadow-xl shadow-cyan-950/40'
                  : 'bg-[#0B1033] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold font-display text-sm ${
                    m.isLead
                      ? 'bg-gradient-to-tr from-cyan-400 to-indigo-500 text-slate-950 shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-300'
                  }`}>
                    {m.initials}
                  </div>

                  {m.isLead ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      <Crown className="w-3 h-3 text-cyan-400" />
                      Team Lead
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">
                      SIH 2026 Member
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white font-display">
                  {m.name}
                </h4>
                <p className="text-xs text-cyan-400 font-semibold mb-3 font-sans">
                  {m.role}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {m.contribution}
                </p>
              </div>

              {m.github && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
