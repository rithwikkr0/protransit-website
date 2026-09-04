import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ROADMAP_PHASES } from '../data/roadmapData';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Implementation Roadmap"
          title="From SIH Prototype to City-Wide Scale"
          subtitle="A phased execution timeline transitioning from concept validation to municipal corridor pilots and predictive intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ROADMAP_PHASES.map((p) => {
            const isComplete = p.status === 'completed';
            const isInProgress = p.status === 'in_progress';

            return (
              <div
                key={p.phase}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all ${
                  isComplete
                    ? 'bg-[#0B123D] border-emerald-500/40 shadow-xl shadow-emerald-950/20'
                    : isInProgress
                    ? 'bg-[#0E1544] border-cyan-500/40 shadow-xl shadow-cyan-950/20'
                    : 'bg-[#080C28] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {p.phase}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isComplete
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : isInProgress
                          ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 font-display">
                    {p.title}
                  </h4>
                  <span className="text-xs text-slate-400 font-medium block mb-4">
                    {p.timeline}
                  </span>

                  <ul className="space-y-2.5 mb-6">
                    {p.milestones.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-xs text-slate-300 font-sans leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          isComplete ? 'bg-emerald-400' : isInProgress ? 'bg-cyan-400' : 'bg-slate-600'
                        }`} />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] text-slate-500 font-medium">
                  {isComplete ? 'Verified & Delivered' : 'Proposed Phase'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
