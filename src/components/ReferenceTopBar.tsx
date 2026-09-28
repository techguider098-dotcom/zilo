import React from 'react';
import { FileDown, Zap, ShieldCheck } from 'lucide-react';

interface ReferenceTopBarProps {
  onOpenPdf: () => void;
  onOpenCheckout: () => void;
}

export const ReferenceTopBar: React.FC<ReferenceTopBarProps> = ({
  onOpenPdf,
  onOpenCheckout,
}) => {
  return (
    <header className="no-print sticky top-0 z-50 bg-[#090b14]/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Zilomart Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-[#0c0e1a] flex items-center justify-center">
                <span className="font-black text-cyan-400 text-sm tracking-tighter">Z</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-white lowercase">
                  zilo<span className="text-cyan-400">mart</span><span className="text-xs text-cyan-300/80 font-bold">.shop</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-cyan-950 border border-cyan-500/30 text-[10px] text-cyan-300 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Verified Store
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Clean Action Buttons (PDF Reference & Buy CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenPdf}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Offline</span>
            <span>PDF Guide</span>
          </button>

          <a
            href="https://rzp.io/rzp/nQllqCJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>Get Link ₹299</span>
          </a>
        </div>
      </div>
    </header>
  );
};
