import React, { useState } from 'react';
import { ReferenceTopBar } from './components/ReferenceTopBar';
import { HeroSection } from './components/HeroSection';
import { LiveDownloadTicker } from './components/LiveDownloadTicker';
import { PhoneVideoDemo } from './components/PhoneVideoDemo';
import { CustomerReviews } from './components/CustomerReviews';
import { SatisfactionSection } from './components/SatisfactionSection';
import { FaqSection } from './components/FaqSection';
import { TrustProofSection } from './components/TrustProofSection';
import { FooterSection } from './components/FooterSection';
import { CheckoutModal } from './components/CheckoutModal';
import { OfflinePdfModal } from './components/OfflinePdfModal';
import { PolicyModals } from './components/PolicyModals';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openCheckout = () => setActiveModal('checkout');
  const openPdf = () => setActiveModal('offlinePdf');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#0b0c16] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Notification & Quick Reference Utility Bar */}
      <ReferenceTopBar
        onOpenPdf={openPdf}
        onOpenCheckout={openCheckout}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section */}
        <HeroSection onOpenCheckout={openCheckout} />

        {/* Live Social Proof Ticker */}
        <LiveDownloadTicker onOpenCheckout={openCheckout} />

        {/* Video Demo Phone Mockup */}
        <PhoneVideoDemo />

        {/* What Our Customers Say After Using Section */}
        <CustomerReviews />

        {/* 100% Satisfaction & Professional Work */}
        <SatisfactionSection />

        {/* FAQ Grid */}
        <FaqSection />

        {/* YouTuber Trust & Razorpay Section */}
        <TrustProofSection onOpenCheckout={openCheckout} />
      </main>

      {/* Footer Section */}
      <FooterSection onOpenModal={setActiveModal} />

      {/* Mobile Floating Sticky CTA Bar */}
      <MobileStickyBar
        onOpenCheckout={openCheckout}
        onOpenPdf={openPdf}
      />

      {/* Interactive Modals */}
      <CheckoutModal
        isOpen={activeModal === 'checkout'}
        onClose={closeModal}
        onOpenPdf={openPdf}
      />

      <OfflinePdfModal
        isOpen={activeModal === 'offlinePdf'}
        onClose={closeModal}
      />

      <PolicyModals
        modalType={activeModal}
        onClose={closeModal}
      />

      {/* PRINT-ONLY EXECUTIVE REFERENCE MANUAL SHEET */}
      <div className="print-only p-8 text-black bg-white max-w-4xl mx-auto">
        <div className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-2xl font-black uppercase tracking-tight">
            CapCut Pro Bundle — Offline Manual &amp; Links Reference
          </h1>
          <p className="text-sm font-semibold text-gray-700 mt-1">
            Official Store: <span className="font-mono text-blue-700">zilomart.shop</span>
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Document generated for offline reference. All Pro features unlocked without VPN.
          </p>
        </div>

        <div className="space-y-6 text-sm">
          <section>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-2">
              1. Direct Download Mirrors
            </h2>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>
                <strong>Windows Pro Desktop Edition (.exe):</strong> Available for Windows 10/11 (64-bit). Pre-patched for direct server access without VPN.
              </li>
              <li>
                <strong>Android Pro Mod Edition (.apk):</strong> Compatible with Android 8.0+. Full auto-captions, 4K export, and premium transitions unlocked.
              </li>
              <li>
                <strong>macOS Pro Edition (.dmg):</strong> Compatible with Apple Silicon (M1/M2/M3/M4) and Intel Macs.
              </li>
              <li>
                <strong>10,000+ Viral Reels Google Drive VIP Pack:</strong> Sound effects, typography fonts, cinematic LUTs, and trending templates.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-2">
              2. Installation Without VPN Guide
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Windows:</strong> Download the pre-configured installer and install in standard mode. Do not turn on any VPN or proxy. The software connects directly to accelerated content servers.
              </p>
              <p>
                <strong>Android:</strong> Install the provided APK. Open the application on your normal 4G/5G mobile data or WiFi network. All Pro templates and cloud filters load immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-2">
              3. Support Channels &amp; Guarantee
            </h2>
            <p>
              Backed by our <strong>7-Day 100% Money-Back Guarantee</strong>. For assistance or link re-sending, contact support 24/7:
            </p>
            <p className="font-mono text-sm mt-1">
              Email: <strong>support@zilomart.shop</strong> | <strong>info@zilomart.shop</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
