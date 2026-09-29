import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Copy, Check, Mail } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_DATA: FaqItem[] = [
  {
    id: '1',
    question: 'What will I get in this E-Com Super Bundle?',
    answer:
      'The package includes 1,000+ handpicked winning products with video ads & profit margins, 15+ premium high-converting Shopify store themes, direct verified Indian suppliers directory (Surat, Delhi, Mumbai with zero MOQ & COD support), 500+ high-ROAS Facebook/Instagram ad templates, and complete RTO fraud prevention blueprints.',
  },
  {
    id: '2',
    question: 'How do I purchase and access the bundle?',
    answer:
      "We are a verified merchant on Razorpay (SACHIN KUMAR / Zilomart). Once your ₹99 payment is successful, you will instantly receive your lifetime Google Drive VIP download link on your email and on-screen.",
  },
  {
    id: '3',
    question: 'Do I need technical or coding experience?',
    answer:
      'Zero coding required! The Shopify themes are 1-click importable with pre-built product layouts, sticky buy buttons, and reviews. The suppliers can be contacted directly via WhatsApp.',
  },
  {
    id: '4',
    question: 'Are the Indian suppliers verified with COD support?',
    answer:
      'Yes, all suppliers listed are verified manufacturers & wholesalers in Surat, Delhi, Mumbai, Jaipur, and Tirupur with zero MOQ and COD courier integration (Shiprocket, NimbusPost, Delhivery).',
  },
  {
    id: '5',
    question: 'What are your support channels?',
    answer:
      'For any purchase assistance or link re-sends, reach our 24/7 team via email at support@zilomart.shop or info@zilomart.shop. Average response time is under 15 minutes.',
  },
  {
    id: '6',
    question: 'What is the validity of the Google Drive link?',
    answer: 'It is for lifetime with regular additions of new winning products and trending ad creatives every month.',
  },
];

export const FaqSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAnswer = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Everything you need to know about download links, lifetime validity, and installation.
        </p>
      </div>

      {/* 2-Column Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FAQ_DATA.map((faq) => (
          <div
            key={faq.id}
            className="p-5 rounded-2xl bg-[#0e101d] border border-cyan-500/40 hover:border-cyan-400 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Question Header */}
              <div className="flex items-start justify-between gap-2 mb-2.5">
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {faq.question}
                </h4>
                <button
                  onClick={() => handleCopyAnswer(faq.id, `${faq.question}\n${faq.answer}`)}
                  title="Copy answer"
                  className="p-1 rounded text-slate-500 hover:text-cyan-400 transition-colors shrink-0"
                >
                  {copiedId === faq.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Answer Body */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                {faq.answer}
              </p>
            </div>

            {/* Email link quick affordance for support item */}
            {faq.id === '5' && (
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
                <a
                  href="mailto:support@zilomart.shop"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  support@zilomart.shop
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href="mailto:info@zilomart.shop"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  info@zilomart.shop
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
