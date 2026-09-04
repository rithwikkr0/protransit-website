import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { DEMO_HUBS, type TransitHub } from '../data/hubsData';
import { Bus, Train, Route, MapPin, ShieldAlert, Sparkles } from 'lucide-react';

export const NetworkSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<TransitHub>(DEMO_HUBS[0]);

  return (
    <section id="network" className="py-20 md:py-28 relative bg-[#090E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Bengaluru Multimodal Topology"
          title="Interactive Transit Hub Network"
          subtitle="Explore the proposed micro-depot and transfer node topology utilizing existing bus terminals and metro interchanges."
        />

        {/* Legend Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            <span className="text-slate-300">Bus Network (BMTC)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50" />
            <span className="text-slate-300">Metro Lines (BMRCL)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
            <span className="text-slate-300">Suburban Railway (SWR)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
            <span className="text-slate-300">Last-Mile Dispatch Zone</span>
          </div>
        </div>

        {/* Interactive Visualization Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SVG Map Canvas */}
          <div className="lg:col-span-8 rounded-3xl bg-[#060A22] border border-cyan-500/20 p-4 sm:p-6 shadow-2xl relative overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

            <svg viewBox="0 0 100 100" className="w-full h-full max-h-[440px] select-none">
              {/* Connection Edges */}
              {/* Silk Board to BTM (Bus) */}
              <line x1="30" y1="72" x2="38" y2="55" stroke="#10B981" strokeWidth="1.8" strokeDasharray="2,1" />
              {/* BTM to Majestic (Metro) */}
              <line x1="38" y1="55" x2="35" y2="32" stroke="#A855F7" strokeWidth="2.2" />
              {/* Silk Board to Koramangala (Bus) */}
              <line x1="30" y1="72" x2="50" y2="62" stroke="#10B981" strokeWidth="1.8" />
              {/* Koramangala to Indiranagar (Bus) */}
              <line x1="50" y1="62" x2="62" y2="40" stroke="#10B981" strokeWidth="1.8" />
              {/* Majestic to Indiranagar (Metro) */}
              <line x1="35" y1="32" x2="62" y2="40" stroke="#A855F7" strokeWidth="2.2" />
              {/* Indiranagar to Whitefield (Metro) */}
              <line x1="62" y1="40" x2="82" y2="45" stroke="#A855F7" strokeWidth="2.2" />
              {/* Majestic to Whitefield (Railway) */}
              <path d="M 35 32 Q 55 20 82 45" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3,1.5" />

              {/* Transit Hub Nodes */}
              {DEMO_HUBS.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <g
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    className="cursor-pointer group"
                    transform={`translate(${hub.coordinates.x}, ${hub.coordinates.y})`}
                  >
                    {/* Pulsing ring for selected */}
                    {isSelected && (
                      <circle
                        r="6"
                        fill="none"
                        stroke="#00BCD4"
                        strokeWidth="0.8"
                        className="animate-ping opacity-75 origin-center"
                      />
                    )}

                    {/* Outer node shell */}
                    <circle
                      r={isSelected ? "4.5" : "3.5"}
                      fill={isSelected ? "#00BCD4" : "#1A237E"}
                      stroke={isSelected ? "#FFFFFF" : "#00BCD4"}
                      strokeWidth="0.8"
                      className="transition-all duration-200"
                    />

                    {/* Inner core */}
                    <circle
                      r={isSelected ? "2" : "1.5"}
                      fill={isSelected ? "#070B24" : "#FFFFFF"}
                    />

                    {/* Node text label */}
                    <text
                      y={isSelected ? "-6" : "-5"}
                      textAnchor="middle"
                      fill={isSelected ? "#00BCD4" : "#CBD5E1"}
                      fontSize="2.8"
                      fontWeight={isSelected ? "bold" : "normal"}
                      className="select-none font-sans"
                    >
                      {hub.shortName}
                    </text>

                    {/* Slots indicator */}
                    <text
                      y="6.5"
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="1.9"
                      className="select-none font-mono"
                    >
                      {hub.availableSlots} free
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Quick Helper Floating Tip */}
            <div className="absolute bottom-4 left-4 text-[11px] text-slate-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Click any hub node on the graph to inspect capacity
            </div>
          </div>

          {/* Right Detail Card for Selected Hub */}
          <div className="lg:col-span-4 rounded-3xl bg-[#0C1238] border border-cyan-500/30 p-7 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-display">
                  {selectedHub.type}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {selectedHub.availableSlots} slots free
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 font-display">
                {selectedHub.name}
              </h3>
              <p className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                {selectedHub.location}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {selectedHub.description}
              </p>

              {/* Connected Transit Modes */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-display">
                  Available Intermodal Modes
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.transitTypes.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-cyan-300 flex items-center gap-1"
                    >
                      {t === 'Bus' && <Bus className="w-3 h-3 text-emerald-400" />}
                      {t === 'Metro' && <Train className="w-3 h-3 text-purple-400" />}
                      {t === 'Railway' && <Train className="w-3 h-3 text-blue-400" />}
                      {t === 'Last Mile' && <Route className="w-3 h-3 text-amber-400" />}
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capacity Progress Bar */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Locker Occupancy</span>
                  <span className="text-white font-bold font-mono">
                    {selectedHub.totalSlots - selectedHub.availableSlots} / {selectedHub.totalSlots} Slots
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                    style={{
                      width: `${((selectedHub.totalSlots - selectedHub.availableSlots) / selectedHub.totalSlots) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Subtle disclaimer */}
            <div className="pt-4 border-t border-white/10 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-tight">
                Illustrative demo network — not a representation of currently authorized parcel hubs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
