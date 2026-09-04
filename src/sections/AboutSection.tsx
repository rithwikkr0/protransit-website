import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ShieldAlert } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#090E2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Hackathon Submission"
          title="About the ProTransit Project"
          subtitle="A conceptual initiative developed for Smart India Hackathon 2026 exploring sustainable urban mobility."
        />

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#060A22] border border-cyan-500/20 p-7 sm:p-10 shadow-2xl space-y-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Initiative
              </span>
              <h4 className="text-base font-bold text-white font-display">SIH 2026</h4>
              <span className="text-xs text-slate-400">Smart India Hackathon</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Edition
              </span>
              <h4 className="text-base font-bold text-white font-display">Software</h4>
              <span className="text-xs text-slate-400">Digital Platform</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Domain
              </span>
              <h4 className="text-base font-bold text-white font-display">Logistics</h4>
              <span className="text-xs text-slate-400">Transportation Track</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Deliverable
              </span>
              <h4 className="text-base font-bold text-white font-display">Working App</h4>
              <span className="text-xs text-slate-400">Android Release Build</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            <p>
              <strong className="text-white font-semibold">ProTransit</strong> explores how existing municipal public transportation networks—including urban buses, rapid transit metros, and suburban passenger rail—can serve as the heavy-lifting intermediate backbone for small parcel deliveries.
            </p>
            <p>
              Rather than treating public transit and freight delivery as mutually exclusive urban systems, ProTransit creates the digital coordination layer that links senders, transit station micro-depots, off-peak scheduled capacity, and verified last-mile delivery riders.
            </p>
          </div>

          {/* Academic / Prototype Disclaimer Box */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-amber-500/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-400 space-y-1">
              <span className="font-bold text-amber-300 block font-display">
                Hackathon Scope & Regulatory Notice
              </span>
              <p>
                ProTransit is an academic and hackathon demonstration prototype. The project does not claim existing commercial contracts, statutory operational authority, or government partnership with BMTC, BMRCL, or Indian Railways. All routes, pricing schedules, and hubs are simulated for demonstration.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
