import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { AlertTriangle, GitFork, Banknote, Clock, ArrowDownRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Urban Road Congestion',
      subtitle: 'More delivery trips increase pressure on city roads',
      description: 'The explosive growth in on-demand commerce has deployed tens of thousands of isolated delivery two-wheelers and vans. Long-distance cross-city delivery trips amplify gridlock along peak arterial corridors.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      border: 'border-amber-400/20'
    },
    {
      icon: GitFork,
      title: 'Fragmented Delivery Networks',
      subtitle: 'Different logistics providers operate completely independently',
      description: 'Multiple courier and delivery networks run overlapping, redundant routes across identical neighborhoods with zero infrastructural coordination or shared micro-hub facilities.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/20'
    },
    {
      icon: Banknote,
      title: 'High Per-Parcel Last-Mile Cost',
      subtitle: 'Small parcel movements can become disproportionately expensive',
      description: 'Point-to-point dedicated courier trips require fuel, vehicle maintenance, and driver time for every single shipment, making same-day intra-city freight unaffordable for local MSMEs and citizens.',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
      border: 'border-rose-400/20'
    },
    {
      icon: Clock,
      title: 'Unused Transit Capacity',
      subtitle: 'Existing mobility infrastructure can potentially support freight',
      description: 'Scheduled municipal buses, electric metros, and suburban rail run continuously throughout the day with substantial off-peak capacity that could be coordinated for secure cargo movement where permitted.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10',
      border: 'border-indigo-400/20'
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 relative bg-[#070B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Challenge"
          title="Cities are moving more. Roads are carrying more."
          subtitle="Modern metropolitan logistics is straining urban road networks while massive public transit investments remain limited to passenger transport."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-7 sm:p-8 rounded-3xl bg-[#0B1033] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center ${p.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    {p.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mb-3 font-sans">
                    {p.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>Infrastructural bottleneck</span>
                  <ArrowDownRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
