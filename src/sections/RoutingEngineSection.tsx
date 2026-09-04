import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Binary, Cpu, ShieldCheck } from 'lucide-react';

export const RoutingEngineSection: React.FC = () => {
  return (
    <section id="routing" className="py-20 md:py-28 relative bg-[#090E2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Algorithmic Foundations"
          title="Deterministic Graph Routing Engine"
          subtitle="Mathematical formulation for multimodal urban transit coordination using time-dependent network algorithms."
        />

        {/* Graph Formulation Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Mathematical Model */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#060A22] border border-cyan-500/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                <Binary className="w-3.5 h-3.5" />
                Graph Model: G = (V, E)
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                Network Formulation
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="font-bold text-white font-mono block mb-1">
                    Vertices V (Transit Hubs):
                  </span>
                  Physical bus terminals, metro stations, and suburban railway junctions where parcels can be stored in secure lockers or transferred between transit modes.
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="font-bold text-white font-mono block mb-1">
                    Directed Edges E (Scheduled Transit Links):
                  </span>
                  Permitted transit corridors connecting hubs with discrete departure timetables, travel durations, and baggage capacity thresholds.
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="font-bold text-white font-mono block mb-1">
                    Multi-Objective Edge Weights W(e):
                  </span>
                  <div className="font-mono text-xs text-cyan-300 bg-black/40 p-2.5 rounded-lg mt-1 border border-cyan-500/20">
                    W(e) = α · Cost + β · TravelTime + γ · HandoverWait + δ · CarbonCost
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Deterministic routing ensures guaranteed execution without algorithmic hallucinations.</span>
            </div>
          </div>

          {/* Algorithms & Decision Rules */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#0C1238] border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
                <Cpu className="w-3.5 h-3.5" />
                Algorithmic Strategy
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                Algorithms & Constraints
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#070B24] border border-white/5">
                  <h5 className="font-bold text-white text-sm font-display mb-1">
                    Time-Dependent A*
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Calculates fastest inter-hub arrival times based on scheduled timetable departures.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#070B24] border border-white/5">
                  <h5 className="font-bold text-white text-sm font-display mb-1">
                    Pareto Cost Frontier
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Filters solutions that simultaneously minimize financial expense and transfers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#070B24] border border-white/5">
                  <h5 className="font-bold text-white text-sm font-display mb-1">
                    Locker Capacity Pruning
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Dynamically excludes transfer hubs when real-time storage utilization reaches 100%.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#070B24] border border-white/5">
                  <h5 className="font-bold text-white text-sm font-display mb-1">
                    Parcel Restrictions
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Enforces volume (Small/Med/Large) and weight limits permitted on municipal transit.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200">
                <span className="font-bold block mb-1">Future Predictive Intelligence (Phase 4):</span>
                Machine learning models are reserved for transit luggage demand forecasting and seasonal capacity allocation, keeping core routing fully deterministic.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span>Time Complexity: O(E + V log V)</span>
              <span className="font-mono text-cyan-400">Deterministic Engine</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
