import React, { useState } from 'react';
import { 
  Download, 
  CheckCircle, 
  Star, 
  Sparkles, 
  Zap, 
  Smartphone, 
  Monitor, 
  Apple, 
  Pause, 
  Play, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface TickerItem {
  id: string;
  type: 'download' | 'testimonial';
  name: string;
  city: string;
  platform: 'Windows' | 'Android' | 'macOS' | 'Bundle';
  detail: string;
  timeAgo: string;
  stars?: number;
  price?: string;
}

const TICKER_ITEMS: TickerItem[] = [
  {
    id: 't1',
    type: 'download',
    name: 'Suraj C.',
    city: 'Mumbai',
    platform: 'Windows',
    detail: 'Downloaded CapCut Pro Windows Desktop v4.8 (No VPN)',
    timeAgo: 'Just now',
    price: '₹299',
  },
  {
    id: 't2',
    type: 'testimonial',
    name: 'Vikram R.',
    city: 'Bengaluru',
    platform: 'Android',
    detail: '"Auto captions generated instantly in Hindi & English without any VPN!"',
    timeAgo: '3m ago',
    stars: 5,
  },
  {
    id: 't3',
    type: 'download',
    name: 'Pooja S.',
    city: 'New Delhi',
    platform: 'Android',
    detail: 'Unlocked Android Pro APK (4K 60fps Unlocked)',
    timeAgo: '5m ago',
    price: '₹299',
  },
  {
    id: 't4',
    type: 'testimonial',
    name: 'Aman K.',
    city: 'Pune',
    platform: 'Bundle',
    detail: '"Instant Google Drive link received on email in 8 seconds. 10/10 service"',
    timeAgo: '7m ago',
    stars: 5,
  },
  {
    id: 't5',
    type: 'download',
    name: 'Naveen M.',
    city: 'Hyderabad',
    platform: 'macOS',
    detail: 'Activated macOS Apple Silicon Pro (.dmg) with 10K Reels Pack',
    timeAgo: '11m ago',
    price: '₹299',
  },
  {
    id: 't6',
    type: 'testimonial',
    name: 'Lucky K.',
    city: 'Jaipur',
    platform: 'Windows',
    detail: '"Optical flow smooth slow-mo works like Premiere Pro on my laptop!"',
    timeAgo: '14m ago',
    stars: 5,
  },
  {
    id: 't7',
    type: 'download',
    name: 'Rohit T.',
    city: 'Kolkata',
    platform: 'Windows',
    detail: 'Purchased Windows + Android Dual License',
    timeAgo: '18m ago',
    price: '₹299',
  },
  {
    id: 't8',
    type: 'testimonial',
    name: 'Fritzee D.',
    city: 'Guwahati',
    platform: 'Android',
    detail: '"Tested on Jio 5G, all Pro templates and sound effects load with 0 lag."',
    timeAgo: '22m ago',
    stars: 5,
  },
];

interface LiveDownloadTickerProps {
  onOpenCheckout?: () => void;
}

export const LiveDownloadTicker: React.FC<LiveDownloadTickerProps> = ({ onOpenCheckout }) => {
  const [isPaused, setIsPaused] = useState(false);

  const getPlatformIcon = (platform: TickerItem['platform']) => {
    switch (platform) {
      case 'Windows':
        return <Monitor className="w-3.5 h-3.5 text-sky-400" />;
      case 'Android':
        return <Smartphone className="w-3.5 h-3.5 text-emerald-400" />;
      case 'macOS':
        return <Apple className="w-3.5 h-3.5 text-slate-300" />;
      case 'Bundle':
        return <Sparkles className="w-3.5 h-3.5 text-amber-400" />;
    }
  };

  return (
    <div className="no-print relative w-full bg-[#080a14] border-y border-cyan-500/20 py-2.5 overflow-hidden select-none">
      {/* Subtle edge blur overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#080a14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#080a14] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center">
        {/* Fixed Left Badge: Live Activity */}
        <div className="shrink-0 z-20 pl-3 sm:pl-6 pr-2 sm:pr-4 flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-extrabold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide uppercase text-[10px] hidden sm:inline">LIVE ORDERS</span>
            <span className="tracking-wide uppercase text-[10px] sm:hidden">LIVE</span>
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume auto-scroll' : 'Pause ticker'}
            className="p-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>

        {/* Continuous Auto-Scrolling Marquee Track */}
        <div 
          className="flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="animate-marquee flex items-center gap-3 sm:gap-4 text-xs"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {/* Duplicated array to create an infinite seamless loop */}
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => {
              const isTestimonial = item.type === 'testimonial';

              return (
                <a
                  key={`${item.id}-${index}`}
                  href="https://rzp.io/rzp/nQllqCJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#111322] hover:bg-[#181a30] border border-slate-800 hover:border-cyan-500/40 text-slate-300 transition-all cursor-pointer shadow-sm group shrink-0"
                >
                  {/* Platform Icon & Status Badge */}
                  <div className="flex items-center gap-1 shrink-0">
                    <div className="p-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                      {getPlatformIcon(item.platform)}
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="font-bold text-white text-[11px] group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-500">({item.city})</span>
                    <CheckCircle className="w-3 h-3 text-cyan-400 fill-cyan-950" />
                  </div>

                  {/* Divider */}
                  <span className="text-slate-700">·</span>

                  {/* Activity Detail or Quote */}
                  <div className="flex items-center gap-1.5 max-w-[280px] sm:max-w-md truncate">
                    {isTestimonial && item.stars && (
                      <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                        {[...Array(item.stars)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                        ))}
                      </div>
                    )}

                    <span className={`text-[11px] truncate ${isTestimonial ? 'italic text-slate-200' : 'text-slate-300'}`}>
                      {item.detail}
                    </span>
                  </div>

                  {/* Price Tag if download */}
                  {item.price && (
                    <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-extrabold text-[10px] shrink-0 border border-amber-500/30">
                      {item.price}
                    </span>
                  )}

                  {/* Time ago */}
                  <span className="text-[10px] text-slate-500 shrink-0 font-mono">
                    {item.timeAgo}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
