import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  TrendingDown, 
  Building, 
  TrafficCone, 
  FileSearch, 
  Users, 
  Store, 
  Bike, 
  Landmark 
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      icon: TrendingDown,
      title: 'Potentially Lower Delivery Cost',
      desc: 'Piggybacking parcel trunk movement on scheduled public transit capacity reduces dedicated fuel and vehicle depreciation expenses.'
    },
    {
      icon: Building,
      title: 'Better Use of Existing Infrastructure',
      desc: 'Capitalizes on billions of dollars invested in city bus fleets and metro networks during off-peak windows without requiring new road corridors.'
    },
    {
      icon: TrafficCone,
      title: 'Reduced Road Trip Dependence',
      desc: 'Replaces dedicated cross-city delivery motorbike trips with localized short-radius dispatch, lowering cumulative vehicular kilometers traveled.'
    },
    {
      icon: FileSearch,
      title: 'Improved Shipment Traceability',
      desc: 'Multi-party digital handovers and QR/OTP verification reduce missing parcel rates and provide accountability across public and private legs.'
    }
  ];

  const stakeholders = [
    {
      icon: Users,
      role: 'For Citizens',
      benefit: 'Affordable, eco-conscious delivery choices with transparent transit schedules and secure neighborhood station drop-offs.'
    },
    {
      icon: Store,
      role: 'For Small Businesses',
      benefit: 'Accessible intra-city freight rates that make same-day local commerce competitive against massive centralized retail platforms.'
    },
    {
      icon: Bike,
      role: 'For Delivery Partners',
      benefit: 'Shorter, safer localized delivery radii centered around transit hubs instead of exhausting, dangerous cross-city transit commutes.'
    },
    {
      icon: Landmark,
      role: 'For Cities & Transit Operators',
      benefit: 'New non-fare revenue streams for municipal transit authorities while tangibly easing peak-hour road congestion.'
    }
  ];

  return (
    <section id="impact" className="py-20 md:py-28 relative bg-[#090E2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Societal & Urban Benefits"
          title="Transforming the Urban Mobility Landscape"
          subtitle="How coordinating public transit with urban logistics yields multi-stakeholder value across Indian smart cities."
        />

        {/* 4 Core Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.title}
                className="p-6 rounded-3xl bg-[#060A22] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 font-display">
                    {i.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {i.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stakeholder Breakdown Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0C1238] border border-white/10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-display">
              Stakeholder Ecosystem
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 font-display">
              Value Creation Across the City
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholders.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.role} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1.5 font-display">
                    {s.role}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {s.benefit}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
