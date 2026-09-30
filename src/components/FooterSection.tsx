import React from 'react';
import { Mail, Shield, FileText, RefreshCw, Scale } from 'lucide-react';
import { ModalType } from '../types';

interface FooterSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenModal }) => {
  return (
    <footer className="pt-12 pb-16 px-4 sm:px-6 bg-[#07080f] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Top Links and Contact Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Policy Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-300 font-medium">
            <button
              onClick={() => onOpenModal('terms')}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Terms &amp; Conditions</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Privacy Policy</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenModal('refund')}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span>Refund Policy</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenModal('legal')}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Scale className="w-3.5 h-3.5 text-purple-400" />
              <span>Legal</span>
            </button>
          </div>

          {/* Quick Contact Block */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs">
            <span className="font-bold text-white">Contact:</span>
            <a
              href="mailto:support@zilomart.shop"
              className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Email - support@zilomart.shop
            </a>
          </div>
        </div>

        {/* About Us and Secondary Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* About Us Column */}
          <div className="md:col-span-2 space-y-2">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              About Zilomart
            </h5>
            <p className="text-slate-400 leading-relaxed text-xs">
              Zilomart (zilomart.shop) is a premier digital solutions and software store dedicated to delivering verified, high-performance creative tools that empower creators and businesses. Since 2012, we have been committed to providing premium digital products, templates, and utilities tailored to the evolving needs of content creators, video editors, and digital agencies across diverse industries. Our mission is to accelerate productivity with reliable, accessible technology and instant delivery.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-2">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Zilomart:
            </h5>
            <p className="text-xs text-slate-400">
              For order inquiries, download link re-sends, or support:
            </p>
            <div className="space-y-1 font-mono text-cyan-400">
              <div>
                <a href="mailto:support@zilomart.shop" className="hover:underline">
                  support@zilomart.shop
                </a>
              </div>
              <div>
                <a href="mailto:info@zilomart.shop" className="hover:underline text-slate-300">
                  info@zilomart.shop
                </a>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Response time: Under 15 minutes (24/7)
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-[11px]">
          &copy; 2026 Zilomart · zilomart.shop · All rights reserved.
        </div>
      </div>
    </footer>
  );
};
