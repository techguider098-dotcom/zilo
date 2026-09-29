import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, Scale } from 'lucide-react';
import { ModalType } from '../types';

interface PolicyModalsProps {
  modalType: ModalType;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalsProps> = ({ modalType, onClose }) => {
  if (!modalType || modalType === 'checkout' || modalType === 'offlinePdf' || modalType === 'successDownload') {
    return null;
  }

  const getTitleAndContent = () => {
    switch (modalType) {
      case 'terms':
        return {
          title: 'Terms & Conditions',
          icon: FileText,
          content: (
            <div className="space-y-4">
              <p>
                Welcome to <strong>zilomart</strong> (zilomart.shop). By accessing or purchasing our E-Commerce &amp; Dropshipping bundle, you agree to comply with and be bound by the following terms and conditions.
              </p>
              <h5 className="font-bold text-white text-sm">1. License &amp; Usage</h5>
              <p>
                Purchasing gives you a personal, perpetual, lifetime digital access right to download and use the provided Shopify themes, winning product spreadsheets, supplier directory, and marketing ad creatives. You may use them to launch, scale, and manage your online stores without royalties.
              </p>
              <h5 className="font-bold text-white text-sm">2. Delivery Method</h5>
              <p>
                All assets are delivered electronically immediately upon payment confirmation via email and on-screen download mirrors. Please ensure you supply an accurate email address and check all folders (Inbox, Spam, Updates, Promotions).
              </p>
              <h5 className="font-bold text-white text-sm">3. Lifetime Support &amp; Updates</h5>
              <p>
                We maintain active cloud mirrors and repository updates for software revisions. Customers may access download links at any time in the future without additional recurring fees.
              </p>
              <h5 className="font-bold text-white text-sm">4. Contact Information</h5>
              <p>
                For questions regarding terms, reach us at: <a href="mailto:support@zilomart.shop" className="text-cyan-400 underline">support@zilomart.shop</a>.
              </p>
            </div>
          ),
        };

      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: ShieldCheck,
          content: (
            <div className="space-y-4">
              <p>
                Your privacy is paramount. This policy describes how <strong>zilomart</strong> handles your data when you visit zilomart.shop or purchase digital products.
              </p>
              <h5 className="font-bold text-white text-sm">1. Data Collected</h5>
              <p>
                We only collect your email address and payment metadata to deliver your instant download links and provide customer support. We never store credit card numbers, UPI PINs, or bank passwords on our servers.
              </p>
              <h5 className="font-bold text-white text-sm">2. Payment Security</h5>
              <p>
                All transactions are processed through Razorpay's PCI-DSS Level 1 certified gateway with 256-bit SSL encryption.
              </p>
              <h5 className="font-bold text-white text-sm">3. No Third-Party Selling</h5>
              <p>
                We never sell, rent, or trade your email address or personal information to third-party marketers or advertisers.
              </p>
            </div>
          ),
        };

      case 'refund':
        return {
          title: '7-Day Refund Policy',
          icon: RefreshCw,
          content: (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-bold">
                100% Money Back Guarantee — No Questions Asked
              </div>
              <p>
                We believe wholeheartedly in the quality and value of our E-Commerce Super Bundle. If for any reason the provided themes or resources do not match what was described, you are entitled to a full refund within 7 days of purchase.
              </p>
              <h5 className="font-bold text-white text-sm">How to Request a Refund</h5>
              <p>
                Simply send an email to <a href="mailto:support@zilomart.shop" className="text-cyan-400 underline">support@zilomart.shop</a> with your purchase email or Razorpay Payment ID. Our support team will initiate your refund within 24 hours back to your original payment method.
              </p>
            </div>
          ),
        };

      case 'legal':
        return {
          title: 'Legal Disclaimer',
          icon: Scale,
          content: (
            <div className="space-y-4">
              <p>
                <strong>zilomart</strong> operates as an independent digital asset curator and e-commerce solutions provider.
              </p>
              <h5 className="font-bold text-white text-sm">Notice</h5>
              <p>
                Shopify, Facebook, Instagram, Shiprocket, and other referenced third-party trademarks are property of their respective owners. Zilomart is not officially affiliated with or endorsed by Shopify Inc. or Meta Platforms Inc.
              </p>
              <p>
                The bundle provides curated digital templates, product research spreadsheets, manufacturer supplier directories, and educational blueprints designed to assist entrepreneurs in building online stores.
              </p>
            </div>
          ),
        };

      default:
        return null;
    }
  };

  const details = getTitleAndContent();
  if (!details) return null;
  const Icon = details.icon;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0f111f] border border-cyan-500/40 rounded-3xl shadow-2xl text-slate-300 overflow-hidden my-auto max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#14172a] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Icon className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-extrabold text-white">{details.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm leading-relaxed space-y-4">
          {details.content}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#111322] border-t border-slate-800 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
