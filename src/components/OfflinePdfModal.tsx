import React, { useState } from 'react';
import { 
  Printer, 
  Download, 
  Copy, 
  Check, 
  X, 
  FileText, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  Apple, 
  FolderDown,
  Mail
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
CAPCUT PRO - WORKS WITHOUT VPN (OFFLINE REFERENCE GUIDE & LINKS)
Official Store: Zilomart (zilomart.shop)
Date: ${new Date().toLocaleDateString()}
Support: support@zilomart.shop | info@zilomart.shop
================================================================================

1. PRODUCT OVERVIEW & PRICING:
   - Provider: Zilomart (zilomart.shop)
   - Price: ₹299/- One Time Payment (Regular: ₹6,999)
   - Instant Razorpay Order Link: https://rzp.io/rzp/nQllqCJ
   - Guarantee: 7-Day Money Back Guarantee (100% Risk Free)
   - Compatibility: Windows PC, Android, macOS

2. DOWNLOAD REPOSITORY MIRRORS:
   - Windows Desktop v4.8.0 Pro (.exe):
     https://drive.google.com/drive/folders/1CapCut-Pro-Windows-VIP-Mirror
   - Android Pro APK v12.4.0 (No VPN / Auto-Captions Unlocked):
     https://drive.google.com/drive/folders/1CapCut-Pro-Android-VIP-Mirror
   - Mac DMG v4.8.0 (Intel & Apple Silicon M1/M2/M3):
     https://drive.google.com/drive/folders/1CapCut-Pro-MacOS-VIP-Mirror
   - 10,000+ Viral Reels & Shorts Templates, SFX, Fonts Pack:
     https://drive.google.com/drive/folders/1CapCut-Reels-Assets-Drive-VIP

3. STEP-BY-STEP NO-VPN INSTALLATION GUIDE:
   A. For Windows:
      1. Download the CapCut Pro Windows installer from the mirror above.
      2. Run setup and choose English / International.
      3. The custom hosts/proxy bypass is pre-packaged; do NOT connect any VPN.
      4. Launch CapCut. All Pro effects, transitions, auto-captions, and 4K export will work directly!
   
   B. For Android:
      1. Download the CapCut Pro APK to your Android device.
      2. Enable "Install from unknown sources" in settings if prompted.
      3. Open app. The servers route through internal high-speed CDN.
      4. Sign in with any free account (or skip). All Pro features are unlocked.

4. FREQUENTLY ASKED QUESTIONS (FAQ):
   Q: What I will get in this bundle?
   A: The Package includes AI-powered tools, Android editing app, editing software for windows, and ready-made templates. With tutorials to make editing fast and professional - even for beginners.

   Q: How to Purchase and access it?
   A: We are a trusted merchant on Razorpay, so your payment is 100% secure. Once payment is successful, you'll receive an instant download link via email. Just check all folders of your email such as Promotion/Update/Social/Spam.

   Q: What do you mean by lifetime?
   A: Lifetime mean you can download your assets anytime no hurry to download at once. Link will be available for lifetime. We also keep it updating with latest data & softwares.

   Q: What if I didn't get email?
   A: There is no question of not getting Download link 100% Everyone will get the link. You should check all folders Spam/Promotion/Updates.

   Q: What are your Support Channel?
   A: For After sale support, You can reach us by email support@zilomart.shop or info@zilomart.shop.

   Q: What is the validity of Download link?
   A: It is for lifetime you can download it for unlimited time.

================================================================================
(c) 2026 Zilomart. All Rights Reserved.
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CapCut_Pro_Zilomart_Offline_Reference.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyLinks = () => {
    const text = `CapCut Pro Offline Links Directory (Zilomart):
Store: https://zilomart.shop
Windows Download: https://drive.google.com/drive/folders/1CapCut-Pro-Windows-VIP-Mirror
Android Download: https://drive.google.com/drive/folders/1CapCut-Pro-Android-VIP-Mirror
Mac Download: https://drive.google.com/drive/folders/1CapCut-Pro-MacOS-VIP-Mirror
Templates Drive: https://drive.google.com/drive/folders/1CapCut-Reels-Assets-Drive-VIP
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
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-extrabold text-white">
                Offline Reference Manual &amp; Link Directory
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
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
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
                <span>Copy All Links</span>
              </>
            )}
          </button>
        </div>

        {/* Printable & Scrollable Document Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-[13px] leading-relaxed select-text font-sans">
          {/* Document Title Header */}
          <div className="p-4 rounded-2xl bg-[#171b33] border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                Zilomart Official Document
              </div>
              <h2 className="text-lg font-black text-white">
                CapCut Pro Unlocked Bundle — Offline Reference Guide
              </h2>
              <div className="flex items-center gap-1.5 text-slate-300 mt-1">
                <span>Official Store:</span>
                <span className="text-cyan-400 font-bold">zilomart.shop</span>
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="text-right text-[11px] text-slate-400">
              <span className="text-emerald-400 font-bold block">✓ No VPN Required</span>
              <span>Updated for 2026</span>
            </div>
          </div>

          {/* Section 1: Overview and Pricing */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              1. Bundle Details &amp; Pricing
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Regular Price</span>
                <span className="text-rose-400 line-through font-bold text-sm">₹ 6,999</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40">
                <span className="text-amber-300 block text-[11px] font-semibold">Special Offer</span>
                <span className="text-amber-400 font-black text-lg">₹ 299/- (Lifetime)</span>
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
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 transition-all text-center"
              >
                <span>Instant Payment Link: https://rzp.io/rzp/nQllqCJ</span>
              </a>
            </div>
          </div>

          {/* Section 2: Direct Download Mirrors */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              2. Download Links &amp; Cloud Mirrors
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Monitor className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Windows Pro Desktop Edition v4.8.0</span>
                    <span className="text-[11px] text-slate-400">
                      Bypass lock pre-patched · 482 MB (.exe)
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-sky-950 text-sky-300 border border-sky-700 text-xs font-semibold">
                  Direct Mirror
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Android Pro Mod APK v12.4.0</span>
                    <span className="text-[11px] text-slate-400">
                      Auto-captions, effects, no watermark · 168 MB (.apk)
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-semibold">
                  Direct Mirror
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Apple className="w-4 h-4 text-slate-300 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">macOS Pro Edition v4.8.0</span>
                    <span className="text-[11px] text-slate-400">
                      Apple Silicon M1/M2/M3 &amp; Intel · 512 MB (.dmg)
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold">
                  Direct Mirror
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FolderDown className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">10,000+ Viral Reels Templates &amp; Sound FX</span>
                    <span className="text-[11px] text-slate-400">
                      Google Drive VIP Lifetime Folder
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-amber-950 text-amber-300 border border-amber-700 text-xs font-semibold">
                  VIP Drive
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Step-by-Step Installation Instructions */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              3. Installation Instructions (No VPN)
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div>
                <span className="font-bold text-white block">For Windows PC / Laptop:</span>
                <p className="text-slate-300 text-xs mt-0.5">
                  1. Run the installer (.exe) as Administrator. <br />
                  2. Choose your preferred language (English default). <br />
                  3. The patched edition includes internal route configurations so you never need to connect a third-party VPN. <br />
                  4. Enjoy full 4K 60FPS export, optical flow smooth slow-motion, and auto-subtitles.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="font-bold text-white block">For Android Devices:</span>
                <p className="text-slate-300 text-xs mt-0.5">
                  1. Download the APK directly and tap Install. <br />
                  2. If requested, tap "Allow install unknown apps from this source". <br />
                  3. Open CapCut Pro. Connect directly over your normal WiFi or mobile 4G/5G data (Jio, Airtel, Vi). All templates and Pro stickers load instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Customer Support Contact */}
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
