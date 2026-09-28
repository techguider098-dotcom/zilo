import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Plus, 
  Scissors, 
  Wand2, 
  Type, 
  Sparkles, 
  Video, 
  Sliders, 
  Camera, 
  Share2, 
  Check, 
  Shield, 
  RefreshCw,
  FolderOpen,
  Volume2
} from 'lucide-react';

export const PhoneVideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'editor'>('editor');
  const [currentTime, setCurrentTime] = useState(3.4);
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  // Playhead scrubber simulation
  useEffect(() => {
    let interval: any;
    if (isPlaying && activeTab === 'editor') {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= 12.0 ? 0 : Number((prev + 0.1).toFixed(1))));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeTab]);

  const handleExportSim = () => {
    setIsExporting(true);
    setExportComplete(false);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      setTimeout(() => setExportComplete(false), 4000);
    }, 1500);
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Section Heading */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white max-w-xl leading-snug mb-3">
        Watch The Video. <br />
        <span className="text-cyan-300">All features are working perfectly,</span> and the app is running smoothly.
      </h3>

      <p className="text-sm text-slate-400 max-w-md mb-8">
        Tested on Indian networks (Jio, Airtel, Vi, BSNL) and Global ISPs. Fully unlocked Pro library with zero VPN or proxy requirements.
      </p>

      {/* Screen Mode Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-[#141628] rounded-xl border border-slate-800 mb-6 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('editor')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'editor'
              ? 'bg-cyan-500 text-black shadow-md font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          Live Editor Demo
        </button>
        <button
          onClick={() => setActiveTab('home')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'home'
              ? 'bg-cyan-500 text-black shadow-md font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FolderOpen className="w-3.5 h-3.5" />
          CapCut Home Screen
        </button>
      </div>

      {/* Realistic Smartphone Mockup */}
      <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/18.5] bg-black rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(6,182,212,0.3)] border-4 border-slate-700/80 ring-1 ring-cyan-500/30">
        {/* Dynamic Island / Speaker punch hole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#151528] border border-slate-700" />
        </div>

        {/* Outer Phone Screen Canvas */}
        <div className="w-full h-full rounded-[36px] bg-[#10121d] overflow-hidden flex flex-col justify-between text-left relative border border-slate-800 select-none">
          {/* Status Bar */}
          <div className="h-8 pt-1.5 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-400 border-b border-slate-800/40">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-cyan-400 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold">VPN OFF</span>
              <span>5G</span>
            </div>
          </div>

          {/* VIEW 1: HOME SCREEN (Exact match with screenshot) */}
          {activeTab === 'home' && (
            <div className="flex-1 p-4 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Header with Pro badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-white">CapCut</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                      PRO UNLOCKED
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-xs">
                    ⚙️
                  </div>
                </div>

                {/* Get started card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/80 mb-4 shadow-sm">
                  <span className="text-xs font-bold text-white block">Get started</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Start creating with unlimited Pro effects & fonts
                  </span>
                </div>

                {/* + New Project Big Button */}
                <button
                  onClick={() => setActiveTab('editor')}
                  className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/30 hover:brightness-110 active:scale-98 transition-all mb-5 cursor-pointer"
                >
                  <Plus className="w-5 h-5 bg-white/20 rounded-full p-0.5" />
                  <span>New project</span>
                </button>

                {/* 6 Grid Icons exactly like screenshot */}
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-slate-300 font-medium">
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Wand2 className="w-5 h-5 text-pink-400" />
                    <span>AutoCut</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Camera className="w-5 h-5 text-cyan-400" />
                    <span>Camera</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>AI Prompter</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Sliders className="w-5 h-5 text-emerald-400" />
                    <span>Retouch</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Video className="w-5 h-5 text-purple-400" />
                    <span>Shorts</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Type className="w-5 h-5 text-sky-400" />
                    <span>Subtitles</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Share2 className="w-5 h-5 text-rose-400" />
                    <span>Script AI</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Scissors className="w-5 h-5 text-yellow-400" />
                    <span>BG Remove</span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-around text-[10px] text-slate-400">
                <span className="text-cyan-400 font-bold">Edit</span>
                <span>Templates</span>
                <span>Tutorials</span>
                <span>VIP Cloud</span>
              </div>
            </div>
          )}

          {/* VIEW 2: LIVE VIDEO EDITOR IN ACTION */}
          {activeTab === 'editor' && (
            <div className="flex-1 flex flex-col justify-between bg-[#0e0f19]">
              {/* Top Editor Bar */}
              <div className="px-3 py-2 flex items-center justify-between bg-black/60 border-b border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('home')}
                  className="text-slate-400 hover:text-white text-[11px]"
                >
                  ← Projects
                </button>
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">
                    4K · 60fps
                  </span>
                  <button
                    onClick={handleExportSim}
                    disabled={isExporting}
                    className="px-2.5 py-1 rounded bg-cyan-500 text-black font-extrabold text-[11px] hover:bg-cyan-400 cursor-pointer active:scale-95 transition-all"
                  >
                    {isExporting ? 'Exporting...' : 'Export Pro'}
                  </button>
                </div>
              </div>

              {/* Video Preview Canvas */}
              <div className="relative flex-1 bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 flex flex-col items-center justify-center p-3 overflow-hidden">
                {/* Simulated dynamic video scene */}
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-cyan-900/50 via-purple-900/40 to-slate-950 flex flex-col items-center justify-center relative p-3 border border-cyan-500/20">
                  {/* Neon light simulation */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(6,182,212,0.25),transparent_60%)]" />

                  {/* Dynamic motion text overlay in video */}
                  <div className="relative z-10 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold bg-black/60 px-2 py-0.5 rounded-full border border-cyan-500/30">
                      Auto-Captions [Active]
                    </span>
                    <h4 className="text-base font-black text-white mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      "Make Viral Reels in 60s"
                    </h4>
                    <span className="text-[11px] text-amber-300 font-semibold drop-shadow">
                      ⚡ Smooth Optical Flow 60fps
                    </span>
                  </div>

                  {/* Audio visualizer wave */}
                  <div className="absolute bottom-2 flex items-center gap-0.5 h-6">
                    {[12, 18, 24, 10, 20, 26, 14, 22, 16, 28, 12, 20, 15, 24].map((h, i) => (
                      <span
                        key={i}
                        className={`w-1 bg-cyan-400/80 rounded-full transition-all duration-150 ${
                          isPlaying ? 'animate-pulse' : 'opacity-40'
                        }`}
                        style={{ height: isPlaying ? `${(h * (i % 2 === 0 ? 1 : 0.8))}px` : '6px' }}
                      />
                    ))}
                  </div>

                  {/* Exporting toast overlay */}
                  {isExporting && (
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                      <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mb-2" />
                      <span className="text-xs font-bold text-white">Rendering 4K HDR...</span>
                      <span className="text-[10px] text-cyan-300">No Watermark applied</span>
                    </div>
                  )}

                  {/* Export Complete Notification */}
                  {exportComplete && (
                    <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 p-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mb-2">
                        <Check className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-white">Export Complete!</span>
                      <span className="text-[10px] text-emerald-300 mt-1">Saved to gallery with 100% Pro quality</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Scrubber and Timeline Area */}
              <div className="p-2.5 bg-black/90 border-t border-slate-800">
                {/* Time and play controls */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 px-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-6 h-6 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:bg-cyan-400 active:scale-95"
                    >
                      {isPlaying ? <Pause className="w-3 h-3 fill-black" /> : <Play className="w-3 h-3 fill-black ml-0.5" />}
                    </button>
                    <span>00:0{Math.floor(currentTime)} / 00:15</span>
                  </div>
                  <span className="text-cyan-400 font-sans text-[10px] font-semibold flex items-center gap-1">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    Pro Unlocked
                  </span>
                </div>

                {/* Multi-track Video Timeline */}
                <div className="space-y-1 relative py-1">
                  {/* Scrubber Playhead Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white z-10 shadow-[0_0_8px_white]"
                    style={{ left: `${(currentTime / 15) * 100}%` }}
                  />

                  {/* Track 1: Video clip track */}
                  <div className="h-6 rounded bg-indigo-900/60 border border-indigo-500/40 flex items-center px-2 text-[9px] text-indigo-200 font-semibold overflow-hidden">
                    <Video className="w-3 h-3 mr-1 text-cyan-300" /> Main Video (4K)
                  </div>

                  {/* Track 2: Subtitle text track */}
                  <div className="h-5 rounded bg-purple-900/60 border border-purple-500/40 flex items-center px-2 text-[9px] text-purple-200 font-semibold overflow-hidden">
                    <Type className="w-3 h-3 mr-1 text-pink-300" /> Auto Subtitles
                  </div>

                  {/* Track 3: Audio waveform */}
                  <div className="h-5 rounded bg-cyan-950/80 border border-cyan-500/30 flex items-center px-2 text-[9px] text-cyan-300 font-semibold overflow-hidden">
                    <Volume2 className="w-3 h-3 mr-1 text-cyan-400" /> Trending Beat (No Copyright)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Home Indicator Bar */}
          <div className="h-5 flex items-center justify-center bg-black">
            <div className="w-24 h-1 rounded-full bg-slate-600" />
          </div>
        </div>
      </div>
    </section>
  );
};
