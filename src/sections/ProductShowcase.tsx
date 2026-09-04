import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { PhoneFrame } from '../components/ui/PhoneFrame';
import { SCREENSHOTS } from '../data/screenshotsData';
import { Download, Smartphone, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PROJECT_METADATA } from '../data/teamData';

export const ProductShowcase: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Focus on key demo journey screens for the primary phone preview
  const featuredScreens = SCREENSHOTS.slice(0, 10);
  const current = featuredScreens[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? featuredScreens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === featuredScreens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="product" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Native Android Mobile Prototype"
          title="Explore the ProTransit Android App"
          subtitle="A high-contrast, presentation-quality mobile experience built in Flutter & Dart for seamless 2-minute hackathon demonstration."
        />

        {/* Interactive Phone Showcase Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Screen Selector Tabs */}
          <div className="lg:col-span-6 space-y-3 order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display flex items-center gap-1.5">
                <Smartphone className="w-4 h-4" />
                Select Flow Screen
              </span>
              <span className="text-xs text-slate-400">
                {selectedIndex + 1} of {featuredScreens.length}
              </span>
            </div>

            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
              {featuredScreens.map((s, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-start gap-3.5 border focus:outline-none ${
                      isSelected
                        ? 'bg-[#141B4D] border-cyan-400/50 shadow-lg shadow-cyan-950/40 text-white'
                        : 'bg-[#0A0F33] border-white/5 hover:border-white/15 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md shrink-0 ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-500'
                    }`}>
                      {s.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-bold truncate font-display ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {s.title}
                        </h4>
                        {isSelected && <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-2" />}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-0.5 leading-relaxed font-sans">
                        {s.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#downloads"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] hover:from-[#283593] hover:to-[#3F51B5] border border-cyan-400/30 shadow-lg transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RELEASE APK ({PROJECT_METADATA.apkSizeMb})</span>
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-cyan-400 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Test in Web Browser</span>
              </a>
            </div>
          </div>

          {/* Right / Central Smartphone Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-cyan-500/15 rounded-full blur-3xl scale-95 pointer-events-none" />

              {/* Phone Frame */}
              <PhoneFrame
                imageSrc={current.image}
                altText={current.title}
                className="relative z-10"
              />

              {/* Navigation Arrows for Mobile */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-[#111742] hover:bg-[#1A237E] text-white border border-white/10 transition-colors shadow-md focus:outline-none"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {current.step} / {featuredScreens.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-[#111742] hover:bg-[#1A237E] text-white border border-white/10 transition-colors shadow-md focus:outline-none"
                  aria-label="Next screen"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Authenticity notice */}
            <p className="mt-3 text-[11px] text-slate-500 text-center font-sans max-w-xs">
              Direct physical screen capture from running Android release build on API 34 AVD.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
