import React from 'react';
import { Zap, FileDown, ShieldCheck } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenCheckout: () => void;
  onOpenPdf: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenCheckout,
  onOpenPdf,
}) => {
  return (
    <div className="no-print fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#090b14]/95 backdrop-blur-lg border-t border-cyan-500/20 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-base font-black text-amber-400 leading-none">₹299</span>
          <span className="text-[10px] text-slate-400 line-through">₹6,999</span>
        </div>
        <span className="text-[9px] text-cyan-400 font-bold flex items-center gap-1">
          <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" /> No VPN Needed
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={onOpenPdf}
          className="p-2 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 active:scale-95 transition-transform"
          title="Offline PDF Reference"
        >
          <FileDown className="w-4 h-4 text-cyan-400" />
        </button>

        <a
          href="https://rzp.io/rzp/nQllqCJ"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Zap className="w-3.5 h-3.5 fill-black" />
          <span>Get Now ₹299</span>
        </a>
      </div>
    </div>
  );
};
