import React from 'react';
import { 
  Infinity as InfinityIcon, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  Apple, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Award,
  Crown
} from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative pt-6 pb-12 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Background ambient lighting glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-72 bg-gradient-to-b from-cyan-500/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* CapCut Pro Header Lockup */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="flex items-center gap-2 bg-[#121422] border border-slate-700/80 rounded-xl px-4 py-2 shadow-lg shadow-black/40">
          {/* Authentic CapCut Logo Symbol */}
          <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center p-1 relative overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
              <path d="M15 25 L50 48 L15 71 Z" fill="white" />
              <path d="M85 25 L50 48 L85 71 Z" fill="white" />
              <circle cx="50" cy="48" r="6" fill="#00e5ff" />
            </svg>
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
            CapCut
            <span className="text-xs sm:text-sm uppercase font-black px-2 py-0.5 rounded bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm">
              Pro
            </span>
          </span>
        </div>
      </div>

      {/* Neon Badge: WORKS WITHOUT VPN */}
      <div className="my-3">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#051a24] border-2 border-cyan-400 text-cyan-300 font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.6)] animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
          WORKS WITHOUT VPN
        </div>
      </div>

      {/* Sub-headline: ALL PREMIUM FEATURES UNLOCKED */}
      <h2 className="text-white text-base sm:text-xl font-bold tracking-wide uppercase mt-1 mb-6 text-slate-200">
        ALL PREMIUM FEATURES UNLOCKED
      </h2>

      {/* Hero Graphic Visual Composite */}
      <div className="relative w-full max-w-md mx-auto my-2 p-4 rounded-3xl bg-gradient-to-b from-[#181a2e] to-[#0f101d] border border-cyan-500/30 shadow-2xl flex items-center justify-center gap-3 sm:gap-4 overflow-hidden">
        {/* Decorative corner glows */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-xl pointer-events-none" />

        {/* CapCut Pro Card Left */}
        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-black/60 border border-slate-700/80 shadow-inner w-24 sm:w-28 h-28 sm:h-32 text-center group hover:border-cyan-500/60 transition-all">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/20 flex items-center justify-center mb-1">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-white fill-current">
              <path d="M18 28 L50 48 L18 68 Z" fill="white" />
              <path d="M82 28 L50 48 L82 68 Z" fill="white" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">PRO VERSION</span>
        </div>

        {/* Plus Symbol */}
        <span className="text-2xl sm:text-3xl font-black text-cyan-400">+</span>

        {/* 15 Pro Badge Center */}
        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-amber-950/40 to-black/80 border border-amber-500/50 shadow-inner w-24 sm:w-28 h-28 sm:h-32 text-center">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mb-1 text-amber-300">
            <Crown className="w-7 h-7" />
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-tight">15 Pro</span>
          <span className="text-[9px] text-amber-200/80">Full Suite</span>
        </div>

        {/* Creator Avatar Right */}
        <div className="relative w-24 sm:w-28 h-28 sm:h-32 rounded-2xl overflow-hidden border border-cyan-400/40 bg-gradient-to-b from-indigo-950 to-slate-900 flex flex-col items-center justify-end pb-1 shadow-lg">
          {/* High-fidelity Vector Creator Portrait illustration matching screenshot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-rose-500 to-purple-600 p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                {/* Creator stylized graphic */}
                <div className="w-10 h-10 rounded-full bg-[#ffcb9e] relative top-1">
                  {/* Hair */}
                  <div className="absolute -top-1 inset-x-0 h-4 bg-zinc-900 rounded-t-full" />
                  {/* Smile */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1.5 border-b-2 border-zinc-800 rounded-full" />
                  {/* Beard */}
                  <div className="absolute bottom-0 inset-x-1.5 h-3 bg-zinc-900/90 rounded-b-full" />
                </div>
                {/* Shirt */}
                <div className="absolute bottom-0 w-14 h-6 bg-zinc-950 border-t border-slate-700 rounded-t-lg" />
              </div>
            </div>
          </div>
          <div className="relative z-10 bg-black/80 px-2 py-0.5 rounded text-[9px] font-semibold text-cyan-300 border border-cyan-500/30">
            Pro Editor
          </div>
        </div>
      </div>

      {/* Pricing Lockup */}
      <div className="my-5 flex flex-col items-center">
        {/* Old Strikethrough Price */}
        <div className="text-rose-400/90 line-through text-lg sm:text-xl font-bold tracking-wider mb-1">
          ₹ 6,999
        </div>

        {/* Main Price Card: ₹299/- ONE TIME PAYMENT */}
        <div className="relative px-8 py-3.5 rounded-2xl bg-[#ffde00] text-black shadow-[0_10px_30px_rgba(255,222,0,0.35)] border-2 border-yellow-300 group hover:scale-[1.02] transition-transform">
          <div className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            ₹299/-
          </div>
          <div className="text-xs sm:text-sm font-extrabold tracking-wider uppercase mt-1">
            ONE TIME PAYMENT
          </div>
        </div>
      </div>

      {/* Feature Bullet Badges (4 key points) */}
      <div className="w-full max-w-2xl my-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#14172a] border border-slate-800 hover:border-cyan-500/40 transition-colors">
          <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-200">All Pro Features</span>
        </div>

        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#14172a] border border-slate-800 hover:border-cyan-500/40 transition-colors">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
            <InfinityIcon className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-200">Lifetime Access</span>
        </div>

        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#14172a] border border-slate-800 hover:border-cyan-500/40 transition-colors">
          <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
            <Monitor className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-200">For Android & Windows</span>
        </div>

        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#14172a] border border-slate-800 hover:border-cyan-500/40 transition-colors">
          <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-slate-200 leading-tight">
            <span>Instant Access:</span>
            <span className="block text-[10px] text-amber-300 font-normal">Start Editing Now</span>
          </div>
        </div>
      </div>

      {/* Device Compatibility and Razorpay Trust */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-slate-400 my-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-300">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Android
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1 text-slate-300">
            <Monitor className="w-3.5 h-3.5 text-sky-400" /> Windows
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1 text-slate-300">
            <Apple className="w-3.5 h-3.5 text-slate-200" /> iPhone / Mac
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
          <ShieldCheck className="w-4 h-4" />
          <span>Secure Payments by Razorpay</span>
        </div>
      </div>

      {/* Main High-Conversion CTA Button */}
      <div className="w-full max-w-md my-4 flex flex-col items-center">
        <a
          href="https://rzp.io/rzp/nQllqCJ"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff9900] via-[#ff7700] to-[#ff5500] hover:from-[#ffaa00] hover:to-[#ff6600] text-black font-black text-lg sm:text-xl tracking-wide uppercase shadow-[0_10px_35px_rgba(255,119,0,0.5)] transform active:scale-95 transition-all shimmer-effect cursor-pointer flex items-center justify-center gap-2 text-center"
        >
          <Zap className="w-6 h-6 fill-black" />
          <span>Get Now ₹299 | Lifetime</span>
        </a>
        <span className="text-xs text-amber-300/90 font-medium mt-2">
          instant download link on email
        </span>
      </div>

      {/* 7-DAY MONEY BACK GUARANTEE Card */}
      <div className="w-full max-w-md my-3 p-4 rounded-2xl bg-gradient-to-r from-[#171133] to-[#12162b] border border-purple-500/40 shadow-xl flex items-center gap-4 text-left">
        {/* Circular Guarantee Badge */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shrink-0 flex items-center justify-center shadow-lg">
          <div className="w-full h-full rounded-full bg-[#130f2c] flex flex-col items-center justify-center text-center p-1">
            <span className="text-xs font-black text-cyan-300 leading-none">7-DAY</span>
            <span className="text-[8px] font-bold text-white uppercase leading-none mt-0.5">MONEY BACK</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5" />
          </div>
        </div>

        {/* Text details */}
        <div className="flex-1">
          <h4 className="text-sm font-black text-white uppercase tracking-tight">
            7-DAY MONEY BACK GUARANTEE.
          </h4>
          <ul className="text-[11px] text-slate-300 space-y-0.5 mt-1 font-medium">
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
              No Question Asked
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
              100% Risk Free
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
              Your Satisfaction is Our Priority
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
