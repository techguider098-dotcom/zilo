import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Zap, 
  Check, 
  Smartphone, 
  Monitor, 
  Apple, 
  FolderDown, 
  Download, 
  Copy, 
  ArrowRight,
  Mail,
  Lock,
  Sparkles
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPdf: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onOpenPdf,
}) => {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<'All' | 'Android' | 'Windows' | 'iOS'>('All');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText('CAPPRO-2026-VIP-LIFETIME-UNLOCKED');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0e101d] border border-cyan-500/40 rounded-3xl shadow-2xl text-slate-200 overflow-hidden my-auto">
        {/* Header */}
        <div className="px-6 py-4 bg-[#14172a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-black font-black text-xs">
              ₹
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">
                {isSuccess ? 'Order Confirmed · Instant Download' : 'Secure Checkout — CapCut Pro Lifetime'}
              </h3>
              <span className="text-[11px] text-cyan-400 font-semibold block">
                Razorpay Verified Merchant
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {/* Price lockup */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-[#14172a] border border-cyan-500/30 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block text-sm">CapCut Pro Full Suite</span>
                <span className="text-slate-400 text-[11px]">
                  Windows + Android + Mac + 10K Templates Pack
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-rose-400 line-through text-xs font-semibold">₹ 6,999</span>
                  <span className="text-emerald-400 text-[10px] font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    SAVE 95%
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-amber-400 leading-none block">
                  ₹299
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  One-Time / Lifetime
                </span>
              </div>
            </div>

            {/* Email field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 mb-1">
                Your Email Address (Download link is sent here immediately) *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 shadow-inner"
                />
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                Please double check all folders including Spam/Promotion/Updates.
              </span>
            </div>

            {/* Platform Selection */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 mb-1.5">
                Select Your Primary Device
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'All', label: 'All 3 (Bundle)', icon: Sparkles },
                  { id: 'Windows', label: 'Windows', icon: Monitor },
                  { id: 'Android', label: 'Android', icon: Smartphone },
                  { id: 'iOS', label: 'Mac / iOS', icon: Apple },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = platform === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPlatform(item.id as any)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all text-center ${
                        isSelected
                          ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300 font-bold shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[10px]">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Payment Methods preview */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                UPI (GPay, PhonePe, Paytm, BHIM), Cards &amp; NetBanking
              </span>
              <span className="text-emerald-400 font-bold">256-Bit SSL</span>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-black font-black text-base tracking-wide uppercase shadow-[0_10px_30px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
            >
              {isProcessing ? (
                <span>Connecting to Razorpay Gateway...</span>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-black" />
                  <span>Pay ₹299 &amp; Get Instant Link</span>
                </>
              )}
            </button>

            {/* Guarantee footer note */}
            <div className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>7-Day 100% Money Back Guarantee · No Questions Asked</span>
            </div>
          </form>
        ) : (
          /* SUCCESS STATE: INSTANT ACCESS LINKS */
          <div className="p-6 space-y-4 text-xs">
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 mx-auto flex items-center justify-center text-emerald-400 mb-2">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-white">Payment Successful!</h4>
              <p className="text-xs text-emerald-300 mt-0.5">
                Your instant download link has been dispatched to <span className="font-bold underline">{email}</span>
              </p>
            </div>

            {/* VIP License Key */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Lifetime VIP Access Key
                </span>
                <span className="font-mono text-cyan-300 font-bold text-xs">
                  CAPPRO-2026-VIP-LIFETIME-UNLOCKED
                </span>
              </div>
              <button
                onClick={handleCopyKey}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 text-[11px]"
              >
                {copiedKey ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedKey ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Direct Downloads */}
            <div className="space-y-2">
              <span className="font-bold text-white block text-[11px] uppercase tracking-wider">
                Direct High-Speed Mirrors
              </span>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Monitor className="w-4 h-4 text-sky-400" />
                  <div>
                    <span className="font-bold text-white block">Download CapCut Pro for Windows</span>
                    <span className="text-[10px] text-slate-400">Pre-activated .exe (482 MB) · No VPN</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-bold text-white block">Download CapCut Pro for Android</span>
                    <span className="text-[10px] text-slate-400">Direct APK (168 MB) · Auto-captions ON</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <FolderDown className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="font-bold text-white block">10,000+ Viral Reels Google Drive</span>
                    <span className="text-[10px] text-slate-400">Sound effects, fonts, LUTs, overlays</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Offline Reference Button */}
            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenPdf}
                className="flex-1 py-2.5 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-bold text-xs hover:bg-cyan-900 flex items-center justify-center gap-1.5"
              >
                <span>Save Offline PDF Reference</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
