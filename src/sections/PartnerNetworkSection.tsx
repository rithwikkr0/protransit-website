import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ShieldCheck, AlertCircle, Info, ExternalLink, Bus, Bike, Truck, Box } from 'lucide-react';

interface PartnerInfo {
  name: string;
  category: string;
  status: 'LIVE' | 'PARTNER API' | 'ESTIMATE' | 'UNAVAILABLE' | 'DEMO DATA' | 'SCHEDULED';
  badgeColor: string;
  icon: React.ElementType;
  description: string;
  disclaimer: string;
}

export const PartnerNetworkSection: React.FC = () => {
  const partners: PartnerInfo[] = [
    {
      name: 'ProTransit Multimodal Engine',
      category: 'Public Transit Coordination Layer',
      status: 'LIVE',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: Box,
      description: 'Proprietary time-dependent route optimization connecting bus networks, metro lines, and local locker micro-depots.',
      disclaimer: 'Direct calculation via ProTransit routing algorithms.'
    },
    {
      name: 'BMTC & BMRCL Networks',
      category: 'Municipal Transit Backbone (Bengaluru)',
      status: 'SCHEDULED',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: Bus,
      description: 'Scheduled public transit timetable and corridor integration utilizing existing permitted bus and metro carriage capacity.',
      disclaimer: 'Open GTFS schedule integration. No commercial freight concession claimed.'
    },
    {
      name: 'Porter Direct',
      category: 'Point-to-Point Bike Courier',
      status: 'ESTIMATE',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: Bike,
      description: 'Direct on-demand point-to-point two-wheeler courier comparison for sender rate benchmarking.',
      disclaimer: 'Estimated benchmark rate via integration adapter. Not an official partner.'
    },
    {
      name: 'Uber Parcel',
      category: 'On-Demand Ride-Hail Transfer',
      status: 'ESTIMATE',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: Bike,
      description: 'Standard market rate comparison for dedicated direct two-wheeler parcel movements across Bengaluru.',
      disclaimer: 'Public aggregator benchmark. No direct corporate affiliation.'
    },
    {
      name: 'Delhivery Local',
      category: 'Surface Courier & Logistics Network',
      status: 'ESTIMATE',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: Truck,
      description: 'Commercial surface parcel delivery pricing through regional hub-and-spoke sorting centers.',
      disclaimer: 'External estimate benchmark. Not an endorsed partnership.'
    },
    {
      name: 'Designated Local Delivery Partners',
      category: 'Hyperlocal Last-Mile Fleet',
      status: 'DEMO DATA',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: Bike,
      description: 'Simulated independent delivery partner dispatch (EV two-wheeler / cycle couriers) for final-mile handover.',
      disclaimer: 'Simulated demo data for hackathon prototype testing.'
    },
    {
      name: 'Rapid Cargo Freight',
      category: 'Heavy Freight & Mini-Truck Logistics',
      status: 'UNAVAILABLE',
      badgeColor: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
      icon: Truck,
      description: 'Heavy cargo and mini-truck freight transfers exceeding public transit baggage dimensions and corridor limits.',
      disclaimer: 'Out of zone / not supported under permitted urban transit rules.'
    }
  ];

  return (
    <section id="partner-network" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Carrier & Ecosystem Transparency"
          title="Partner Network & Integration Ecosystem"
          subtitle="Honest and transparent carrier comparison: distinguishing direct calculations, scheduled transit corridors, and benchmark estimates."
        />

        {/* Data Honesty Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed font-sans">
            <span className="font-bold text-amber-300 font-display">Data Honesty Commitment: </span>
            ProTransit is a hackathon prototype. We clearly label all benchmark options (<span className="text-cyan-300 font-mono font-bold">ESTIMATE</span>, <span className="text-amber-300 font-mono font-bold">DEMO DATA</span>, <span className="text-slate-400 font-mono font-bold">UNAVAILABLE</span>). ProTransit does not falsely claim official corporate partnerships with external courier brands or commercial transit concessions.
          </div>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="p-6 rounded-3xl bg-[#0B1033] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${p.badgeColor}`}>
                      {p.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display">
                    {p.name}
                  </h4>
                  <span className="text-xs text-cyan-400/80 font-mono block mb-2">
                    {p.category}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[11px] text-slate-500 font-sans italic">
                    Note: {p.disclaimer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
