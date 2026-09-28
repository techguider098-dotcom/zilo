import React from 'react';
import { ShieldCheck, Lock, Headphones, CheckCircle2, ArrowRight, Zap, Shield } from 'lucide-react';

interface TrustProofSectionProps {
  onOpenCheckout: () => void;
}

export const TrustProofSection: React.FC<TrustProofSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Heading */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white max-w-2xl leading-snug mb-6">
        Trusted by over <span className="text-cyan-400">25,000 YouTubers</span>, Start pro level editing from Day-1.
      </h3>

      {/* Razorpay Trust Box Card */}
      <div className="w-full max-w-lg p-6 rounded-2xl bg-[#0e101d] border border-cyan-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left my-2">
        {/* Razorpay Official Emblem and Logo */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
          <div className="flex items-center gap-2">
            {/* Razorpay stylized glyph */}
            <div className="w-8 h-8 rounded-lg bg-[#0c2340] border border-cyan-500/40 flex items-center justify-center p-1">
              <svg viewBox="0 0 40 40" className="w-full h-full text-cyan-400 fill-current">
                <path d="M 8,32 L 20,8 L 32,8 L 22,22 L 32,32 L 24,32 L 18,25 L 12,32 Z" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-tight">Razorpay</span>
              <span className="text-[10px] uppercase font-bold text-cyan-400 block -mt-1 tracking-wider">
                Trusted Business
              </span>
            </div>
          </div>
          <span className="text-[11px] text-slate-400 mt-2 block font-medium">
            India's No. 1 Payment Gateway
          </span>
        </div>

        {/* 3 Trust points */}
        <div className="space-y-2 text-xs font-semibold text-slate-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verified Business</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Secured Payments (256-Bit SSL)</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Prompt Support (24/7 Dedicated)</span>
          </div>
        </div>
      </div>

      <p className="text-[11px] font-semibold text-cyan-400/90 tracking-wide uppercase mt-2 mb-4">
        Trusted Brand by India's No. 1 Payment Gateway
      </p>

      {/* 7-DAY MONEY BACK Circular Seal */}
      <div className="my-2">
        <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          <div className="w-20 h-20 rounded-full bg-[#161208] border-2 border-amber-400 flex flex-col items-center justify-center text-center p-1">
            <span className="text-base font-black text-amber-300 leading-none">7</span>
            <span className="text-[8px] font-black text-white uppercase tracking-tight leading-none mt-0.5">
              MONEY BACK
            </span>
            <span className="text-[7px] font-bold text-amber-400 uppercase tracking-tight leading-none mt-0.5">
              GUARANTEE
            </span>
          </div>
        </div>
      </div>

      {/* Big CTA Button */}
      <div className="w-full max-w-md my-4 flex flex-col items-center">
        <button
          onClick={onOpenCheckout}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:from-[#0096c7] hover:to-[#023e8a] text-white font-black text-lg sm:text-xl tracking-wide uppercase shadow-[0_10px_35px_rgba(0,180,216,0.45)] transform active:scale-95 transition-all shimmer-effect cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Get Download Link Now</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <span className="text-xs text-slate-300 font-semibold tracking-wider mt-2 flex items-center gap-2">
          <span>Meta Verified</span>
          <span className="text-slate-500">|</span>
          <span>Razorpay Trusted</span>
        </span>
      </div>
    </section>
  );
};
