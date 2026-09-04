import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { COMPARISON_OPTIONS } from '../data/comparisonData';
import { Check, Clock, Leaf, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const [filter, setFilter] = useState<'cost' | 'fastest' | 'transfers'>('cost');

  const getSortedOptions = () => {
    const list = [...COMPARISON_OPTIONS];
    if (filter === 'cost') {
      return list.sort((a, b) => a.price - b.price);
    } else if (filter === 'fastest') {
      // 1h 35m < 1h 45m < 2h 20m
      return list.sort((a, b) => {
        const getMinutes = (d: string) => {
          const parts = d.split(' ');
          const h = parseInt(parts[0]) || 0;
          const m = parseInt(parts[1]) || 0;
          return h * 60 + m;
        };
        return getMinutes(a.duration) - getMinutes(b.duration);
      });
    } else {
      return list.sort((a, b) => a.transfers - b.transfers);
    }
  };

  const sorted = getSortedOptions();

  return (
    <section id="comparison" className="py-20 md:py-28 relative bg-[#090E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Economic & Carbon Advantage"
          title="Choose the best way to deliver"
          subtitle="Compare ProTransit's public-transit coordination against conventional private courier models."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12">
          <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">Sort by:</span>
          <button
            onClick={() => setFilter('cost')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all focus:outline-none ${
              filter === 'cost'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Lowest Cost
          </button>
          <button
            onClick={() => setFilter('fastest')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all focus:outline-none ${
              filter === 'fastest'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Fastest
          </button>
          <button
            onClick={() => setFilter('transfers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all focus:outline-none ${
              filter === 'transfers'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Fewest Transfers
          </button>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {sorted.map((option) => {
            const isPro = option.id === 'protransit';

            return (
              <div
                key={option.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro
                    ? 'bg-gradient-to-b from-[#141C52] to-[#0A0F36] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 lg:-translate-y-2'
                    : 'bg-[#060A22] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Highlight Badge */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    RECOMMENDED • {option.highlightBadge}
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-white font-display">
                        {option.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {option.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price and Duration Display */}
                  <div className="mt-4 mb-6 pb-6 border-b border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-4xl font-extrabold text-white font-display">
                        ₹{option.price}
                      </span>
                      <span className="text-xs text-slate-400 ml-1">/ parcel</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{option.duration}</span>
                    </div>
                  </div>

                  {/* Transit Chain Chips */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-display">
                      Transit Route Layer
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {option.transitChain.map((step) => (
                        <span
                          key={step}
                          className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                            isPro
                              ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                              : 'bg-white/5 text-slate-400 border border-white/10'
                          }`}
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {option.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPro ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eco Impact & CTA */}
                <div>
                  {isPro ? (
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6 flex items-center gap-2.5 text-xs font-semibold text-emerald-300">
                      <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{option.co2Saved}</span>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-6 text-xs text-slate-500">
                      <span>Standard dedicated road transport footprint</span>
                    </div>
                  )}

                  <a
                    href="#demo"
                    className={`w-full py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 transition-all ${
                      isPro
                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 shadow-lg shadow-cyan-500/20'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                    }`}
                  >
                    <span>{isPro ? 'SELECT PROTRANSIT' : 'VIEW FLOW'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prototype Pricing Disclaimer */}
        <div className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto flex items-center gap-3 text-center sm:text-left justify-center">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 hidden sm:block" />
          <p className="text-xs text-slate-400 leading-normal">
            * Illustrative prototype pricing • For demonstration only. ProTransit coordinates permitted public transit capacity without replacing commercial courier regulations.
          </p>
        </div>
      </div>
    </section>
  );
};
