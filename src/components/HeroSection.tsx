import React from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  Store, 
  Truck, 
  Megaphone, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Award,
  Crown,
  Layers,
  ArrowRight,
  Database,
  FileCode2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative pt-6 pb-12 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Background ambient lighting glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-72 bg-gradient-to-b from-amber-500/15 via-cyan-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Zilomart E-Commerce Accelerator Header Lockup */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="flex items-center gap-2 bg-[#121422] border border-cyan-500/30 rounded-xl px-4 py-2 shadow-lg shadow-black/40">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center p-1 text-black font-black shadow-md">
            <ShoppingBag className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
            E-COM
            <span className="text-xs sm:text-sm uppercase font-black px-2 py-0.5 rounded bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-sm">
              SUPER BUNDLE
            </span>
          </span>
        </div>
      </div>

      {/* Neon Badge: 2026 EDITION · 100% READY TO USE */}
      <div className="my-3">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#181507] border-2 border-amber-400 text-amber-300 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse">
          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"></span>
          ALL-IN-ONE E-COMMERCE &amp; DROPSHIPPING SUITE
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mt-1 mb-3">
        Launch &amp; Scale Your Store <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">
          From Day 1 With Proven Assets
        </span>
      </h1>

      <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-6">
        Complete Indian dropshipping &amp; e-commerce master package: 1,000+ high-margin winning products, verified zero-MOQ Indian supplier directory, 15+ premium Shopify themes, and battle-tested high-ROAS ad creatives.
      </p>

      {/* Hero Visual Card Composite */}
      <div className="relative w-full max-w-lg mx-auto my-2 p-5 rounded-3xl bg-gradient-to-b from-[#181a2e] to-[#0f101d] border border-cyan-500/30 shadow-2xl overflow-hidden">
        {/* Decorative corner glows */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-2xl bg-black/60 border border-slate-800 text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mb-1.5 text-amber-300">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-black text-white">1,000+ Products</span>
            <span className="text-[9px] text-slate-400 mt-0.5">High-Margin Winning Spy</span>
          </div>

          <div className="p-3 rounded-2xl bg-black/60 border border-slate-800 text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mb-1.5 text-cyan-300">
              <Store className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-black text-white">15+ Themes</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Shopify Ready-Made</span>
          </div>

          <div className="p-3 rounded-2xl bg-black/60 border border-slate-800 text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-1.5 text-emerald-300">
              <Truck className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-black text-white">Indian Suppliers</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Surat, Delhi, Zero MOQ</span>
          </div>

          <div className="p-3 rounded-2xl bg-black/60 border border-slate-800 text-center flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center mb-1.5 text-purple-300">
              <Megaphone className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-black text-white">500+ Ads Vault</span>
            <span className="text-[9px] text-slate-400 mt-0.5">High-ROAS Video Hooks</span>
          </div>
        </div>
      </div>

      {/* Pricing Lockup: Regular ₹4,999 vs Offer ₹99 */}
      <div className="mt-8 flex flex-col items-center">
        {/* Regular Price */}
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>Regular Price:</span>
          <span className="line-through text-rose-400 font-bold text-base">₹ 4,999</span>
          <span className="text-emerald-400 text-xs font-extrabold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
            SAVE 98%
          </span>
        </div>

        {/* Offer Price Highlight with Yellow Background */}
        <div className="my-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black shadow-[0_0_35px_rgba(245,158,11,0.5)] transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-black">
              ₹99/-
            </span>
          </div>
          <span className="text-[11px] font-black tracking-wider uppercase block text-black/90 mt-0.5">
            ONE TIME PAYMENT · LIFETIME ACCESS
          </span>
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
          <span>Get E-Com Bundle ₹99 | Instant Link</span>
        </a>
        <span className="text-xs text-amber-300/90 font-medium mt-2">
          instant Google Drive access link sent to your email immediately
        </span>
      </div>

      {/* 4 Core Highlight Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl mt-4">
        <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-semibold text-slate-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>1,000+ Winning Products</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-semibold text-slate-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Indian Suppliers (No MOQ)</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-semibold text-slate-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Shopify Themes &amp; Ads</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-semibold text-slate-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Lifetime Drive Updates</span>
        </div>
      </div>

      {/* Trust & Guarantee Pill */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>7-Day 100% Money-Back Guarantee</span>
        </div>
        <span className="text-slate-700">|</span>
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Razorpay Verified Merchant</span>
        </div>
        <span className="text-slate-700">|</span>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-cyan-400" />
          <span>Instant Download Under 10 Seconds</span>
        </div>
      </div>
    </section>
  );
};
