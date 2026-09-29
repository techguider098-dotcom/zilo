import React, { useState } from 'react';
import { 
  Printer, 
  Download, 
  Copy, 
  Check, 
  X, 
  FileText, 
  ShieldCheck, 
  FolderDown,
  TrendingUp,
  Store,
  Truck,
  Megaphone,
  Mail,
  Zap
} from 'lucide-react';

interface OfflinePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflinePdfModal: React.FC<OfflinePdfModalProps> = ({ isOpen, onClose }) => {
  const [copiedLinks, setCopiedLinks] = useState(false);
  const targetUrl = 'https://zilomart.shop';

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextGuide = () => {
    const textContent = `================================================================================
ALL-IN-ONE E-COMMERCE & DROPSHIPPING BUNDLE (OFFLINE GUIDE & DIRECTORY)
Official Store: Zilomart (zilomart.shop)
Date: ${new Date().toLocaleDateString()}
Support: support@zilomart.shop | info@zilomart.shop
================================================================================

1. PRODUCT OVERVIEW & PRICING:
   - Product: Complete E-Com & Dropshipping Super Bundle
   - Provider: Zilomart (zilomart.shop)
   - Price: ₹99/- One Time Payment (Regular: ₹4,999) - Save 98%
   - Instant Razorpay Order Link: https://rzp.io/rzp/nQllqCJ
   - Guarantee: 7-Day Money Back Guarantee (100% Risk Free)

2. GOOGLE DRIVE VIP FOLDERS INCLUDED:
   A. 1,000+ High-Margin Winning Products Spreadsheet:
      - Sourcing rates, selling price targets, profit margin calculations.
      - Facebook/Instagram Ad Library spy links & ready video creatives.
   
   B. 15+ Premium Shopify Themes Pack:
      - Pre-built high-converting e-commerce themes with sticky cart buttons,
        scarcity countdown timers, and integrated review widgets.
   
   C. Direct Indian Suppliers Network (Surat, Delhi, Mumbai, Tirupur, Jaipur):
      - Verified wholesalers & manufacturers with Zero MOQ (1-piece dropshipping).
      - COD support via Shiprocket, NimbusPost, Delhivery.
   
   D. 500+ High-ROAS Video Ads & Ad Copy Vault:
      - 3-second hook formulas, script templates, Canva banner master pack.
      - WhatsApp order verification system to cut RTO/fake orders under 12%.

3. STEP-BY-STEP E-COMMERCE STORE LAUNCH ROADMAP:
   Step 1: Pick 3-5 trending winning products from Module 1.
   Step 2: Connect with the verified Indian supplier in Module 3 via WhatsApp.
   Step 3: Import the ready-to-run Shopify theme from Module 2 (takes 10 mins).
   Step 4: Launch Facebook / Instagram ads using the tested creatives in Module 4.
   Step 5: Fulfill orders using zero-MOQ supplier dropshipping with COD!

4. FREQUENTLY ASKED QUESTIONS (FAQ):
   Q: How do I access after paying ₹99?
   A: You receive instant Google Drive VIP lifetime access link on email.

   Q: Are the suppliers based in India?
   A: Yes! All suppliers are in Surat, Delhi, Mumbai, Jaipur, and Tirupur with direct phone/WhatsApp contacts.

   Q: Support Channel:
   A: support@zilomart.shop | info@zilomart.shop (Response within 15 mins).

================================================================================
(c) 2026 Zilomart · zilomart.shop. All Rights Reserved.
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ECom_Super_Bundle_Zilomart_Guide.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyLinks = () => {
    const text = `E-Commerce Super Bundle Reference (Zilomart):
Store: https://zilomart.shop
Order Link: https://rzp.io/rzp/nQllqCJ
VIP Google Drive Access Key: ECOM-2026-VIP-LIFETIME-ACCESS
Support: support@zilomart.shop`;

    navigator.clipboard.writeText(text);
    setCopiedLinks(true);
    setTimeout(() => setCopiedLinks(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0f111f] border border-cyan-500/40 rounded-3xl shadow-2xl text-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#14172a] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-extrabold text-white">
                E-Com Bundle Offline Reference &amp; Roadmap Guide
              </h3>
              <p className="text-[11px] text-slate-400">
                Provided by Zilomart · Print as PDF or save locally for offline reference
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-3 bg-[#111322] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print to PDF / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadTextGuide}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium flex items-center gap-1.5 transition-all border border-slate-700"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Text (.txt)</span>
            </button>
          </div>

          <button
            onClick={handleCopyLinks}
            className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-all border border-slate-700/60"
          >
            {copiedLinks ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Links Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Links</span>
              </>
            )}
          </button>
        </div>

        {/* Printable & Scrollable Document Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-[13px] leading-relaxed select-text font-sans">
          {/* Document Title Header */}
          <div className="p-4 rounded-2xl bg-[#171b33] border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                Zilomart Official Document
              </div>
              <h2 className="text-lg font-black text-white">
                All-In-One E-Commerce &amp; Dropshipping Super Bundle
              </h2>
              <div className="flex items-center gap-1.5 text-slate-300 mt-1">
                <span>Official Store:</span>
                <span className="text-cyan-400 font-bold">zilomart.shop</span>
              </div>
            </div>

            <div className="text-right text-[11px] text-slate-400">
              <span className="text-emerald-400 font-bold block">✓ Instant Google Drive Delivery</span>
              <span>Updated for 2026</span>
            </div>
          </div>

          {/* Section 1: Overview and Pricing */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              1. Bundle Details &amp; Pricing
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Regular Price</span>
                <span className="text-rose-400 line-through font-bold text-sm">₹ 4,999</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40">
                <span className="text-amber-300 block text-[11px] font-semibold">Special Offer</span>
                <span className="text-amber-400 font-black text-lg">₹ 99/- (Lifetime)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Guarantee</span>
                <span className="text-emerald-400 font-bold text-sm">7-Day Money Back</span>
              </div>
            </div>
            <div className="mt-2.5">
              <a
                href="https://rzp.io/rzp/nQllqCJ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 transition-all text-center"
              >
                <span>Instant Razorpay Payment Link: https://rzp.io/rzp/nQllqCJ</span>
              </a>
            </div>
          </div>

          {/* Section 2: 4 Core Modules Inside */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              2. Core Modules Inside Google Drive VIP
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">1,000+ High-Margin Winning Products</span>
                    <span className="text-[11px] text-slate-400">
                      Sourcing rates, profit margins &amp; tested ad angles
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-amber-950 text-amber-300 border border-amber-700 text-xs font-semibold">
                  Module 1
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Store className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">15+ Premium Shopify Themes</span>
                    <span className="text-[11px] text-slate-400">
                      Fast-loading, sticky buy buttons, conversion widgets
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-700 text-xs font-semibold">
                  Module 2
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Direct Verified Indian Suppliers Directory</span>
                    <span className="text-[11px] text-slate-400">
                      Surat, Delhi, Mumbai WhatsApp contacts · Zero MOQ · COD ready
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-semibold">
                  Module 3
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Megaphone className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">500+ High-ROAS Video Ads &amp; RTO Scripts</span>
                    <span className="text-[11px] text-slate-400">
                      Hook formulas, Canva templates &amp; COD return reduction guide
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-purple-950 text-purple-300 border border-purple-700 text-xs font-semibold">
                  Module 4
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Customer Support Contact */}
          <div className="p-4 rounded-xl bg-[#14172a] border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-white block">Need Help or Re-send Link?</span>
              <p className="text-slate-400 text-xs mt-0.5">
                Zilomart support team responds within 15 minutes 24/7.
              </p>
            </div>
            <div className="text-left sm:text-right font-mono text-cyan-400 text-xs">
              <div>Email: <a href="mailto:support@zilomart.shop" className="underline">support@zilomart.shop</a></div>
              <div>Backup: <a href="mailto:info@zilomart.shop" className="underline">info@zilomart.shop</a></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#111322] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
          <span>&copy; 2026 Zilomart · zilomart.shop</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium"
          >
            Close Manual
          </button>
        </div>
      </div>
    </div>
  );
};
