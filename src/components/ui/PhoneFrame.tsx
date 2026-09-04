import React from 'react';

interface PhoneFrameProps {
  imageSrc: string;
  altText: string;
  className?: string;
  priority?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  imageSrc,
  altText,
  className = ''
}) => {
  return (
    <div className={`relative mx-auto max-w-[280px] sm:max-w-[300px] md:max-w-[320px] ${className}`}>
      {/* Outer Phone Shell */}
      <div className="relative rounded-[42px] p-[10px] bg-gradient-to-b from-slate-700 via-slate-900 to-black shadow-2xl shadow-cyan-950/40 border border-slate-700/60 ring-1 ring-white/10">
        
        {/* Hardware side buttons */}
        <div className="absolute -left-[12px] top-[110px] w-[3px] h-[26px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[12px] top-[148px] w-[3px] h-[44px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[12px] top-[130px] w-[3px] h-[48px] bg-slate-700 rounded-r-sm" />

        {/* Screen Bezel */}
        <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/18.5] flex items-center justify-center border border-slate-900">
          
          {/* Top Notch / Camera Punch-hole */}
          <div className="absolute top-2 z-20 w-24 h-4 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>

          {/* Screenshot Image */}
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover select-none transition-transform duration-300"
            loading="lazy"
          />

          {/* Glare / subtle glass reflection */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-20 pointer-events-none">
            <div className="w-28 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
