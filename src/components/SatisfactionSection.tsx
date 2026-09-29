import React from 'react';
import { Award, Star, CheckCircle2 } from 'lucide-react';

export const SatisfactionSection: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Golden Laurel Wreath Badge */}
      <div className="relative mb-3 flex items-center justify-center">
        {/* Decorative Golden Laurel Wreath SVG */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full text-amber-400 fill-current drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
            {/* Laurel Wreath Left */}
            <path d="M 60,160 C 25,120 25,70 65,30 C 60,45 55,65 60,85 C 50,70 45,95 55,115 C 45,105 48,130 65,145 Z" fill="#fbbf24" opacity="0.9" />
            {/* Laurel Wreath Right */}
            <path d="M 140,160 C 175,120 175,70 135,30 C 140,45 145,65 140,85 C 150,70 155,95 145,115 C 155,105 152,130 135,145 Z" fill="#fbbf24" opacity="0.9" />
            {/* Stars */}
            <circle cx="100" cy="40" r="4" fill="#fef08a" />
            <circle cx="85" cy="45" r="3" fill="#fef08a" />
            <circle cx="115" cy="45" r="3" fill="#fef08a" />
          </svg>

          {/* Central Seal Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase leading-none">
              BEST
            </span>
            <span className="text-sm font-black tracking-wider text-amber-400 uppercase leading-none mt-1">
              CHOICE
            </span>
            <div className="flex items-center gap-0.5 mt-1 text-amber-300">
              <Star className="w-2.5 h-2.5 fill-amber-300" />
              <Star className="w-2.5 h-2.5 fill-amber-300" />
              <Star className="w-2.5 h-2.5 fill-amber-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-300 max-w-xl tracking-tight leading-tight">
        100% Satisfaction &amp; <br className="hidden sm:inline" />
        <span className="text-white">Verified E-Com Blueprints.</span>
      </h3>

      <p className="text-xs sm:text-sm text-slate-300 max-w-lg mt-2">
        Curated specifically for Indian dropshippers &amp; e-commerce entrepreneurs seeking direct factory pricing, zero MOQ barriers, high-ROAS video ad templates, and immediate Google Drive access.
      </p>
    </section>
  );
};
