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
            All-In-One E-Commerce &amp; Dropshipping Super Bundle — Reference Sheet
          </h1>
          <p className="text-sm font-semibold text-gray-700 mt-1">
            Official Store: <span className="font-mono text-blue-700">zilomart.shop</span> | Price: <strong>₹99</strong>
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Instant Google Drive delivery. Direct access link: https://rzp.io/rzp/nQllqCJ
          </p>
        </div>

        <div className="space-y-6 text-sm">
          <section>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-2">
              1. Core VIP Drive Modules Included
            </h2>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>
                <strong>1,000+ High-Margin Winning Products:</strong> Researched spreadsheet with tested video ads, pricing formulas, and supplier sourcing links.
              </li>
              <li>
                <strong>15+ Premium Shopify Store Themes:</strong> Pre-built high-converting responsive store themes with sticky buy buttons and conversion badges.
              </li>
              <li>
                <strong>Direct Verified Indian Suppliers Network:</strong> Surat, Delhi, Mumbai, Tirupur, Jaipur wholesalers with zero MOQ and COD shipping.
              </li>
              <li>
                <strong>500+ High-ROAS Video Ads &amp; Marketing Vault:</strong> Hook formulas, Canva templates, and RTO return reduction blueprints.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-2">
              2. Quick Store Launch Blueprint
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Step 1:</strong> Select 3 winning products from Module 1 and connect with the Surat/Delhi verified suppliers via WhatsApp (Module 3).
              </p>
              <p>
                <strong>Step 2:</strong> Import the pre-configured Shopify theme into your store and launch Facebook/Instagram ads using the ready-made creatives in Module 4.
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
