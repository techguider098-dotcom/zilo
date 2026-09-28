import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Copy, Check, Mail } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_DATA: FaqItem[] = [
  {
    id: '1',
    question: 'What I will get in this bundle?',
    answer:
      'The Package includes AI-powered tools, Android editing app, editing software for windows, and ready-made templates. With tutorials to make editing fast and professional - even for beginners.',
  },
  {
    id: '2',
    question: 'How to Purchase and access it?',
    answer:
      "We are a trusted merchant on Razorpay, so your payment is 100% secure. Once payment is successful, you'll receive an instant download link via email. Just check all folders of your email such as Promotion/Update/Social/Spam.",
  },
  {
    id: '3',
    question: 'What do you mean by lifetime?',
    answer:
      'Lifetime mean you can download your assets anytime no hurry to download at once. Link will be available for lifetime. We also keep it updating with latest data & softwares.',
  },
  {
    id: '4',
    question: "What if I didn't get email?",
    answer:
      'There is no question of not getting Download link 100% Everyone will get the link. You should check all folders Spam/Promotion/Updates',
  },
  {
    id: '5',
    question: 'What are your Support Channel?',
    answer:
      'For After sale support, You can reach us by email support@zilomart.shop or info@zilomart.shop',
  },
  {
    id: '6',
    question: 'What is the validity of Download link',
    answer: 'It is for lifetime you can download it for unlimited time',
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
