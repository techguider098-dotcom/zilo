import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Zap, 
  Check, 
  FolderDown, 
  Download, 
  Copy, 
  ArrowRight,
  Mail,
  Lock,
  Sparkles,
  TrendingUp,
  Store,
  Truck,
  Megaphone
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
      window.open('https://rzp.io/rzp/nQllqCJ', '_blank');
      setIsSuccess(true);
    }, 800);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText('ECOM-2026-VIP-LIFETIME-ACCESS');
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
                {isSuccess ? 'Order Confirmed · Instant Google Drive Access' : 'Secure Checkout — E-Com Super Bundle'}
              </h3>
              <span className="text-[11px] text-cyan-400 font-semibold block">
                Razorpay Verified Merchant · SACHIN KUMAR
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
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-[#14172a] border border-amber-500/40 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block text-sm">All-In-One E-Com Super Bundle</span>
                <span className="text-slate-400 text-[11px]">
                  1,000+ Products + 15+ Themes + Indian Suppliers + 500+ Ads
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-rose-400 line-through text-xs font-semibold">₹ 4,999</span>
                  <span className="text-emerald-400 text-[10px] font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    SAVE 98%
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-amber-400 leading-none block">
                  ₹99
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  One-Time / Lifetime
                </span>
              </div>
            </div>

            {/* Email field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 mb-1">
                Your Email Address (Instant Google Drive VIP link is sent here) *
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
                Double-check your email. Download link activates immediately upon payment.
              </span>
            </div>

            {/* Included in this pack */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2 text-slate-200">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>1,000+ High-Margin Winning Products Database</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Store className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>15+ Premium High-Converting Shopify Store Themes</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified Zero-MOQ Indian Suppliers Directory (Surat, Delhi, Mumbai)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Megaphone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>500+ High-ROAS Video Ads, Ad Copy &amp; RTO Reduction Blueprints</span>
              </div>
            </div>

            {/* Payment Methods preview */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                UPI (GPay, PhonePe, Paytm), Cards &amp; NetBanking
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
                <span>Opening Razorpay Gateway...</span>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-black" />
                  <span>Pay ₹99 &amp; Get Instant Google Drive Link</span>
                </>
              )}
            </button>

            <a
              href="https://rzp.io/rzp/nQllqCJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 border border-cyan-500/30 transition-all text-center"
            >
              <span>Direct Razorpay Payment Link (rzp.io/rzp/nQllqCJ)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Guarantee footer note */}
            <div className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>7-Day 100% Money Back Guarantee · 100% Risk Free</span>
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
                Your instant Google Drive access link has been dispatched to <span className="font-bold underline">{email}</span>
              </p>
            </div>

            {/* VIP License Key */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Lifetime VIP Access Key
                </span>
                <span className="font-mono text-cyan-300 font-bold text-xs">
                  ECOM-2026-VIP-LIFETIME-ACCESS
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

            {/* Direct Google Drive Folders */}
            <div className="space-y-2">
              <span className="font-bold text-white block text-[11px] uppercase tracking-wider">
                Direct Google Drive VIP Folders
              </span>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-amber-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="font-bold text-white block">1,000+ Winning Products Database</span>
                    <span className="text-[10px] text-slate-400">Excel / Notion Sheet with video ads &amp; profit margins</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Store className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="font-bold text-white block">15+ Premium Shopify Themes Pack</span>
                    <span className="text-[10px] text-slate-400">Pre-customized high-converting store zip files</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-bold text-white block">Direct Indian Suppliers Directory</span>
                    <span className="text-[10px] text-slate-400">Surat, Delhi, Mumbai WhatsApp contacts (Zero MOQ)</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-purple-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Megaphone className="w-4 h-4 text-purple-400" />
                  <div>
                    <span className="font-bold text-white block">500+ High-ROAS Ad Creatives &amp; RTO Scripts</span>
                    <span className="text-[10px] text-slate-400">Video hooks, Canva templates &amp; COD reduction guide</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Offline Reference Button */}
            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenPdf}
                className="flex-1 py-2.5 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-bold text-xs hover:bg-cyan-900 flex items-center justify-center gap-1.5"
              >
                <span>Save Offline PDF Guide</span>
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
